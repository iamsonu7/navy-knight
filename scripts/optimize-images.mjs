// Converts the source paintings in /raw into responsive AVIF + WebP in /public/bg.
// Run with: npm run images
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'raw';
const OUT = 'public/bg';
const WIDTHS = [400, 800, 1200]; // sources are ~1200px wide; never upscale

await mkdir(OUT, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const img = sharp(path.join(SRC, file));
  const { width } = await img.metadata();
  const sizes = WIDTHS.filter((w) => w <= width);
  if (!sizes.includes(width) && width < 2400) sizes.push(width);
  for (const w of [...new Set(sizes)]) {
    const r = sharp(path.join(SRC, file)).resize({ width: w });
    await r.clone().avif({ quality: 52 }).toFile(`${OUT}/${name}-${w}.avif`);
    await r.clone().webp({ quality: 74 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  console.log(name, sizes.join(','));
}

// Open Graph card: 1200x630 crop of the hero painting
await sharp(`${SRC}/sword-milkyway.jpg`)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile('public/og.jpg');
console.log('og.jpg');
