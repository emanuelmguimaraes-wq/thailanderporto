# Thailander — Digital Menu (EN)

Static, mobile-first site with a basic PWA (offline after first visit), ready for **GitHub Pages**.

## Structure
- `index.html` — menu page (mobile-first)
- `styles.css` — styles
- `script.js` — interactions (lightbox, back-to-top, SW registration with RELATIVE path)
- `manifest.webmanifest` — PWA (icons in `icons/`)
- `sw.js` — service worker for cache
- `images/01.png ... 08.png` — menu pages (English)
- `icons/app-icon-192.png`, `icons/app-icon-512.png` — generated icons

## Publish on GitHub Pages
1. Create a repository, e.g. **thailander-menu-en**.
2. Upload all files from this ZIP.
3. Go to **Settings → Pages**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (root)
4. Wait 1–2 minutes. The site should be live at:
   ```
   https://emanuelmguimaraes-wq.github.io/thailander-menu-en/ (fixed version)
   ```
5. Send me the final URL and I'll generate a **print-ready QR code**.

## Notes
- SW registration uses a **relative path** (`./sw.js`) which is correct for GitHub Pages repositories.
- Replace any menu image by overwriting the file in `images/` with the same name.
