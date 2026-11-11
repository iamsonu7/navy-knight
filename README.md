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
| Projects, which also become the case-study pages at `/work/<slug>` (including each project's first-person `narrative`) | `src/data/projects.ts` |
| The personal frame: the long story at `/story`, in chapters | `src/data/story.ts` |
| The professional frame: a one-page résumé at `/resume` (Download PDF prints to a single A4 page) | `src/data/resume.ts` |
| Painting titles and alt text | `src/data/paintings.ts` |
| Source paintings (originals) | `raw/` |
| Optimised paintings (AVIF and WebP at 400, 800 and full width) | `public/bg/`, regenerate with `npm run images` |
| Project images (optional) | `public/work/`, then set `image` on the project |
| Sound engine | `src/scripts/sound.ts` |
| All interaction | `src/scripts/main.ts` |

To add a project, add an object to `projects` in `src/data/projects.ts`. Without an `image`, the card shows a typographic cover built from `cover` (a key figure, a caption and a Greek letter).

## How the paintings are used

The source paintings are about 1200px wide, which is too small to stretch across a wide screen without looking soft. So each painting appears in two ways:

- **Plates**: the painting shown sharp, in a frame, at a size its pixels can hold. Click any plate to see it larger.
- **Washes**: behind each section, a small copy of a painting blurred on purpose and darkened, so the colour and mood carry through without pretending to be sharp.

## The playful layer

- **Constellation**: five named stars in the hero sky. Each one is an operating principle. Light all five and the constellation closes with a chord.
- **Shooting stars**: click empty sky in the hero.
- **Depth**: the framed painting and a twinkling star layer move at different depths with the pointer; framed paintings lean slightly toward the cursor.
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
- Résumé (`src/data/resume.ts`): CGPA, Class 10 year and score, and a Class 12 row if you want them; confirm the role dates
