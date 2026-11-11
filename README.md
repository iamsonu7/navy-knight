# Sonu Patidar: portfolio

A static Astro site. Frosted glass panels over classical Greek night paintings, with the content from Sonu's dossier: Business × AI × Design.

## Run it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

The output in `dist/` deploys as-is to Vercel or Netlify (framework preset: Astro, no settings needed).

## Where things live

| What | File |
|---|---|
| Name, tagline, metrics, facts, story steps, principles, tools, contact | `src/data/site.ts` |
| Projects, which also become the case-study pages at `/work/<slug>` | `src/data/projects.ts` |
| Source paintings (originals) | `raw/` |
| Optimised paintings (AVIF and WebP, 800px and full width) | `public/bg/`, regenerate with `npm run images` |
| Project images (optional) | `public/work/`, then set `image` on the project |
| Sound engine | `src/scripts/sound.ts` |
| All interaction | `src/scripts/main.ts` |

To add a project, add an object to `projects` in `src/data/projects.ts`. Without an `image`, the card shows a typographic cover built from `cover` (a key figure, a caption and a Greek letter).

## The playful layer

- **Constellation**: five named stars in the hero sky. Each one is an operating principle. Light all five and the constellation closes with a chord.
- **Shooting stars**: click empty sky in the hero.
- **Depth**: the painting, a twinkling star layer and the red spear move at different depths with the pointer.
- **The climb**: the story is a staircase. Climb it step by step; each step plays a higher note.
- **412 emails**: in Craft, send a few sponsorship emails "by hand", then run the engine and watch it do the other few hundred.
- **Lenses**: filter the works by Business, AI or Design.
- **Cards**: light follows the pointer across the glass, with a slight tilt.
- Page changes use Astro's client router, so the sound keeps playing across pages.

Everything respects `prefers-reduced-motion`: no tilt, parallax, twinkle or counting. Keyboard: all of it works with Tab, Enter and the arrow keys (story steps); **M** toggles sound.

## Sound

All sound is synthesised in the browser with the Web Audio API. There are no audio files, so there is nothing to license and nothing to download. It is **off by default** and turned on with the button in the nav (the choice is remembered).

- Ambient: a slow sea swell (filtered noise) over a low D and A drone.
- Hover: a soft lyre pluck from a D dorian scale.
- Click: two plucked strings. In-page jumps: a gust of wind.
- Stars: bells that rise as you find them; a full arpeggio when the constellation closes.
- Story steps: notes that climb with you. The engine: fast ticks, then a chord.

Levels and the scale are at the top of `src/scripts/sound.ts`.

## Still needed from Sonu

- The real domain once there is one (`astro.config.mjs` and `site.url`)
- Any other profiles to list next to LinkedIn (`socials` in `src/data/site.ts`)
- Project images and process images for the case studies
- A portrait or signature piece
- Confirm the tools list
