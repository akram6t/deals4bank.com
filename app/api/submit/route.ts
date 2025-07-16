// app/api/submit/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import https from 'https';

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY! as string);
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN! as string;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID! as string;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL! as string;
const RESEND_DOMAIN = process.env.RESEND_DOMAIN! as string;

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Validate required fields
        if (!formData.fullName || !formData.email || !formData.phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!RESEND_DOMAIN || !ADMIN_EMAIL) {
            console.error('Missing required environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Return success response immediately
        const response = NextResponse.json(
            { success: true, message: 'Application submitted successfully!' },
            { status: 200 }
        );

        // Send notifications in the background
        sendNotifications(formData).catch(console.error);

        return response;
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

async function sendNotifications(formData: any) {
    // Send Telegram notification
    await sendTelegramNotification(formData);

    // Send email via Resend
    await sendEmail(formData);
}

async function sendTelegramNotification(formData: any) {
    if (!BOT_TOKEN || !CHAT_ID) {
        console.warn('Telegram credentials not configured');
        return;
    }

    const text =
        `📝 New Application Submitted:\n\n` +
        `👤 Name: ${formData.fullName}\n` +
        `📧 Email: ${formData.email}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `🏙️ City: ${formData.city}\n` +
        `📍 State: ${formData.state}\n` +
        `📌 Pincode: ${formData.pincode}\n` +
        `🛎️ Service: ${formData.serviceType}`;

    const postData = new URLSearchParams({
        chat_id: CHAT_ID,
        text: text
    }).toString();

    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${BOT_TOKEN}/sendMessage`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve(data));
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

async function sendEmail(formData: any) {
    try {
        // Send to applicant
        await resend.emails.send({
            from: `${RESEND_DOMAIN}`,
            to: formData.email,
            // reply_to: `support@${RESEND_DOMAIN}`,
            subject: 'Your Application Has Been Received',
            html: `
                <h1>Thank you for your application, ${formData.fullName}!</h1>
                <p>We've received your application for <strong>${formData.serviceType}</strong> and will review it shortly.</p>
                <h2>Application Details:</h2>
                <ul>
                    <li><strong>Name:</strong> ${formData.fullName}</li>
                    <li><strong>Email:</strong> ${formData.email}</li>
                    <li><strong>Phone:</strong> ${formData.phone}</li>
                    <li><strong>Location:</strong> ${formData.city}, ${formData.state} - ${formData.pincode}</li>
                    <li><strong>Service:</strong> ${formData.serviceType}</li>
                </ul>
                <p>Our team will contact you within 24 hours.</p>
                <p>Best regards,<br/>Your Company Team</p>
            `
        });

        // Send to admin
        await resend.emails.send({
            from: `${RESEND_DOMAIN}`,
            to: ADMIN_EMAIL,
            subject: `New Application: ${formData.serviceType}`,
            html: `
                <h1>New Application Received</h1>
                <p>Service: <strong>${formData.serviceType}</strong></p>
                <h2>Applicant Details:</h2>
                <ul>
                    <li><strong>Name:</strong> ${formData.fullName}</li>
                    <li><strong>Email:</strong> ${formData.email}</li>
                    <li><strong>Phone:</strong> ${formData.phone}</li>
                    <li><strong>Location:</strong> ${formData.city}, ${formData.state} - ${formData.pincode}</li>
                </ul>
            `
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
}