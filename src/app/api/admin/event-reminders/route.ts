import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { processEventReminders } from "@/lib/event-reminders"

export async function POST() {
    const session = await auth()

    if (!session || !session.roles.includes("ADMIN")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        await processEventReminders()
        return NextResponse.json({ success: true, message: "Event reminders processed successfully" })
    } catch (error) {
        console.error("Error processing event reminders:", error)
        return NextResponse.json({ success: false, message: "Failed to process event reminders" }, { status: 500 })
    }
}

