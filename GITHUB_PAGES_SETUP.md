# GitHub Pages Setup Guide

## Step-by-Step Instructions to Host Your Academic Portfolio

### Prerequisites
- GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer (already done since we initialized the repo)

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner and select "New repository"
3. **Repository settings:**
   - **Repository name:** `briggs-pugner-portfolio` (or your preferred name)
   - **Description:** "Academic Portfolio - Computer Engineering Student"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create repository"**

### Step 2: Connect Local Repository to GitHub

Run these commands in your terminal (in the Academic_Website folder):

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/briggs-pugner-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** tab (at the top of the repository)
3. **Scroll down to "Pages"** section in the left sidebar
4. **Under "Source":**
   - Select "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. **Click "Save"**

### Step 4: Access Your Live Website

- **Your website will be available at:** `https://YOUR_USERNAME.github.io/briggs-pugner-portfolio`
- **It may take 5-10 minutes** for the site to be live after enabling Pages
- **You'll see a green checkmark** when deployment is successful

### Step 5: Custom Domain (Optional)

If you want a custom domain like `briggs-pugner.com`:

1. **In GitHub Pages settings**, add your custom domain
2. **Update your domain's DNS** to point to GitHub Pages
3. **Add a CNAME file** to your repository root

## Repository Structure for GitHub Pages

Your repository should look like this:
```
briggs-pugner-portfolio/
├── index.html              ← Main page (served at root)
├── styles.css
├── .gitignore
├── assets/
│   └── WebsiteImages/
├── content/
├── docs/
├── projects/
└── scripts/
```

## Important Notes

### File Paths
- **All paths are now correct** for GitHub Pages hosting
- **Images:** `assets/WebsiteImages/filename.jpg`
- **Project pages:** `projects/project-name.html`
- **CSS:** `styles.css`

### Updating Your Website
To update your live website:

```bash
# Make your changes to files
git add .
git commit -m "Update project information"
git push origin main
```

**Changes will be live within 5-10 minutes** after pushing.

### GitHub Pages Features
- **Free hosting** for public repositories
- **Custom 404 pages** (create `404.html`)
- **HTTPS enabled** by default
- **Automatic deployment** on every push to main branch

## Troubleshooting

### Images Not Showing
- Check that image paths use `assets/WebsiteImages/` (not `../assets/WebsiteImages/`)
- Ensure images are committed to the repository

### CSS Not Loading
- Verify CSS path is `styles.css` in root files
- Check that `styles.css` is in the repository root

### Pages Not Deploying
- Check GitHub Actions tab for deployment status
- Ensure repository is public
- Verify Pages is enabled in Settings

## Next Steps

1. **Test your live website** thoroughly
2. **Share the URL** with potential employers/colleagues
3. **Keep it updated** with new projects and achievements
4. **Consider adding:**
   - Contact form
   - Blog section
   - Downloadable resume
   - Social media links

## Your Live Website URL
Once set up, your portfolio will be available at:
**`https://YOUR_USERNAME.github.io/briggs-pugner-portfolio`**

This is a professional, free way to showcase your academic work and projects!
