import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendInvitationEmail(
  email: string,
  token: string,
  password: string
) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "AP Gaming Invitation",
    html: `
      <p>You've been invited to join AP Gaming!</p>
      <p>Please click the link below to accept the invitation:</p>
      <p>your login details: <br> email: ${email} <br> password: ${password}</p>
      <a href="${process.env.NEXT_PUBLIC_BASE_URL}/invite/${token}">Accept Invitation</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Invitation email sent successfully");
  } catch (error) {
    console.error("Error sending invitation email:", error);
  }
}
