// Import built-in https module
import https from 'https';

// Your Telegram bot token (store securely in environment for production)
const BOT_TOKEN = '8141485107:AAGlQuG1emSYNOh4NimXAaY74qieJr6rDIE';
const CHAT_ID = '6914291644';

// Dummy form data
const formData = {
    name: 'John Doe',
    email: 'johndoe@test.com',
    message: 'This is a demo form submission.'
};

// Telegram message text
const text =
    `📝 New Form Submission:\n\n` +
    `👤 Name: ${formData.name}\n` +
    `✉️ Email: ${formData.email}\n` +
    `💬 Message: ${formData.message}`;

// Prepare API endpoint
const TELEGRAM_API = `/bot${BOT_TOKEN}/sendMessage`;

// Compose POST data
const postData = new URLSearchParams({
    chat_id: CHAT_ID,
    text: text
}).toString();

// HTTPS request options
const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: TELEGRAM_API,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

// Send request
const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log('Telegram response:', data);
    });
});

req.on('error', (e) => {
    console.error('Error:', e);
});

// Write data and finish the request
req.write(postData);
req.end();
