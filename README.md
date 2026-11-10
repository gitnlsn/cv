# CV

Source files and PDF generator for Nelson Kenzo Tamashiro's CV and project portfolio.

## Files

- `CV.md` — Markdown source (human-editable, for content review).
- `index.html` — Styled HTML used to render the PDF. **Edit this for visual/content changes that ship in the PDF.**
- `CV.pdf` — Generated output. Do not edit by hand — it's overwritten on every build.
- `cv-pm.html` — Product Management–targeted CV (same template, PM framing). Rendered to `CV-PM.pdf` via `node generate-pdf.js pm`.
- `portfolio.html` — Printable project portfolio, same visual pattern as the CV. Rendered to `Portfolio.pdf`.
- `Portfolio.pdf` — Generated output.
- `portfolio/` — Separate web version of the portfolio (not part of the PDF build).
- `generate-pdf.js` — Puppeteer script that renders `index.html` → `CV.pdf` and `portfolio.html` → `Portfolio.pdf` (Letter, 0.6in × 0.7in margins, backgrounds enabled).

## Generate the PDF

```bash
npm install        # first time only
npm run generate             # writes ./CV.pdf and ./Portfolio.pdf
npm run generate:cv          # CV only
npm run generate:portfolio   # portfolio only
```

The script launches a headless Chromium via Puppeteer, loads `index.html` from the filesystem, waits for network idle, and prints to PDF. Output paths: `./CV.pdf`, `./Portfolio.pdf`.

If Puppeteer reports it can't find Chrome, either run `npx puppeteer browsers install chrome` once, or point it at your installed Chrome:

```bash
PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm run generate
```

## Editing workflow

1. Edit `index.html` (this is the canonical source for the PDF).
2. Run `npm run generate`.
3. Open `CV.pdf` to verify.

If you also want to keep `CV.md` in sync with content changes, update it manually — it isn't part of the build pipeline.

## Customizing PDF options

Page format, margins, and other knobs live at the top of `generate-pdf.js` in the `page.pdf(...)` call. See [Puppeteer's `Page.pdf()` docs](https://pptr.dev/api/puppeteer.page.pdf) for the full option list.
