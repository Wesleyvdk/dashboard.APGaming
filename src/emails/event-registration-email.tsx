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
} from "@react-email/components";

interface EventRegistrationEmailProps {
  userName: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventDescription: string;
  wantsReminder: boolean;
  registrationId: string;
}

export const EventRegistrationEmail = ({
  userName,
  eventTitle,
  eventDate,
  eventLocation,
  eventDescription,
  wantsReminder,
  registrationId,
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

          <Text style={text}>
            If you need to cancel your registration or have any questions,
            please contact us.
          </Text>

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

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

export default EventRegistrationEmail;
