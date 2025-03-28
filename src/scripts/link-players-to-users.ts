import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("Starting player-user linking process...")

    // Get all players without user accounts
    const unlinkedPlayers = await prisma.player.findMany({
        where: {
            userId: null,
        },
        orderBy: {
            lastName: "asc",
        },
    })

    console.log(`Found ${unlinkedPlayers.length} unlinked players`)

    // Get all users without player accounts
    const usersWithoutPlayers = await prisma.user.findMany({
        where: {
            player: null,
        },
        orderBy: {
            username: "asc",
        },
    })

    console.log(`Found ${usersWithoutPlayers.length} users without player accounts`)

    // For each unlinked player, try to find a matching user by email
    let autoLinkedCount = 0

    for (const player of unlinkedPlayers) {
        if (!player.email) continue

        const matchingUser = await prisma.user.findFirst({
            where: {
                email: player.email,
                player: null,
            },
        })

        if (matchingUser) {
            // Link the player to the user
            await prisma.player.update({
                where: { id: player.id },
                data: {
                    user: {
                        connect: { id: matchingUser.id },
                    },
                },
            })

            // Add PLAYER role to the user
            await prisma.user.update({
                where: { id: matchingUser.id },
                data: {
                    roles: {
                        push: "PLAYER",
                    },
                },
            })

            console.log(
                `Auto-linked player ${player.firstName} ${player.lastName} to user ${matchingUser.username} by email match`,
            )
            autoLinkedCount++
        }
    }

    console.log(`Auto-linked ${autoLinkedCount} players to users by email match`)
    console.log(`${unlinkedPlayers.length - autoLinkedCount} players remain unlinked`)
    console.log("Player-user linking process completed")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

