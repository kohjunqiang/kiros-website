// Vercel Serverless Function for Email Submission
// Handles form submission and sends email via Resend

const { Resend } = require('resend');

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Allowed origins for CORS (update with your actual domains)
const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'https://kiros.sg',
    'https://www.kiros.sg',
    'https://kiros.vercel.app'
];

/**
 * Vercel Serverless Function Handler
 * Handles POST requests to send email via Resend
 */
module.exports = async (req, res) => {
    // CORS headers
    const origin = req.headers.origin;
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method Not Allowed',
            message: 'Only POST requests are accepted'
        });
    }

    try {
        // Extract and validate request body
        const { email, name } = req.body;

        // Input validation
        if (!email || !name) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'Email and name are required fields'
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid Email',
                message: 'Please provide a valid email address'
            });
        }

        // Sanitize inputs (prevent injection and limit length)
        const sanitizedName = name.trim().substring(0, 100);
        const sanitizedEmail = email.trim().toLowerCase();

        // Send email via Resend
        const data = await resend.emails.send({
            from: 'KIROS Access Request <noreply@kiros.sg>', // Update with your verified domain
            to: ['hello@kiros.sg'], // Recipient email from footer
            replyTo: sanitizedEmail,
            subject: `Early Access Request from ${sanitizedName}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                            line-height: 1.6;
                            color: #111827;
                            background-color: #f8fafc;
                            margin: 0;
                            padding: 20px;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            overflow: hidden;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .email-header {
                            background: linear-gradient(135deg, #1C2E63 0%, #051040 100%);
                            color: #ffffff;
                            padding: 30px;
                            text-align: center;
                        }
                        .email-header h1 {
                            margin: 0;
                            font-size: 24px;
                            font-weight: 600;
                        }
                        .email-body {
                            padding: 30px;
                        }
                        .info-row {
                            margin-bottom: 20px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #e2e8f0;
                        }
                        .info-row:last-child {
                            border-bottom: none;
                            margin-bottom: 0;
                        }
                        .info-label {
                            font-weight: 600;
                            color: #4b5563;
                            font-size: 14px;
                            margin-bottom: 4px;
                        }
                        .info-value {
                            font-size: 16px;
                            color: #111827;
                        }
                        .email-footer {
                            background-color: #f8fafc;
                            padding: 20px 30px;
                            text-align: center;
                            font-size: 12px;
                            color: #9ca3af;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="email-header">
                            <h1>🚀 New Early Access Request</h1>
                        </div>
                        <div class="email-body">
                            <div class="info-row">
                                <div class="info-label">Name</div>
                                <div class="info-value">${sanitizedName}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Email</div>
                                <div class="info-value">
                                    <a href="mailto:${sanitizedEmail}" style="color: #E56024; text-decoration: none;">
                                        ${sanitizedEmail}
                                    </a>
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Submitted</div>
                                <div class="info-value">${new Date().toLocaleString('en-SG', {
                                    timeZone: 'Asia/Singapore',
                                    dateStyle: 'full',
                                    timeStyle: 'long'
                                })}</div>
                            </div>
                        </div>
                        <div class="email-footer">
                            This request was submitted via the KIROS landing page early access form.
                        </div>
                    </div>
                </body>
                </html>
            `
        });

        // Log success (Vercel logs)
        console.log('Email sent successfully:', {
            id: data.id,
            to: 'hello@kiros.sg',
            from: sanitizedEmail,
            timestamp: new Date().toISOString()
        });

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Your request has been submitted successfully! We\'ll be in touch soon.',
            id: data.id
        });

    } catch (error) {
        // Log error for debugging
        console.error('Email sending error:', {
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });

        // Check if error is from Resend API
        if (error.name === 'ResendError') {
            return res.status(500).json({
                error: 'Email Service Error',
                message: 'Unable to send email at this time. Please try again later.'
            });
        }

        // Return generic error to client (don't expose internal details)
        return res.status(500).json({
            error: 'Server Error',
            message: 'Failed to process your request. Please try again later.'
        });
    }
};
