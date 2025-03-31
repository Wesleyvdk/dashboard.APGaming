import { NextResponse } from "next/server"

const allowedOrigins = ["https://ap-gaming.org", "https://www.apgaming.be", "http://localhost:4000", "http://localhost:3000"]

export async function cors(response: Response | NextResponse) {
    const origin = response.headers.get("Origin") || ""
    const isAllowedOrigin = allowedOrigins.includes(origin)

    const headers = new Headers(response.headers)

    if (isAllowedOrigin) {
        headers.set("Access-Control-Allow-Origin", origin)
    } else {
        // For security, we can set this to a specific allowed origin instead of *
        headers.set("Access-Control-Allow-Origin", allowedOrigins[0])
    }

    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    headers.set("Access-Control-Max-Age", "86400")

    const newResponse = new NextResponse(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    })

    return newResponse
}

