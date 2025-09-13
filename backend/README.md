# Backend Email Service

This backend service handles email sending for the portfolio contact form using Nodemailer.

## Setup Instructions

### 1. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Update the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in your `.env` file

### 3. Alternative Email Services

You can also use other email services by modifying the transporter configuration in `server.js`:

#### Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

#### Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Running the Server

### Development Mode:
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST /api/send-email
Sends an email from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Discussion",
  "message": "Hello, I'd like to discuss a mobile app project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running!"
}
```

## Features

- ✅ Form validation
- ✅ Email format validation
- ✅ HTML and text email templates
- ✅ Confirmation email to sender
- ✅ Error handling
- ✅ CORS enabled for frontend integration
- ✅ Professional email templates

## Troubleshooting

1. **"Invalid login" error**: Check your email credentials and app password
2. **"Connection timeout"**: Verify your internet connection and email service settings
3. **CORS errors**: Ensure the frontend is making requests to the correct backend URL
4. **Port already in use**: Change the PORT in your `.env` file

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of your main email password
- Consider using environment variables in production
- Implement rate limiting for production use
