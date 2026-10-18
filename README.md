# EVOLVIA Website — Cinematic Intro + Founder Section

A responsive static website for GitHub Pages or Vercel. This version preserves the existing EVOLVIA branding and cinematic intro, and adds a founder section using the supplied portrait.

## Files
- `index.html` — website structure, intro and founder section
- `style.css` — responsive layout, cinematic styling and animations
- `script.js` — intro timing, navigation, reveal effects and pointer interaction
- `evolvia-logo.png` — original complete EVOLVIA logo
- `evolvia-emblem.png` — original emblem used in the intro
- `founder-photo.jpeg` — portrait supplied for the Founder & CEO section

## Before publishing
1. In `index.html`, replace `[Your Name]` with the public name you want displayed. It is intentionally a placeholder; no name or personal details were guessed.
2. Review the founder description before publishing if you want different wording.

## Deploy
Upload all six files to the repository root, beside `index.html`, then commit the changes. Vercel will redeploy automatically if the repository is connected. No build step is required.

The intro runs for about 2.85 seconds and includes a Skip intro control. Users who prefer reduced motion get a shorter intro. The founder layout adapts to mobile and desktop and respects reduced-motion preferences.
