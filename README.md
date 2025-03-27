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

## Deployment Options

### GitHub Pages with GitHub Actions (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push your code to the `main` branch of your GitHub repository:
   ```bash
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site to GitHub Pages.

3. Access your deployed site at `https://sarahliuakl.github.io/sarah.xin/`

4. **Important**: You need to add the following secrets to your GitHub repository:
   - Go to your repository > Settings > Secrets and variables > Actions
   - Add the following repository secrets:
     - `RESEND_API_KEY`
     - `TO_EMAIL_ADDRESS`

### Netlify Deployment (Alternative)

The project is also configured for Netlify deployment for handling the contact form API:

1. Connect your GitHub repository to Netlify

2. Set the following environment variables in Netlify:
   - `RESEND_API_KEY`
   - `TO_EMAIL_ADDRESS`

3. Netlify will automatically build and deploy your site.

## Project Structure

- `/src` - Frontend React application
- `/api` - Vercel API functions
- `/public` - Static assets
- `/posts` - Blog post content

## Contact Form

The contact form uses the Resend API to send emails. The implementation includes:
- Frontend form in `/src/pages/ContactPage.tsx`
- API endpoint in `/api/send-email.ts`
