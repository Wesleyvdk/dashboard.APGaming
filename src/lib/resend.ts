import { Resend } from "resend";

// Initialize Resend with API key
export const resend = new Resend(process.env.RESEND_API_KEY);

// Check if Resend is properly configured
export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
