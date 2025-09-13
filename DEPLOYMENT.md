# Deployment Guide

This project is set up for **separate deployment**: Frontend on GitHub Pages and Backend on Vercel.

## Frontend Deployment (GitHub Pages)

### Prerequisites
- GitHub account
- Repository created on GitHub

### Steps
1. **Push your code to GitHub repository**
2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on every push to main/master branch

3. **Set environment variable** in GitHub repository:
   - Go to repository Settings → Secrets and variables → Actions
   - Add the following secret:
     - `VITE_API_URL`: Your Vercel backend URL (e.g., `https://your-backend.vercel.app`)

### URL Structure
Your website will be available at:
```
https://[your-github-username].github.io/[repository-name]
```

### Configuration Files
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`vite.config.ts`**: Configured with correct base path for GitHub Pages

## Backend Deployment (Vercel)

### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Vercel CLI installed (`npm i -g vercel`)

### Steps
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

4. **Set environment variables** in Vercel dashboard:
   - Go to your project dashboard on Vercel
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password

### Configuration Files
- **`vercel.json`**: Main configuration for backend deployment
- **`backend/vercel.json`**: Backend-specific configuration
- **`.vercelignore`**: Files to exclude from deployment

### Environment Variables
- `EMAIL_USER`: Your Gmail address for sending emails
- `EMAIL_PASS`: Gmail app password (not your regular password)

### URL Structure
- **Backend**: `https://your-backend.vercel.app`
- **Frontend**: `https://[your-github-username].github.io/[repository-name]`

## Local Development

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Gmail App Password Setup

To use the contact form, you need to set up a Gmail app password:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form" as the name
   - Copy the generated 16-character password
3. **Set Environment Variables**:
   - `EMAIL_USER`: Your Gmail address (e.g., `yourname@gmail.com`)
   - `EMAIL_PASS`: The 16-character app password (not your regular password)

## Important Notes

1. **Repository Name**: Update the `base` path in `vite.config.ts` to match your repository name
2. **CORS**: The backend is configured to allow all origins for development. Consider restricting this in production
3. **Email Setup**: You'll need to generate an app password for Gmail in your Google Account settings
4. **Environment Variables**: Make sure to set all required environment variables in Vercel dashboard
5. **Vercel Functions**: Backend functions have a 10-second timeout limit

## Troubleshooting

### Common Issues

- **Contact form not working**: 
  - Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly in Vercel
  - Check that `VITE_API_URL` is set correctly in GitHub repository secrets
  - Ensure the API URL points to your Vercel backend (e.g., `https://your-backend.vercel.app`)
  - Check Vercel function logs for errors
  - Ensure you're using an app password, not your regular Gmail password

- **Frontend not deploying to GitHub Pages**:
  - Check that GitHub Pages is enabled in repository settings
  - Verify the workflow file `.github/workflows/deploy.yml` exists
  - Check GitHub Actions tab for build logs
  - Ensure you're pushing to the main or master branch

- **404 errors on GitHub Pages**:
  - Verify the `base` path in `vite.config.ts` matches your repository name
  - If your repository is not named 'portfolio', update the base path accordingly

- **CORS errors**:
  - The backend allows all origins in development
  - For production, consider restricting CORS to your GitHub Pages domain

- **Build failures**:
  - Check that all dependencies are in `package.json`
  - Verify Node.js version compatibility
  - Check build logs in GitHub Actions or Vercel

- **Function timeout**:
  - Email sending functions are limited to 10 seconds
  - If emails are large or slow to send, consider optimizing the email content

### Debugging Tools

#### GitHub Pages
- **Actions Logs**: Go to Actions tab in your GitHub repository
- **Pages Settings**: Check Settings → Pages for deployment status
- **Repository Secrets**: Verify `VITE_API_URL` is set in Settings → Secrets and variables → Actions

#### Vercel Dashboard
- **Function Logs**: Go to Functions tab in your Vercel project to see runtime logs
- **Environment Variables**: Check Settings → Environment Variables
- **Deployment Logs**: Check the Deployments tab for build logs
