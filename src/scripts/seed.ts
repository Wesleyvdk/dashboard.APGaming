import { PrismaClient } from "@/prisma/generated/client"
import bcrypt from "bcryptjs"
import crypto from "crypto"

const prisma = new PrismaClient()

export async function seedDB() {
  const username = "ehzgodd"
  const password = crypto.randomBytes(16).toString("hex") // Generate a random 32-character password
  console.log("Creating admin user... with password:", password)
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        roles: ["ADMIN"],
        status: "ACTIVE",
        invitationToken: crypto.randomBytes(16).toString("hex"),
      },
    })

    console.log("Admin user created successfully")
    console.log("Username:", username)
    console.log("Password:", password)
    console.log("User:", user)
    console.log("Please store this password securely and change it after first login")

    // Create games
    const games = [{ name: "Rocket League" }, { name: "League of Legends" }, { name: "EAFC" }]

    for (const game of games) {
      const createdGame = await prisma.game.upsert({
        where: { name: game.name },
        update: {},
        create: game,
      })
      console.log(`Game created: ${createdGame.name}`)

      // Create a default team for each game
      const createdTeam = await prisma.team.create({
        data: {
          name: `${game.name} Team`,
          game: { connect: { id: createdGame.id } },
        },
      })
      console.log(`Team created: ${createdTeam.name}`)
    }

    console.log("Database seeding completed successfully")
  } catch (error) {
    console.error("Error during database seeding:", error)
  } finally {
    await prisma.$disconnect()
  }
}

seedDB()

