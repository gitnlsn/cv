# CV

Source files and PDF generator for Nelson Kenzo Tamashiro's CV.

## Files

- `CV.md` — Markdown source (human-editable, for content review).
- `index.html` — Styled HTML used to render the PDF. **Edit this for visual/content changes that ship in the PDF.**
- `CV.pdf` — Generated output. Do not edit by hand — it's overwritten on every build.
- `generate-pdf.js` — Puppeteer script that renders `index.html` → `CV.pdf` (Letter, 0.6in × 0.7in margins, backgrounds enabled).

## Generate the PDF

```bash
npm install        # first time only
npm run generate   # writes ./CV.pdf
```

The script launches a headless Chromium via Puppeteer, loads `index.html` from the filesystem, waits for network idle, and prints to PDF. Output path: `./CV.pdf`.

## Editing workflow

1. Edit `index.html` (this is the canonical source for the PDF).
2. Run `npm run generate`.
3. Open `CV.pdf` to verify.

If you also want to keep `CV.md` in sync with content changes, update it manually — it isn't part of the build pipeline.

## Customizing PDF options

Page format, margins, and other knobs live at the top of `generate-pdf.js` in the `page.pdf(...)` call. See [Puppeteer's `Page.pdf()` docs](https://pptr.dev/api/puppeteer.page.pdf) for the full option list.
