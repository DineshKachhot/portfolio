# Deployment Guide

This portfolio is a frontend-only application that can be deployed to either Vercel or GitHub Pages.

## Deployment Options

### Option 1: Vercel (Recommended)

#### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Vercel CLI installed (`npm i -g vercel`) - optional, can use web UI

#### Steps

**Using Vercel Web UI:**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository `DineshKachhot/portfolio`
4. Vercel will auto-detect the build settings
5. Click "Deploy"

**Using Vercel CLI:**
1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel
   ```

#### Configuration Files
- **`vercel.json`**: Configuration for static site deployment
- **`vite.config.ts`**: Vite build configuration

#### URL Structure
Your website will be available at:
```
https://[your-project-name].vercel.app
```

You can also add a custom domain in Vercel project settings.

### Option 2: GitHub Pages

#### Prerequisites
- GitHub account
- Repository created on GitHub

#### Steps
1. **Push your code to GitHub repository**
2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on every push to main/master branch

#### Configuration Files
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`vite.config.ts`**: Configured with correct base path for GitHub Pages

#### URL Structure
Your website will be available at:
```
https://[your-github-username].github.io/[repository-name]
```

#### Important
- Make sure to update the `base` path in `vite.config.ts` to match your repository name
- If your repository is not named 'portfolio', update the base path accordingly

## Local Development

### Setup
```bash
npm install
npm run dev
```

The development server will start at `http://localhost:5173`

## Contact Form

The contact form uses a **Vercel serverless function** with **Nodemailer** to send emails via Gmail SMTP. This allows emails to be sent directly without requiring the user to have an email client configured.

### Email Setup Instructions

#### 1. Gmail App Password Setup

Since Gmail requires an App Password (not your regular password) for SMTP authentication:

1. **Enable 2-Step Verification** on your Google account:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification
   - Follow the prompts to enable 2-Step Verification

2. **Generate an App Password**:
   - Still in Security settings, find "App passwords" (may be under 2-Step Verification)
   - Click "App passwords" and select "Mail" and "Other (Custom name)"
   - Enter a name like "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password (remove spaces: `xxxx xxxx xxxx xxxx` becomes `xxxxxxxxxxxxxxxx`)

#### 2. Vercel Environment Variables

1. **Deploy to Vercel** (if not already done):
   - Either use Vercel CLI or the web UI
   - The `api/send-email.ts` function will automatically be deployed as a serverless function

2. **Set Environment Variables** in Vercel Dashboard:
   - Go to your Vercel project → Settings → Environment Variables
   - Add the following variables:
     - `GMAIL_USER`: Your Gmail address (e.g., `dinesh.kachhot@gmail.com`)
     - `GMAIL_APP_PASSWORD`: Your 16-character Gmail App Password (from step 1)
   - Make sure to add these for **Production**, **Preview**, and **Development** environments
   - Click "Save"

3. **Redeploy** after setting environment variables:
   - Go to Deployments tab
   - Click the three dots on the latest deployment → "Redeploy"

#### 3. Configure Frontend API URL

Update the frontend to point to your Vercel serverless function:

1. **Option A: Using Environment Variable** (Recommended):
   - Add to your build environment or `.env` file:
     ```
     VITE_EMAIL_API_URL=https://your-project-name.vercel.app/api/send-email
     ```
   - Replace `your-project-name` with your actual Vercel project name

2. **Option B: Hardcode in Contact Component**:
   - Edit `src/components/Contact.tsx`
   - Update line 47 to replace `'https://your-project-name.vercel.app/api/send-email'` with your actual Vercel URL

#### 4. CORS Configuration

The serverless function is configured to accept requests from:
- `https://dineshkachhot.github.io` (GitHub Pages)
- `https://kdpro.info` (Custom domain)
- `http://localhost:5173` and `http://localhost:3000` (Local development)

If you're using a different domain, update the `allowedOrigins` array in `api/send-email.ts`.

### Testing the Contact Form

1. **Test locally** (requires Vercel CLI):
   ```bash
   vercel dev
   ```
   This will run the serverless function locally on `http://localhost:3000`

2. **Test in production**:
   - Submit the contact form from your deployed site
   - Check your Gmail inbox for the email
   - Verify the sender's email is in the "Reply-To" field for easy responses

### Troubleshooting Email Issues

- **"Email service is not properly configured"**:
  - Verify environment variables are set in Vercel dashboard
  - Ensure you've redeployed after adding environment variables

- **"Failed to send email"**:
  - Check Vercel function logs (Vercel Dashboard → Functions → View Logs)
  - Verify Gmail App Password is correct (no spaces, 16 characters)
  - Ensure 2-Step Verification is enabled on your Google account

- **CORS errors**:
  - Verify your domain is in the `allowedOrigins` array in `api/send-email.ts`
  - Check browser console for specific CORS error messages

- **Function timeout**:
  - Check Vercel function logs for errors
  - Verify SMTP settings are correct (smtp.gmail.com, port 587)

## Important Notes

1. **Repository Name**: If deploying to GitHub Pages, update the `base` path in `vite.config.ts` to match your repository name
2. **Email Service**: Contact form requires Vercel serverless function deployment with Gmail SMTP credentials
3. **Environment Variables**: Never commit Gmail credentials to the repository - always use Vercel environment variables
4. **Separate Deployments**: Frontend can be on GitHub Pages while the email API runs on Vercel

## Troubleshooting

### Common Issues

- **Frontend not deploying**:
  - Check that GitHub Pages is enabled in repository settings (for GitHub Pages)
  - Verify the workflow file `.github/workflows/deploy.yml` exists (for GitHub Pages)
  - Check GitHub Actions tab for build logs
  - Ensure you're pushing to the main or master branch

- **404 errors on GitHub Pages**:
  - Verify the `base` path in `vite.config.ts` matches your repository name
  - If your repository is not named 'portfolio', update the base path accordingly

- **Build failures**:
  - Check that all dependencies are in `package.json`
  - Verify Node.js version compatibility
  - Check build logs in GitHub Actions or Vercel
  - Run `npm install` to ensure dependencies are installed

- **Contact form not working**:
  - The form uses mailto: links, which require a configured email client
  - Test by clicking "Send Message" - your default email client should open
  - If no email client is configured, users may need to set one up

### Debugging Tools

#### GitHub Pages
- **Actions Logs**: Go to Actions tab in your GitHub repository
- **Pages Settings**: Check Settings → Pages for deployment status

#### Vercel Dashboard
- **Deployment Logs**: Check the Deployments tab for build logs
- **Analytics**: View traffic and performance metrics