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
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface Props {
  firstName: string;
  lastName: string;
  advisoryGroup: string;
  rnfCode: string;
  email: string;
  mobile: string;
  hearAboutUs: string;
  yearsInPractice: string;
  clientRelationships: string;
  manageAdvisors: string;
  painPoints: string[];
  frustrationDescription: string;
  urgencyLevel: number;
  foundingCircle: string;
  earlyAccessReason: string;
  advisorOwes: string;
}

export const ApplicationSubmissionEmail = ({
  firstName,
  lastName,
  advisoryGroup,
  rnfCode,
  email,
  mobile,
  hearAboutUs,
  yearsInPractice,
  clientRelationships,
  manageAdvisors,
  painPoints,
  frustrationDescription,
  urgencyLevel,
  foundingCircle,
  earlyAccessReason,
  advisorOwes,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>
        New Join Us Application from {firstName} {lastName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Application Submission</Heading>
          <Text style={text}>
            A new application has been submitted via the Join Us form.
          </Text>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Personal Information
            </Heading>
            <Row style={row}>
              <Column>
                <Text style={label}>Name</Text>
                <Text style={value}>
                  {firstName} {lastName}
                </Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>Email</Text>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>Mobile</Text>
                <Text style={value}>{mobile}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>Advisory Group/Firm</Text>
                <Text style={value}>{advisoryGroup}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>RNF Code</Text>
                <Text style={value}>{rnfCode}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>Heard About Us Via</Text>
                <Text style={value}>{hearAboutUs}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Practice Information
            </Heading>
            <Row style={row}>
              <Column>
                <Text style={label}>Years in Practice</Text>
                <Text style={value}>{yearsInPractice}</Text>
              </Column>
              <Column>
                <Text style={label}>Client Relationships</Text>
                <Text style={value}>{clientRelationships}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column>
                <Text style={label}>Manages Advisors?</Text>
                <Text style={value}>{manageAdvisors}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Pain Points & Frustrations
            </Heading>
            <Text style={label}>Selected Pain Points:</Text>
            <Text style={value}>
              {painPoints && painPoints.length > 0
                ? painPoints.join(", ")
                : "None selected"}
            </Text>
            
            <Text style={label}>Frustration Description:</Text>
            <Text style={paragraph}>{frustrationDescription}</Text>
            
            <Text style={label}>Urgency Level:</Text>
            <Text style={value}>{urgencyLevel}/10</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Additional Information
            </Heading>
            <Text style={label}>Founding Circle Interest:</Text>
            <Text style={value}>{foundingCircle}</Text>

            <Text style={label}>Reason for Early Access:</Text>
            <Text style={paragraph}>{earlyAccessReason}</Text>

            <Text style={label}>Thoughts on Advisor's Duty:</Text>
            <Text style={paragraph}>{advisorOwes}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 48px 48px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "600",
  marginTop: "24px",
  marginBottom: "12px",
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
};

const paragraph = {
  ...text,
  whiteSpace: "pre-wrap" as const,
  marginBottom: "16px",
  backgroundColor: "#f9fafb",
  padding: "12px",
  borderRadius: "4px",
  border: "1px solid #e5e7eb",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "24px 0",
};

const row = {
  marginBottom: "12px",
};

const label = {
  color: "#8898aa",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginBottom: "4px",
};

const value = {
  color: "#525f7f",
  fontSize: "16px",
  marginTop: "0",
  marginBottom: "0",
};

export default ApplicationSubmissionEmail;
