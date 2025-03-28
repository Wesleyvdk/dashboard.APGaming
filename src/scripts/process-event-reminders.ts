import { processEventReminders } from "@/lib/event-reminders"

async function main() {
    console.log("Starting event reminder processing...")

    try {
        await processEventReminders()
        console.log("Event reminders processed successfully")
    } catch (error) {
        console.error("Error processing event reminders:", error)
        process.exit(1)
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

