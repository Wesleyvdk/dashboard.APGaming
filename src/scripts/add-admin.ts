import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function addAdminUser() {
  const email = "contact@ap-gaming.org";
  const password = crypto.randomBytes(16).toString("hex"); // Generate a random 32-character password
  console.log("Creating admin user... with password:", password);
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("Admin user created successfully");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(
      "Please store this password securely and change it after first login"
    );
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

addAdminUser();
