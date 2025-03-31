import { createHmac } from "crypto"

// Generate a secure token for email actions
export function generateActionToken(action: string, id: string, email: string, expiresAt: Date): string {
    const payload = {
        action,
        id,
        email,
        expiresAt: expiresAt.toISOString(),
    }

    const payloadString = JSON.stringify(payload)
    const payloadBase64 = Buffer.from(payloadString).toString("base64")

    // Create a signature using HMAC with your JWT secret
    const signature = createHmac("sha256", process.env.JWT_SECRET || "default-secret")
        .update(payloadBase64)
        .digest("base64")

    // Return the token as payload + signature
    return `${payloadBase64}.${signature}`
}

// Verify and decode a token
export function verifyActionToken(token: string): {
    valid: boolean
    expired?: boolean
    payload?: {
        action: string
        id: string
        email: string
        expiresAt: string
    }
} {
    try {
        const [payloadBase64, signature] = token.split(".")

        // Verify the signature
        const expectedSignature = createHmac("sha256", process.env.JWT_SECRET || "default-secret")
            .update(payloadBase64)
            .digest("base64")

        if (signature !== expectedSignature) {
            return { valid: false }
        }

        // Decode the payload
        const payloadString = Buffer.from(payloadBase64, "base64").toString()
        const payload = JSON.parse(payloadString)

        // Check if token is expired
        const expiresAt = new Date(payload.expiresAt)
        if (expiresAt < new Date()) {
            return { valid: false, expired: true }
        }

        return { valid: true, payload }
    } catch (error) {
        console.error("Error verifying token:", error)
        return { valid: false }
    }
}

