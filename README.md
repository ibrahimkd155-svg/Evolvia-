# PARTAW DIGITAL | پرتو دیجیتال

A Brighter Digital Future. Static website (HTML + CSS + JS). No build step.

## Files
- `index.html` — page structure
- `style.css` — design, 3D effects, responsive + RTL styles
- `script.js` — languages (English / Dari / Pashto), RTL, logo intro, 3D interaction
- `partaw-logo.png`, `favicon.png`, `apple-touch-icon.png` — logo files

## Deploy (same as before)
1. Extract the ZIP.
2. Upload ALL files into the same root folder of your GitHub repository (replace the old EVOLVIA files).
3. Commit and wait for Vercel to redeploy.
4. If Vercel uses a custom Root Directory, set it to the folder containing `index.html`.

## Things to replace
- Portfolio: two real projects (Tabish Noor school, AFGFX). Logos load from those sites. To add another project, copy a `<a class="work">` block in `index.html` and add its text in `script.js`.
- Contact links: WhatsApp and Instagram are set. Change them in `index.html` (Contact section) if needed.
- Translations: all text lives in `script.js` (`I18N`). Ask a native Dari / Pashto speaker to review the wording.
