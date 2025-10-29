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

The contact form uses **mailto:** links, which means:
- No backend server required
- No email service configuration needed
- Clicking "Send Message" opens the user's default email client
- All form data is pre-filled in the email

This works in all modern browsers and doesn't require any special setup.

## Important Notes

1. **Repository Name**: If deploying to GitHub Pages, update the `base` path in `vite.config.ts` to match your repository name
2. **No Backend Required**: This is a fully static site with no server-side dependencies
3. **Contact Form**: Uses mailto: links - no email service setup required

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