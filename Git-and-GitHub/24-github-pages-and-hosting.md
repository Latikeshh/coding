# Free Hosting with GitHub Pages

> 🟢 Beginner

## 📖 Definition

**GitHub Pages** is a free static web hosting service provided directly by GitHub that takes HTML, CSS, JavaScript, and asset files from a repository and publishes them live on the World Wide Web with HTTPS security.

## 🌐 Multilingual Explanation

### English
GitHub Pages turns any public GitHub repository into a live static website. By enabling GitHub Pages in Repository Settings, your site becomes accessible globally at `https://username.github.io/repository-name/`. GitHub Pages automatically updates your live site whenever you push new commits to your published branch.

### Hindi
GitHub Pages aapke frontend web projects (HTML, CSS, JS) ko bilkul FREE mein live internet par host kar deta hai. GitHub Settings -> Pages mein jaakar `main` branch select karne par aapko ek live URL (`https://username.github.io/repo-name/`) mil jata hai.

### Marathi
GitHub Pages dware aapan aaple HTML, CSS, JS web projects online internet var fukat (FREE) publish karu shakto. Settings -> Pages madhye `main` branch select kelyavar kahi minutat live website link milte.

### Hinglish
Apna portfolio website ya web app live duniya ko dikhane ke liye GitHub Pages best tool hai. Master/main branch par code push karein, Pages settings enable karein, aur aapki site `https://username.github.io/repo-name/` par live ho jayegi. Custom domains (e.g. `yourname.com`) bhi support karta hai.

## 🤔 Why Do We Use It?

Buying web hosting servers for personal portfolios or project demos costs money and requires complex server management. GitHub Pages provides zero-cost, instant, automated hosting directly integrated with your Git commit pipeline.

## 🧠 Simple Explanation

Think of GitHub Pages like turning a Word document on your laptop into a published book in a library:
- Normally, `index.html` sits private on your laptop disk.
- Enabling **GitHub Pages** gives `index.html` a public web address so anyone in the world can open it in their web browser!

## 📝 Step-by-Step GitHub Pages Publishing Guide

### Step 1: Prepare Repository Structure
Ensure your public GitHub repository contains a valid **`index.html`** file in the root directory.

### Step 2: Enable GitHub Pages in Settings
1. Open your repository on GitHub web.
2. Click **Settings** (top tab) -> Select **Pages** in the left sidebar.
3. Under **Build and deployment**:
   - **Source:** Select **Deploy from a branch**.
   - **Branch:** Select **`main`** branch and **`/(root)`** folder.
4. Click **Save**.

### Step 3: Access Live Website
Within 1–2 minutes, GitHub Actions builds and deploys your site, displaying a green success banner with your live URL:

```text
Your site is live at https://your-username.github.io/repository-name/
```

## 💡 Configuring Custom Domains (`yourname.com`)

GitHub Pages allows linking custom domains for personal branding:

1. Add your domain name in GitHub Settings -> Pages -> **Custom domain** (e.g. `www.myportfolio.com`). This automatically generates a `CNAME` file in your repository.
2. In your domain registrar DNS settings (GoDaddy, Namecheap, Cloudflare), add DNS records:
   - **`A` Records** pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **`CNAME` Record:** `www` pointing to `your-username.github.io`.
3. Check the **Enforce HTTPS** box in GitHub Pages settings for free SSL security!

## 🔍 URL Format Anatomy

```text
https://username.github.io/repository-name/
  │         │                 │
  │         │                 └── GitHub Repository Name
  │         └── Your GitHub Username
  └── Secure Protocol (Free SSL Certificate)
```

## 👀 GitHub Pages Settings UI

```text
GitHub Pages [Active]
Your site is ready to be served at https://rahul.github.io/my-portfolio/
Source: Branch [main] / Folder [/root]
[✔] Enforce HTTPS
```

## ⚠️ Common Mistakes & Limitations

- **Missing `index.html`:** Naming your homepage `home.html` or `main.html`. GitHub Pages expects `index.html` in the root directory by default; otherwise it displays a 404 error!
- **Case Sensitivity in File Paths:** Linking images as `<img src="Image.PNG">` when the file on disk is named `image.png`. Linux GitHub Pages servers are strictly case-sensitive.
- **Static Only Limit:** Attempting to host backend server code (Node.js, Python Flask/Django, PHP, MySQL databases) on GitHub Pages. GitHub Pages ONLY hosts static frontend assets (HTML, CSS, JS, images).

## 🛡️ Safety / Important Notes

- Every time you push a new commit to your `main` branch, GitHub Pages automatically rebuilds and updates your live website in seconds.

## 🌍 Real-World Usage

Developers host personal portfolios, documentation sites (using Jekyll/Docusaurus), open-source project landing pages, and interactive web tools on GitHub Pages.

## 🧪 Try It Yourself

1. Go to your `github-practice` repository on GitHub.
2. Create an `index.html` file with `<h1>Hello from GitHub Pages!</h1>`.
3. Go to **Settings -> Pages**, select `main` branch `/root` folder, and click **Save**.
4. Wait 1 minute, open your live URL, and view your live website!

## 🎯 Mini Challenge

Update `index.html` locally with CSS styles, commit, and push to `main`. Refresh your live GitHub Pages site in your browser to observe the automated live update.

## 🔗 Related Topics

- [Introduction to GitHub](20-introduction-to-github.md)
- [GitHub Actions Basics](26-github-actions-and-ci-cd-basics.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Issues & Projects](23-github-issues-and-project-boards.md) | [Next: Tags & Releases →](25-git-tags-and-releases.md)
