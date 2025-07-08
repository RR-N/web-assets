// scripts/build-text-assets.mjs
import { promises as fs } from "node:fs";
import { resolve, relative } from "node:path";

const TEXT_ROOT = "assets/text";           // adjust if folder moves

const categories = [];
const files = [];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      categories.push(relative(TEXT_ROOT, full));
      await walk(full);
    } else if (entry.isFile()) {
      const raw = await fs.readFile(full, "utf8");
      const lines = raw.split(/\r?\n/).length;
      const rel  = relative(TEXT_ROOT, full).split("/");
      const category = rel[0];
      files.push({
        title: entry.name.replace(/\.[^.]+$/, ""),
        category,
        content: raw,
        lengthClass: lines < 15 ? "Short" : lines < 200 ? "Medium" : "Long",
        isWip: /\[WIP\]/i.test(entry.name),
        avgRating: 0,
        reviews: []
      });
    }
  }
}

await walk(TEXT_ROOT);
await fs.writeFile("text-assets.json",
  JSON.stringify({ categories, files }, null, 2)
);
console.log("✓ text-assets.json written");
