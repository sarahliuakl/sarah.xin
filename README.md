# Sarah.xin Personal Website

A personal website built with Vite, React, TypeScript, and Tailwind CSS.

## Development

To run the project in development mode:

```bash
# Install dependencies
npm install

# Run both frontend and API server
npm run dev:all

# Or run them separately
npm run dev       # Frontend only
npm run dev:api   # API server only
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
RESEND_API_KEY=your_resend_api_key
TO_EMAIL_ADDRESS=your_email@example.com
```

## Building for Production

```bash
npm run build
```

This will generate a `dist` directory with the production build.

## Deploying to Vercel

This project is configured for deployment on Vercel.

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `TO_EMAIL_ADDRESS`

## Project Structure

- `/src` - Frontend React application
- `/api` - Vercel API functions
- `/public` - Static assets
- `/posts` - Blog post content

## Contact Form

The contact form uses the Resend API to send emails. The implementation includes:
- Frontend form in `/src/pages/ContactPage.tsx`
- API endpoint in `/api/send-email.ts`
