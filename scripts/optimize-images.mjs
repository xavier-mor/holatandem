#!/usr/bin/env node
/**
 * Compresses PNG / JPG files in public/ using sharp.
 *
 * Usage:
 *   npm run optimize-images              # all images in public/
 *   npm run optimize-images -- public/og-image.png   # specific file(s)
 */

import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PUBLIC_DIR = join(ROOT, "public");
const SUPPORTED = new Set([".png", ".jpg", ".jpeg"]);

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

async function* walkDir(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else if (SUPPORTED.has(extname(entry.name).toLowerCase())) yield full;
  }
}

async function optimise(file) {
  const { size: before } = await stat(file);
  const ext = extname(file).toLowerCase();

  const optimized =
    ext === ".png"
      ? await sharp(file)
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer()
      : await sharp(file)
          .jpeg({ quality: 85, progressive: true, mozjpeg: true })
          .toBuffer();

  if (optimized.length < before) {
    await writeFile(file, optimized);
    const saved = before - optimized.length;
    console.log(
      `✓ ${basename(file).padEnd(28)} ${kb(before).padStart(9)} → ${kb(optimized.length).padStart(9)}  (-${kb(saved)})`
    );
    return saved;
  }

  console.log(
    `– ${basename(file).padEnd(28)} ${kb(before).padStart(9)}  (already optimal)`
  );
  return 0;
}

const targets = process.argv.slice(2);
let totalSaved = 0;

if (targets.length) {
  for (const t of targets) totalSaved += await optimise(t);
} else {
  for await (const file of walkDir(PUBLIC_DIR)) totalSaved += await optimise(file);
}

if (totalSaved > 0) {
  console.log(`\nTotal saved: ${kb(totalSaved)}`);
} else {
  console.log("\nAll images already optimal.");
}
