import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Get user by ID
export async function getUser(userId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        return user
    } catch (error) {
        console.error("Error getting user:", error)
        return null
    }
}

// Get user by username
export async function getUserByUsername(username: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        })

        return user
    } catch (error) {
        console.error("Error getting user by username:", error)
        return null
    }
}

// Other user-related data access functions...

