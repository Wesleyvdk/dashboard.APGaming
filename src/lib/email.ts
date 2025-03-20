import { isResendConfigured, resend } from "./resend";
import { render } from "@react-email/render";
import ResetPasswordEmail from "@/emails/reset-password-email";
import nodemailer from "nodemailer";

type EmailTemplate = "RESET_PASSWORD";

interface SendEmailOptions {
  to: string;
  subject: string;
  template: EmailTemplate;
  data: Record<string, any>;
}

export async function sendEmail({
  to,
  subject,
  template,
  data,
}: SendEmailOptions): Promise<boolean> {
  try {
    // If Resend is configured, use it
    if (isResendConfigured()) {
      return await sendWithResend({ to, subject, template, data });
    }

    // Fall back to nodemailer
    return await sendWithNodemailer({ to, subject, template, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

async function sendWithResend({
  to,
  subject,
  template,
  data,
}: SendEmailOptions): Promise<boolean> {
  try {
    let html = "";

    // Render the appropriate template
    if (template === "RESET_PASSWORD") {
      html = await render(
        ResetPasswordEmail({
          resetLink: data.resetLink,
          userName: data.userName,
        })
      );
    }

    const { error } = await resend.emails.send({
      from: `AP Gaming <${process.env.EMAIL_FROM || "noreply@apgaming.org"}>`,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending with Resend:", error);
    return false;
  }
}

async function sendWithNodemailer({
  to,
  subject,
  template,
  data,
}: SendEmailOptions): Promise<boolean> {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let html = "";

    // Render the appropriate template
    if (template === "RESET_PASSWORD") {
      html = await render(
        ResetPasswordEmail({
          resetLink: data.resetLink,
          userName: data.userName,
        })
      );
    }

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@apgaming.org",
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("Error sending with Nodemailer:", error);
    return false;
  }
}
