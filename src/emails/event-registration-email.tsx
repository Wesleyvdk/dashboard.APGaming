/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Button,
} from "@react-email/components";

interface EventRegistrationEmailProps {
  userName: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventDescription: string;
  wantsReminder: boolean;
  registrationId: string;
  cancelUrl: string;
  optOutUrl: string | null;
}

export const EventRegistrationEmail = ({
  userName,
  eventTitle,
  eventDate,
  eventLocation,
  eventDescription,
  wantsReminder,
  registrationId,
  cancelUrl,
  optOutUrl,
}: EventRegistrationEmailProps) => {
  const previewText = `Your registration for ${eventTitle} is confirmed!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Registration Confirmed</Heading>

          <Text style={text}>Hello {userName},</Text>

          <Text style={text}>
            Thank you for registering for <strong>{eventTitle}</strong>. Your
            registration has been confirmed!
          </Text>

          <Section style={eventCard}>
            <Heading as="h2" style={h2}>
              {eventTitle}
            </Heading>

            <Text style={eventDetail}>
              <strong>Date & Time:</strong> {eventDate}
            </Text>

            <Text style={eventDetail}>
              <strong>Location:</strong> {eventLocation}
            </Text>

            {eventDescription && (
              <>
                <Hr style={hr} />
                <Text style={eventDetail}>
                  <strong>About this event:</strong>
                </Text>
                <Text style={eventDetail}>
                  {eventDescription
                    .split("\n")
                    .map((line, i) => (line ? line : <br key={i} />))}
                </Text>
              </>
            )}
          </Section>

          <Text style={text}>
            {wantsReminder
              ? "You've opted to receive a reminder on the day of the event."
              : "You've chosen not to receive a reminder for this event."}
          </Text>

          <Section style={actionsSection}>
            <Text style={actionText}>Need to make changes?</Text>

            <Button href={cancelUrl} style={cancelButton}>
              Cancel Registration
            </Button>
            <Text style={actionText}>
              If the button doesn't work, copy and paste this link: {cancelUrl}
            </Text>

            {optOutUrl && (
              <>
                <Button href={optOutUrl} style={optOutButton}>
                  Opt Out of Reminder
                </Button>
                <Text style={actionText}>
                  If the button doesn't work, copy and paste this link:{" "}
                  {cancelUrl}
                </Text>
              </>
            )}
          </Section>

          <Text style={text}>We look forward to seeing you there!</Text>

          <Text style={text}>
            Best regards,
            <br />
            AP Gaming Team
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            This is an automated message. Please do not reply to this email.
            <br />
            Registration ID: {registrationId}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const h1 = {
  color: "#333",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 20px",
  padding: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 10px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const eventCard = {
  backgroundColor: "#f9f9f9",
  border: `1px solid #e0e0e0`,
  borderRadius: "5px",
  margin: "20px 0",
  padding: "20px",
};

const eventDetail = {
  color: "#555",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "10px 0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const actionsSection = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const actionText = {
  color: "#666",
  fontSize: "14px",
  margin: "0 0 15px",
};

const buttonBase = {
  backgroundColor: "#f0f0f0",
  borderRadius: "4px",
  color: "#333",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "bold" as const,
  margin: "0 10px 10px 10px",
  padding: "12px 20px",
  textDecoration: "none",
};

const cancelButton = {
  ...buttonBase,
  backgroundColor: "#f8d7da",
  color: "#721c24",
};

const optOutButton = {
  ...buttonBase,
  backgroundColor: "#e2e3e5",
  color: "#383d41",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

export default EventRegistrationEmail;
