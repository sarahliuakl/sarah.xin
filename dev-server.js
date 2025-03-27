import express from 'express';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL_ADDRESS;
  
  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ 
      message: 'Server configuration error: API key or recipient email missing.' 
    });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, message' 
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <p>You received a new message from your website contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ 
        message: 'Failed to send email.', 
        error: error.message || 'Unknown Resend error' 
      });
    }

    return res.status(200).json({ 
      message: 'Email sent successfully!', 
      data 
    });
  } catch (error) {
    console.error('API Endpoint Error:', error);
    return res.status(500).json({ 
      message: 'An unexpected error occurred.', 
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Development API server running at http://localhost:${PORT}`);
});
