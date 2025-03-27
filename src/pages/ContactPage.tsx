import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.');
      }

      setStatus('success');
      setStatusMessage('Your message has been sent successfully!');
      // Optionally clear the form
      // setName('');
      // setEmail('');
      // setMessage('');

    } catch (error: any) {
      setStatus('error');
      setStatusMessage(error.message || 'An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out via email, phone, or the contact form. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-pink-500" size={20} />
              <a href="mailto:sarahliu.akl@gmail.com" className="text-gray-700 hover:text-pink-600">sarahliu.akl@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-pink-500" size={20} />
              <span className="text-gray-700">+64 022 525 5864</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-pink-500" size={20} />
              <span className="text-gray-700">Auckland, New Zealand</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 disabled:bg-gray-50"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 disabled:bg-gray-50"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 disabled:bg-gray-50"
              disabled={status === 'loading'}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center p-3 text-sm text-green-700 bg-green-100 rounded-md border border-green-200">
              <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0" />
              {statusMessage}
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-200">
              <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
