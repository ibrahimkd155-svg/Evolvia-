# EVOLVIA — 3D Website Upgrade

A responsive, cinematic dark website for EVOLVIA, upgraded with lightweight CSS 3D motion and pointer interaction. No build step or package installation is required.

## Files
- `index.html` — page structure, SEO metadata, services, and contact links
- `style.css` — responsive styling, cinematic gradients, glass panels, 3D animation
- `script.js` — mobile navigation, reveal-on-scroll, pointer-driven 3D interaction
- `evolvia-logo.png` — original EVOLVIA logo used by the site

## Deploy to GitHub / Vercel
1. Download and extract the ZIP.
2. Upload all five files into the **same root folder** of your GitHub repository. Keep `evolvia-logo.png` next to `index.html`.
3. Commit the changes and wait for Vercel to redeploy.
4. If Vercel uses a custom Root Directory, set it to the folder containing `index.html`.

The site uses Google Fonts as an optional external resource; it falls back to system fonts if unavailable. Animations respect `prefers-reduced-motion` and pointer interaction is limited to devices with a fine pointer.

## Contact links
WhatsApp and Instagram links are set to the links supplied for EVOLVIA. Replace them in `index.html` if they change.
