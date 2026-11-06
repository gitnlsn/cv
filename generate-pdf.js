const path = require("node:path");
const { pathToFileURL } = require("node:url");
const puppeteer = require("puppeteer");

// Each target renders one HTML source to one PDF.
// Usage: node generate-pdf.js [cv|portfolio]   (no argument = all)
const TARGETS = {
  cv: { html: "index.html", pdf: "CV.pdf" },
  portfolio: { html: "portfolio.html", pdf: "Portfolio.pdf" },
};

async function main() {
  const requested = process.argv.slice(2);
  const names = requested.length ? requested : Object.keys(TARGETS);
  for (const name of names) {
    if (!TARGETS[name]) throw new Error(`Unknown target "${name}". Use: ${Object.keys(TARGETS).join(", ")}`);
  }

  const browser = await puppeteer.launch();
  try {
    for (const name of names) {
      const htmlFile = path.resolve(__dirname, TARGETS[name].html);
      const pdfFile = path.resolve(__dirname, TARGETS[name].pdf);
      const page = await browser.newPage();
      await page.goto(pathToFileURL(htmlFile).href, { waitUntil: "networkidle0" });
      await page.pdf({
        path: pdfFile,
        format: "Letter",
        printBackground: true,
        margin: { top: "0.6in", bottom: "0.6in", left: "0.7in", right: "0.7in" },
      });
      await page.close();
      console.log(`Wrote ${pdfFile}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
