import { Client, Intents } from "discord.js"

let client: Client | null = null

async function getDiscordClient() {
    if (!client) {
        client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES] })
        await client.login(process.env.DISCORD_BOT_TOKEN)
    }
    return client
}

export async function sendDiscordInvitation(discordId: string, email: string, password: string) {
    try {
        const client = await getDiscordClient()
        const user = await client.users.fetch(discordId)
        await user.send(`Welcome to AP Gaming! You can log in to ${process.env.NEXT_PUBLIC_BASE_URL} using the following credentials:
Email: ${email}
Password: ${password}

Please change your password after your first login.`)
        console.log(`Discord invitation sent to user ${discordId}`)
    } catch (error) {
        console.error(`Error sending Discord invitation to user ${discordId}:`, error)
        throw new Error("Failed to send Discord invitation")
    }
}

export async function sendDiscordEventReminder(
    discordId: string,
    eventTitle: string,
    eventDate: string,
    eventLocation: string,
) {
    try {
        const client = await getDiscordClient()
        const user = await client.users.fetch(discordId)
        await user.send(`🔔 **Event Reminder**
    
**${eventTitle}**
📅 ${eventDate}
📍 ${eventLocation}

Don't miss it!`)
        console.log(`Discord event reminder sent to user ${discordId}`)
    } catch (error) {
        console.error(`Error sending Discord event reminder to user ${discordId}:`, error)
    }
}

