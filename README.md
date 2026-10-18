# EVOLVIA Website — Cinematic 3D Intro Upgrade

A static, responsive website for GitHub Pages or Vercel. This update adds a 2.85-second cinematic intro before the existing website interface.

## Files
- `index.html` — website structure and intro markup
- `style.css` — responsive styling and cinematic 3D intro animations
- `script.js` — intro timing, skip button, navigation, reveal effects and pointer interaction
- `evolvia-logo.png` — original complete EVOLVIA logo (used on the website)
- `evolvia-emblem.png` — crop of the emblem from the original logo, used only during the intro before the wordmark and tagline appear

## Deploy
Upload all five files to the repository root, beside `index.html`, then commit the changes. Vercel will redeploy automatically if the repository is connected.

The intro runs for about 2.85 seconds and includes a Skip intro control. Users who prefer reduced motion get a shorter intro. No build step or external 3D library is required.
