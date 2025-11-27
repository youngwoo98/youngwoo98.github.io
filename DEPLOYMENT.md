# 🚀 GitHub Pages Deployment Guide

## Prerequisites

- GitHub account
- Repository named `yourusername.github.io` (or any repo name)
- Git installed on your computer

## 📋 Step-by-Step Deployment

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the settings

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to main branch
git push -u origin main
```

### Step 3: Wait for Deployment

1. Go to **Actions** tab in your GitHub repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once green ✅, your site is live!

### Step 4: Visit Your Site

Your site will be available at:
- **If repo is `username.github.io`**: https://username.github.io
- **If repo has different name**: https://username.github.io/repo-name

## 🔄 Updating Your Site

After the initial deployment, every time you push to the `main` branch:

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Update portfolio"
git push
```

The site will **automatically rebuild and redeploy** in 1-2 minutes!

## ⚙️ Configuration

### If Using Custom Repository Name

If your repo is NOT named `username.github.io`, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/repo-name/', // Change this to your repo name
});
```

Then rebuild and push.

## 🧪 Test Build Locally

Before pushing, test the production build:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Open http://localhost:4173 to see the production version.

## 🐛 Troubleshooting

### Build Fails on GitHub

**Check the Actions tab for errors:**
1. Go to **Actions** tab
2. Click the failed workflow
3. Click on the failed job
4. Read the error message

**Common issues:**
- Missing dependencies: Make sure `package.json` is committed
- Build errors: Test `npm run build` locally first
- Node version: Check if you need a specific version

### Site Shows 404

**Check these:**
1. GitHub Pages is enabled (Settings → Pages)
2. Source is set to "GitHub Actions"
3. Workflow completed successfully (green checkmark)
4. Wait 5-10 minutes for DNS propagation

### CSS Not Loading

**If your repo name is NOT `username.github.io`:**
1. Update `base` in `vite.config.ts` to `'/repo-name/'`
2. Rebuild and push

### Images Not Loading

Make sure image paths are correct:
- Use relative paths: `./image.png` or `/image.png`
- Or use absolute URLs from CDN/external sources

## 📝 Current Workflow

The `.github/workflows/deploy.yml` file:

1. **Triggers** on push to `main` branch
2. **Installs** dependencies with npm
3. **Builds** the project (`npm run build`)
4. **Uploads** the `dist/` folder
5. **Deploys** to GitHub Pages

## 🎯 What's Deployed

Only the contents of the `dist/` folder are deployed:
- Optimized HTML, CSS, JS
- Compressed assets
- Production-ready build

Your source code is NOT publicly accessible (only the built files).

## 🔒 Environment Variables

If you need environment variables:

1. Create `.env.production` file
2. Add to `.gitignore` (already done)
3. Add secrets in GitHub:
   - Settings → Secrets and variables → Actions
   - Add your secrets
4. Reference in workflow:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_API_KEY: ${{ secrets.API_KEY }}
   ```

## ✅ Checklist

Before deploying:

- [ ] All changes committed
- [ ] `npm run build` works locally
- [ ] Test with `npm run preview`
- [ ] GitHub Pages enabled in Settings
- [ ] Source set to "GitHub Actions"
- [ ] Push to main branch
- [ ] Check Actions tab for deployment status

---

**Your site will be live in 1-2 minutes after pushing!** 🎉

For custom domain setup, see: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

