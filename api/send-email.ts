import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Define the expected request body structure
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL_ADDRESS;
  
  // Check if API key and email are configured
  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ 
      message: 'Server configuration error: API key or recipient email missing.' 
    });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, email, message } = req.body as ContactFormData;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, message' 
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Using the default allowed sender
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

    // Success response
    return res.status(200).json({ 
      message: 'Email sent successfully!', 
      data 
    });
  } catch (error: any) {
    console.error('API Endpoint Error:', error);
    return res.status(500).json({ 
      message: 'An unexpected error occurred.', 
      error: error.message 
    });
  }
}