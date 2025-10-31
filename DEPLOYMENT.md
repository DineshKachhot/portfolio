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

The contact form uses **Web3Forms** to send emails directly from the frontend. This is a free, unlimited service that requires no backend, serverless functions, or environment variables.

### Email Setup Instructions

#### 1. Get Your Access Key

1. Visit [web3forms.com](https://web3forms.com)
2. Enter your email address (e.g., `dinesh.kachhot@gmail.com`)
3. Click "Get Your Access Key"
4. Copy the access key (UUID format)

#### 2. Configure the Access Key

The access key is already configured in `src/components/Contact.tsx`. If you need to update it:

1. Open `src/components/Contact.tsx`
2. Find the `handleSubmit` function
3. Locate the `access_key` in the request body (around line 53)
4. Replace with your Web3Forms access key if needed

Current access key: `80c6747d-8676-4049-ad27-eb4c5683da71`

#### 3. Email Configuration

- Emails are sent directly to the email address you registered with Web3Forms
- The sender's email will be in the "Reply-To" field for easy responses
- No additional configuration is needed

### Testing the Contact Form

1. **Test locally**:
   ```bash
   npm run dev
   ```
   Submit the form at `http://localhost:5173` and check your email inbox

2. **Test in production**:
   - Submit the contact form from your deployed site
   - Check your email inbox (the address you registered with Web3Forms)
   - Verify the email contains all form fields (name, email, subject, message)

### Troubleshooting Email Issues

- **"Failed to send email"**:
  - Verify the access key in `Contact.tsx` is correct
  - Check browser console for error messages
  - Ensure the form fields are properly filled out
  - Visit [web3forms.com](https://web3forms.com) to verify your access key is active

- **Emails not received**:
  - Check spam/junk folder
  - Verify the email address registered with Web3Forms is correct
  - Check Web3Forms dashboard for submission logs

### Benefits of Web3Forms

- ✅ **No backend required** - Works with static hosting (GitHub Pages, Vercel, etc.)
- ✅ **No CORS issues** - Handled by Web3Forms API
- ✅ **No environment variables** - Access key is in the code (safe for public repos)
- ✅ **Unlimited free submissions** - No quotas or limits
- ✅ **Simple setup** - Just need an access key

## Important Notes

1. **Repository Name**: If deploying to GitHub Pages, update the `base` path in `vite.config.ts` to match your repository name
2. **Email Service**: Contact form uses Web3Forms - no backend or serverless functions required
3. **Access Key**: The Web3Forms access key is safe to include in the code (it's tied to your email address)
4. **Static Site**: This is a fully static site with no server-side dependencies

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
  - Verify the Web3Forms access key is correct in `Contact.tsx`
  - Check browser console for error messages
  - Ensure all required form fields are filled out
  - Test the form submission and check your email inbox

### Debugging Tools

#### GitHub Pages
- **Actions Logs**: Go to Actions tab in your GitHub repository
- **Pages Settings**: Check Settings → Pages for deployment status

#### Vercel Dashboard
- **Deployment Logs**: Check the Deployments tab for build logs
- **Analytics**: View traffic and performance metrics