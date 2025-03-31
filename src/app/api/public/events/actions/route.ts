import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyActionToken } from "@/lib/tokens"
import { cors } from "@/lib/cors"

export async function OPTIONS() {
    return cors(
        new Response(null, {
            status: 204,
        }),
    )
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const token = searchParams.get("token")
        const action = searchParams.get("action")

        if (!token || !action) {
            return cors(NextResponse.json({ error: "Missing token or action" }, { status: 400 }))
        }

        // Verify the token
        const tokenData = verifyActionToken(token)

        if (!tokenData.valid) {
            if (tokenData.expired) {
                return cors(NextResponse.json({ error: "Token has expired" }, { status: 401 }))
            }

            return cors(NextResponse.json({ error: "Invalid token" }, { status: 401 }))
        }

        const { payload } = tokenData

        // Check if the action matches the token's action
        if (action !== payload!.action) {
            return cors(NextResponse.json({ error: "Invalid action for this token" }, { status: 400 }))
        }

        // Handle different actions
        if (action === "cancel-registration") {
            return await handleCancelRegistration(request, payload!.id, payload!.email)
        } else if (action === "opt-out-reminder") {
            return await handleOptOutReminder(request, payload!.id, payload!.email)
        } else {
            return cors(NextResponse.json({ error: "Unknown action" }, { status: 400 }))
        }
    } catch (error) {
        console.error("Error processing action:", error)
        return cors(NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 }))
    }
}

async function handleCancelRegistration(request: NextRequest, registrationId: string, email: string) {
    try {
        // Find the registration
        const registration = await prisma.eventAttendance.findFirst({
            where: {
                id: registrationId,
                email,
            },
            include: {
                event: {
                    select: {
                        title: true,
                    },
                },
            },
        })

        if (!registration) {
            return cors(NextResponse.json({ error: "Registration not found" }, { status: 404 }))
        }

        // Update the registration status to cancelled
        await prisma.eventAttendance.update({
            where: { id: registrationId },
            data: { status: "cancelled" },
        })

        // Return success HTML page
        const htmlResponse = new NextResponse(
            `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Registration Cancelled</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
            }
            .card {
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
              color: #d63384;
            }
            .message {
              margin: 20px 0;
            }
            .footer {
              font-size: 14px;
              color: #666;
              margin-top: 40px;
            }
          </style>
        </head>
        <body>
          <h1>Registration Cancelled</h1>
          <div class="card">
            <div class="message">
              <p>Your registration for <strong>${registration.event.title}</strong> has been successfully cancelled.</p>
            </div>
          </div>
          <div class="footer">
            <p>AP Gaming Team</p>
          </div>
        </body>
        </html>
      `,
            {
                status: 200,
                headers: {
                    "Content-Type": "text/html",
                },
            },
        )

        return cors(htmlResponse)
    } catch (error) {
        console.error("Error cancelling registration:", error)
        return cors(NextResponse.json({ error: "Failed to cancel registration" }, { status: 500 }))
    }
}

async function handleOptOutReminder(request: NextRequest, registrationId: string, email: string) {
    try {
        // Find the registration
        const registration = await prisma.eventAttendance.findFirst({
            where: {
                id: registrationId,
                email,
            },
            include: {
                event: {
                    select: {
                        title: true,
                    },
                },
            },
        })

        if (!registration) {
            return cors(NextResponse.json({ error: "Registration not found" }, { status: 404 }))
        }

        // Update the registration to opt out of reminders
        await prisma.eventAttendance.update({
            where: { id: registrationId },
            data: { wantsReminder: false },
        })

        // Return success HTML page
        const htmlResponse = new NextResponse(
            `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Reminder Opt-Out</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
            }
            .card {
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
              color: #d63384;
            }
            .message {
              margin: 20px 0;
            }
            .footer {
              font-size: 14px;
              color: #666;
              margin-top: 40px;
            }
          </style>
        </head>
        <body>
          <h1>Reminder Opt-Out</h1>
          <div class="card">
            <div class="message">
              <p>You have successfully opted out of reminders for <strong>${registration.event.title}</strong>.</p>
              <p>You will still be registered for the event, but you will not receive a reminder email.</p>
            </div>
          </div>
          <div class="footer">
            <p>AP Gaming Team</p>
          </div>
        </body>
        </html>
      `,
            {
                status: 200,
                headers: {
                    "Content-Type": "text/html",
                },
            },
        )

        return cors(htmlResponse)
    } catch (error) {
        console.error("Error opting out of reminder:", error)
        return cors(NextResponse.json({ error: "Failed to opt out of reminder" }, { status: 500 }))
    }
}

