# Healthy STAY, Happy Channie

This folder is ready for GitHub Pages.

## What is public
The app code, workout text, themes, and bundled graphics are public if the repository is public.

## What should stay private
Do **not** put personal schedules, addresses, emails, family information, passwords, API keys, or private photos directly into this repository.

The planned workout progress / chosen member photos should be stored locally in the browser, not committed to GitHub.

## Put it on GitHub Pages

1. Sign in to GitHub.
2. Click **New repository**.
3. Give it a name such as `healthy-stay-happy-channie`.
4. Choose **Public** for the simplest free GitHub Pages setup.
5. Create the repository.
6. Click **Add file → Upload files**.
7. Upload **everything inside this folder**:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `.nojekyll`
   - the `icons` folder
8. Click **Commit changes**.
9. Open **Settings → Pages**.
10. Under **Build and deployment**, choose:
    - Source: **Deploy from a branch**
    - Branch: **main**
    - Folder: **/(root)**
11. Save.
12. GitHub will display your live HTTPS Pages URL after deployment.

## Install on Android

Open the live GitHub Pages URL in Chrome.
Then use Chrome's menu and choose **Add to Home screen** or **Install app**.

## Updating later

Replace/upload changed files in the same repository and commit them.
The public URL stays the same.

Because this app uses an offline service worker, a recently updated version may occasionally need one refresh before all new files appear.
