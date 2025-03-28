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

interface EventReminderEmailProps {
  userName: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventDescription: string;
}

export default function EventReminderEmail({
  userName,
  eventTitle,
  eventDate,
  eventLocation,
  eventDescription,
}: EventReminderEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Reminder: {eventTitle} is coming up!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Event Reminder</Heading>
          <Text style={text}>Hi {userName},</Text>
          <Text style={text}>
            This is a friendly reminder that the following event is coming up
            soon:
          </Text>
          <Section style={eventBox}>
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
                <Text style={eventDetail}>{eventDescription}</Text>
              </>
            )}
          </Section>
          <Text style={text}>We look forward to seeing you there!</Text>
          <Text style={text}>
            Best regards,
            <br />
            The AP Gaming Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            © {new Date().getFullYear()} AP Gaming. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "15px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const eventBox = {
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  padding: "15px",
  margin: "20px 0",
  border: "1px solid #eaeaea",
};

const eventDetail = {
  color: "#555",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "10px 0",
};

const hr = {
  borderColor: "#eaeaea",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "30px",
};
