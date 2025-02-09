import { seedDB } from "@/scripts/seed";
import { redirect } from "next/navigation";

export default async function Home() {
  await seedDB();
  redirect("/dashboard");
}
