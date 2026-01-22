"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ApplicationSubmissionEmail } from "@/emails/application-submission";

interface FormData {
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

export async function submitJoinForm(formData: FormData) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const emailHtml = await render(ApplicationSubmissionEmail(formData));

        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.SMTP_EMAIL_FROM,
            to: process.env.CONTACT_FORM_EMAIL,
            subject: `New Join Us Form Submission from ${formData.firstName} ${formData.lastName}`,
            html: emailHtml,
            cc: process.env.CONTACT_FORM_EMAIL_CC
                ? process.env.CONTACT_FORM_EMAIL_CC.split(",").map((email: string) => email.trim())
                : undefined,
            bcc: process.env.CONTACT_FORM_EMAIL_BCC ? process.env.CONTACT_FORM_EMAIL_BCC.split(",").map((email: string) => email.trim()) : undefined,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send application. Please try again." };
    }
}
