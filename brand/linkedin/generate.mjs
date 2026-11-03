// Renders the LinkedIn assets from the HTML templates in this folder.
// Usage: node brand/linkedin/generate.mjs
// Needs Playwright with Chromium: `npm i -D playwright && npx playwright install chromium`,
// or set PLAYWRIGHT_PATH to an existing playwright package.
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const pw = process.env.PLAYWRIGHT_PATH ?? "playwright";
const { chromium } = await import(pw);
const here = dirname(fileURLToPath(import.meta.url));

const jobs = [
  { file: "logo.html", sel: ".tile", w: 300, h: 300, name: "linkedin-logo" },
  { file: "cover.html", sel: ".cover", w: 1128, h: 191, name: "linkedin-cover" },
];

const browser = await chromium.launch();
for (const job of jobs) {
  for (const scale of [1, 2]) {
    const ctx = await browser.newContext({ viewport: { width: job.w, height: job.h }, deviceScaleFactor: scale });
    const page = await ctx.newPage();
    await page.goto("file://" + join(here, job.file), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const out = join(here, `${job.name}-${job.w * scale}x${job.h * scale}.png`);
    await page.locator(job.sel).screenshot({ path: out, omitBackground: false });
    console.log("wrote", out);
    await ctx.close();
  }
}
await browser.close();
