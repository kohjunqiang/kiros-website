"use server";

import nodemailer from "nodemailer";
import { env } from "@/env";
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
            host: env.SMTP_HOST,
            port: parseInt(env.SMTP_PORT),
            secure: env.SMTP_SECURE === "true",
            auth: {
                user: env.SMTP_USERNAME,
                pass: env.SMTP_PASSWORD,
            },
        });

        const emailHtml = await render(ApplicationSubmissionEmail(formData));

        const mailOptions: nodemailer.SendMailOptions = {
            from: env.SMTP_EMAIL_FROM,
            to: env.CONTACT_FORM_EMAIL,
            subject: `New Join Us Form Submission from ${formData.firstName} ${formData.lastName}`,
            html: emailHtml,
            cc: env.CONTACT_FORM_EMAIL_CC
                ? env.CONTACT_FORM_EMAIL_CC.split(",").map(email => email.trim())
                : undefined,
            bcc: env.CONTACT_FORM_EMAIL_BCC ? env.CONTACT_FORM_EMAIL_BCC.split(",").map(email => email.trim()) : undefined,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send application. Please try again." };
    }
}
