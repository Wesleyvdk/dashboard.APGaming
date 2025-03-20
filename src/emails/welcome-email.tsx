/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface WelcomeEmailProps {
  userName: string;
  loginLink: string;
}

export default function WelcomeEmail({
  userName,
  loginLink,
}: WelcomeEmailProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const logoUrl = `${baseUrl}/images/logo.png`;

  return (
    <Html>
      <Head />
      <Preview>Welcome to AP Gaming, {userName}!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white rounded-lg shadow-md mx-auto my-10 p-8 max-w-xl">
            <Img
              src={logoUrl}
              width="48"
              height="48"
              alt="AP Gaming Logo"
              className="mx-auto mb-5"
            />
            <Heading className="text-2xl font-bold text-center text-gray-800 mb-6">
              Welcome to AP Gaming!
            </Heading>
            <Section>
              <Text className="text-gray-700 mb-4">Hi {userName},</Text>
              <Text className="text-gray-700 mb-4">
                We're excited to have you join the AP Gaming community! Your
                account has been successfully created and is now ready to use.
              </Text>
              <Text className="text-gray-700 mb-2">
                As a member of AP Gaming, you'll have access to:
              </Text>
              <Text className="text-gray-700 ml-5 mb-1">
                • Team schedules and match information
              </Text>
              <Text className="text-gray-700 ml-5 mb-1">
                • Exclusive team content and updates
              </Text>
              <Text className="text-gray-700 ml-5 mb-1">
                • Communication with team members and staff
              </Text>
              <Text className="text-gray-700 ml-5 mb-4">• And much more!</Text>
              <Text className="text-gray-700 mb-6">
                You can log in to your account using the link below:
              </Text>
              <Section className="text-center mb-8">
                <Link
                  href={loginLink}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium no-underline inline-block hover:bg-indigo-700"
                >
                  Log In to AP Gaming
                </Link>
              </Section>
              <Text className="text-gray-700 mb-4">
                If you have any questions or need assistance, please don't
                hesitate to contact our support team.
              </Text>
              <Text className="text-gray-700 mb-1">Welcome aboard!</Text>
              <Text className="text-gray-700 font-medium">
                The AP Gaming Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
