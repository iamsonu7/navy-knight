// The reference paintings. Files are made by `npm run images` from /raw into /public/bg.
export type Painting = 'sword' | 'gateway' | 'column' | 'temple' | 'moon';

export const paintings: Record<Painting, { base: string; widths: number[]; ratio: number; title: string; alt: string }> = {
  sword: {
    base: 'sword-milkyway',
    widths: [400, 800, 1125],
    ratio: 1500 / 1125,
    title: 'The sword under the Milky Way',
    alt: 'An ornate sword standing upright under the Milky Way, with a marble acropolis on a cliff above a dark sea and white roses in the foreground.',
  },
  gateway: {
    base: 'gateway-sea',
    widths: [400, 800, 1200],
    ratio: 1600 / 1200,
    title: 'The gateway',
    alt: 'A marble angel and a kneeling warrior in a blue cloak face each other on stone steps, framed by a tall gateway open to a blue sea.',
  },
  column: {
    base: 'warrior-column',
    widths: [400, 800, 1200],
    ratio: 1600 / 1200,
    title: 'The watch',
    alt: 'A warrior in a blue crested helmet and a white cloak with a Greek key border stands beside a marble column, looking out over the sea.',
  },
  temple: {
    base: 'temple-pool',
    widths: [400, 800, 1200],
    ratio: 1600 / 1200,
    title: 'The temple and the pool',
    alt: 'A silver-robed angel with white wings hovers above a valley of marble temples, cypress trees and a long reflecting pool by the sea.',
  },
  moon: {
    base: 'moon-angel',
    widths: [400, 800, 1200],
    ratio: 1600 / 1200,
    title: 'The full moon',
    alt: 'A warrior on temple steps reaches up toward a winged marble angel floating beneath a full moon.',
  },
};
