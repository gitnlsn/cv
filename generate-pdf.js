const path = require("node:path");
const { pathToFileURL } = require("node:url");
const puppeteer = require("puppeteer");

const HTML_FILE = path.resolve(__dirname, "CV.html");
const PDF_FILE = path.resolve(__dirname, "CV.pdf");

async function main() {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(HTML_FILE).href, { waitUntil: "networkidle0" });
    await page.pdf({
      path: PDF_FILE,
      format: "Letter",
      printBackground: true,
      margin: { top: "0.6in", bottom: "0.6in", left: "0.7in", right: "0.7in" },
    });
    console.log(`Wrote ${PDF_FILE}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
