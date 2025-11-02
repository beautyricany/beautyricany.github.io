# Deploying to GitHub Pages

This guide will help you deploy your Permanent Beauty website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your logo image added to `assets/images/logo.png`

## Step-by-Step Deployment

### 1. Build the Project

First, compile the TypeScript to JavaScript:

```bash
npm install
npm run build
```

This creates the `dist/main.js` file that the website needs.

### 2. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Permanent Beauty website"
```

### 3. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it (e.g., `permanent-beauty`)
5. **Do NOT** initialize with README (you already have one)
6. Click "Create repository"

### 4. Push to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/permanent-beauty.git
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `/ (root)`
5. Click "Save"

### 6. Wait for Deployment

GitHub will build and deploy your site. This usually takes 1-5 minutes.

Your site will be available at:
```
https://YOUR_USERNAME.github.io/permanent-beauty/
```

## Updating Your Website

Whenever you make changes:

1. **Rebuild TypeScript** (if you changed .ts files):
   ```bash
   npm run build
   ```

2. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

3. **Wait a minute** for GitHub Pages to update

## Custom Domain (Optional)

To use your own domain (e.g., www.permanentbeauty.com):

1. Add a `CNAME` file to the root directory with your domain:
   ```bash
   echo "www.permanentbeauty.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records for GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

3. In your GitHub repository Settings > Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Issue: Website shows 404 error
**Solution**: Make sure you pushed the `dist` folder and all HTML files are in the root directory.

### Issue: JavaScript not working
**Solution**: 
1. Check that `dist/main.js` exists in your repository
2. Make sure you ran `npm run build` before pushing
3. Check browser console for errors

### Issue: Images not loading
**Solution**: 
1. Make sure all images are in the `assets/images/` folder
2. Verify image file names match exactly (case-sensitive)
3. Check that you committed and pushed the assets folder

### Issue: Styles not loading
**Solution**: 
1. Verify `css/style.css` is in your repository
2. Check that the file path in HTML files is correct
3. Clear your browser cache

## Alternative: GitHub Actions (Advanced)

If you want automatic TypeScript compilation on push, you can set up GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build TypeScript
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

With this approach, you don't need to commit the `dist` folder - GitHub Actions will build it automatically.

## Support

For more information about GitHub Pages, visit:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
