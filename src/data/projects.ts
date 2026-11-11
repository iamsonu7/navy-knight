// All project content. Add a new object to `projects` to add a card and a case-study page.
//
// status:  'own'  = work I made myself
//          'team' = something a team delivered that I helped shape
//          'lab'  = ideas and work still in progress
// image:   optional. Put the file in /public/work/ and set e.g. '/work/investi-case.webp'.
//          Without one, the card shows a typographic cover built from `cover`.
// gallery: optional process images for the case-study page, same folder.
// bg:      which painting is used on the case-study page (see src/data/paintings.ts).

export type Lens = 'business' | 'ai' | 'design';
export type Status = 'own' | 'team' | 'lab';
export type { Painting } from './paintings';
import type { Painting } from './paintings';

export const statusLabels: Record<Status, string> = {
  own: 'Built by me',
  team: 'Shaped with a team',
  lab: 'In progress',
};

export interface Project {
  slug: string;
  title: string;
  status: Status;
  discipline: string;
  year: string;
  lenses: Lens[];
  role: string;
  summary: string; // two lines on the card
  cover: { word: string; caption: string; letter: string };
  image?: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption?: string }[];
  bg: Painting;
  stack?: string[]; // tools used
  challenge: string;
  moves: { title: string; text: string }[];
  outcome: string;
  narrative: string[]; // the case study told in the first person
}

export const projects: Project[] = [
  {
    slug: 'sponsorship-engine',
    title: 'Sponsorship outreach automation',
    status: 'own',
    discipline: 'AI automation',
    year: '2026',
    lenses: ['ai', 'business'],
    role: 'Designed and built it, as Head of Sponsorship for Anhad',
    summary:
      'A Google Apps Script and OpenAI API pipeline that writes and sends a personalised sponsorship email to each company on a list, replacing manual one-by-one emailing.',
    cover: { word: 'Automation', caption: 'Apps Script + OpenAI API', letter: 'Σ' },
    bg: 'temple',
    stack: ['Google Apps Script', 'OpenAI API', 'Google Sheets', 'Gmail'],
    challenge:
      'The sponsorship team was expected to email a list of over four hundred companies by hand, one at a time. It took a huge amount of time and, because every email was the same, very few companies replied.',
    moves: [
      {
        title: 'Learned the tools for the problem',
        text: 'I had no automation background, so I spent five days learning Google Apps Script and how to call the OpenAI API from it.',
      },
      {
        title: 'Built the pipeline',
        text: 'The script reads the company list from a sheet, drafts an email written for each company, sends it, and records what has gone out.',
      },
      {
        title: 'Gave the team its time back',
        text: 'With the copying and pasting gone, people could spend their time on calls, meetings and follow-ups. I also led pitching and designed the sponsor collateral for Anhad and Convoquer ’26.',
      },
    ],
    outcome:
      'The pipeline covered the full list of 412 companies, and faculty appreciated the approach. The fest’s sponsors that year included J&K Bank, Dabur and Scaleon; closing sponsors was a team effort, and the automation was my part of it.',
    narrative: [
      'When I took on sponsorship for Anhad, our techno-cultural fest, the inherited plan was a list of more than four hundred companies and the expectation that we would email each of them by hand. I could see what that would do to the team: days of copying, pasting and changing names, and very few replies at the end of it, because every email looked the same.',
      'I had never automated anything before. I gave myself five days to learn Google Apps Script and how to call the OpenAI API from it. The pipeline I ended up with reads the company list from a spreadsheet, drafts an email written for that specific company, sends it, and keeps track of what has gone out.',
      'The point was never to remove people from sponsorship. It was to remove the repetitive part so the team could spend its time on calls, meetings and follow-ups, which is where sponsorships are actually agreed. Alongside it, I led the pitching and designed the sponsor collateral for Anhad and for Convoquer ’26, our sports fest.',
      'What I took from it was less about AI and more about habits: a lot of "hard work" traditions survive only because nobody stops to ask why they exist. Asking that question is free, and it is usually where the leverage is.',
    ],
  },
  {
    slug: 'tinkerers-lab',
    title: 'Event identities for Tinkerer’s Lab',
    status: 'own',
    discipline: 'Visual identity',
    year: '2025–26',
    lenses: ['design'],
    role: 'Lead graphic designer, Tinkerer’s Lab',
    summary:
      'Complete visual identities for two flagship tech events: theme, typography and colour, carried through posters, hoodies and ID cards.',
    cover: { word: 'Identity', caption: 'Perjan / Pragyaan · Ujjemitsu', letter: 'Τ' },
    bg: 'sword',
    stack: ['Typography', 'Colour systems', 'Print and merchandise'],
    challenge: 'Flagship campus events needed an identity that held together from the first poster to the ID card on the lanyard.',
    moves: [
      {
        title: 'One theme per event',
        text: 'Worked out the visual theme, typography and colour system for Perjan / Pragyaan and for Ujjemitsu.',
      },
      {
        title: 'Print to wearable',
        text: 'Designed the posters, custom merchandise and hoodies, and the physical ID cards.',
      },
    ],
    outcome: 'Two events with one recognisable identity each, across every printed and worn piece.',
    narrative: [
      'Tinkerer’s Lab was where I first did design work that a lot of people would actually see and use. The flagship events, Perjan / Pragyaan and Ujjemitsu, each needed an identity that would hold together from the first announcement poster to the last day.',
      'For each one I worked out a theme, chose the typography and set a colour system, then carried it through every piece: posters, custom merchandise and hoodies, and the ID cards participants wore.',
      'Working across print, fabric and screen taught me that a design system is only as good as its weakest application. A palette that looks great on a poster also has to survive being printed on a hoodie.',
    ],
  },
  {
    slug: 'bec-brand-system',
    title: 'BEC brand system',
    status: 'own',
    discipline: 'Brand system',
    year: '2026',
    lenses: ['design', 'business'],
    role: 'Designer, Budding Entrepreneurs Club',
    summary:
      'A brand kit for the Budding Entrepreneurs Club: type scale, palette, logo-derived patterns and templates anyone on the team can use.',
    cover: { word: 'Brand kit', caption: 'Sora · Manrope · Inter', letter: 'Β' },
    bg: 'gateway',
    stack: ['Sora', 'Manrope', 'Inter', 'Template system'],
    challenge:
      'The club looked different in every post, which made it hard to recognise, and every design depended on one person making it.',
    moves: [
      {
        title: 'A type scale',
        text: 'Sora ExtraBold for headlines, Manrope SemiBold for subheadings, Inter Regular for body text.',
      },
      {
        title: 'A fixed palette',
        text: 'Sky Blue #4DB6FF, Deep Navy #1E3A8A and Charcoal #111827.',
      },
      {
        title: 'Patterns and parts',
        text: 'Two graphic patterns cut from the logo, the Angled Cut and the Curved Trail, plus modular templates so the rest of the team can make on-brand posts without me.',
      },
    ],
    outcome: 'The club’s posts, posters and documents now share one look, and other members can produce them.',
    narrative: [
      'This year I am helping run the Budding Entrepreneurs Club. One of the first things I noticed was that it looked different in every post, and that every design waited on one person.',
      'So I built a brand kit from scratch. Sora ExtraBold for headlines, Manrope SemiBold for subheadings and Inter for body text; a palette of Sky Blue #4DB6FF, Deep Navy #1E3A8A and Charcoal #111827; and two graphic patterns, the Angled Cut and the Curved Trail, taken from the logo.',
      'The more important part was the templates. A brand system only works if other people can use it without asking you, and that is the part I am still improving.',
      'Around the same time, the team moved from a large committee to a small core of five people with clear areas, which has made it much easier to get things done.',
    ],
  },
  {
    slug: 'investi-case-26',
    title: 'Investi-Case ’26',
    status: 'team',
    discipline: 'Case competition',
    year: '2026',
    lenses: ['business', 'ai', 'design'],
    role: 'Part of the BEC organising team: format, identity and automation',
    summary:
      'A national corporate-crisis case competition run by BEC. I helped shape its format and identity and built the automation behind it.',
    cover: { word: 'Boardroom', caption: 'A live, no-AI crisis round', letter: 'Ι' },
    bg: 'column',
    stack: ['Google Apps Script', 'Event design'],
    challenge:
      'Many college case competitions end up judging polished AI-generated slides, and the logistics of running them take over the organisers’ time.',
    moves: [
      {
        title: 'Format',
        text: 'Designed a live crisis boardroom round where AI tools were not allowed, so teams had to reason on their feet.',
      },
      {
        title: 'Identity',
        text: 'Designed an investigative look that mixes a corporate-mystery mood with Dogra and Basohli motifs from the Jammu region.',
      },
      {
        title: 'Automation',
        text: 'Wrote Apps Script for registration status emails, Round 2 scheduling across parallel volunteer slots, and certificate delivery.',
      },
    ],
    outcome:
      'The team ran the event with registrations from students of many institutions across the country. My parts were the format, the identity and the automation behind the scenes.',
    narrative: [
      'Investi-Case ’26 was a case competition the BEC team ran together. I want to be clear about my part in it: I did not run it alone, and the turnout belongs to the whole team. What I worked on was the shape of it.',
      'Many case competitions end up judging how good someone’s AI tool is at making slides. We wanted the second round to be a live crisis boardroom with no AI tools allowed, so the thinking had to happen in the room.',
      'For the identity, I mixed the mood of a modern corporate mystery with motifs from Dogra and Basohli art from the Jammu region, so it felt like it came from somewhere specific.',
      'Behind the scenes, I wrote Apps Script so logistics would not swallow the team: registration status emails, Round 2 slots scheduled across parallel volunteer note-taking sessions, and certificates sent automatically once results were final.',
    ],
  },
  {
    slug: 'forgex',
    title: 'ForgeX',
    status: 'lab',
    discipline: 'Product prototype',
    year: 'In progress',
    lenses: ['business', 'design', 'ai'],
    role: 'Concept, product architecture and HTML/CSS prototype',
    summary:
      'A platform idea that matches technical builders with business strategists on skills alone: no college name, GPA or gender at the first match.',
    cover: { word: 'Prototype', caption: 'Skill-first matching', letter: 'Φ' },
    bg: 'sword',
    stack: ['HTML', 'CSS', 'Product design'],
    challenge: 'Builders and strategists from different institutes rarely meet, and when they do, labels decide too early.',
    moves: [
      {
        title: 'The R-Resume Skill Card',
        text: 'A profile built on skills, with rules that hide college name, GPA and gender during initial matching.',
      },
      {
        title: 'Royalty-based collaboration',
        text: 'Contributors share in what they help build, so there is a reason to stay past the first meeting.',
      },
    ],
    outcome: 'An interactive HTML/CSS prototype. Next step: test it with a small group of real users.',
    narrative: [
      'Across institutes, people who can build things and people who can sell and plan them rarely meet. When they do, choices about who to work with are often made on college name or grades before anyone has seen what the other person can do.',
      'ForgeX is my attempt at a different starting point. Everyone gets an R-Resume Skill Card that shows what they can actually do. During the first round of matching, college name, GPA and gender are hidden on purpose.',
      'Collaborations run on a royalty-based model, so people who contribute to a project share in what it becomes.',
      'Right now it is an interactive HTML and CSS prototype. The honest next step is putting it in front of real users and learning from what they do.',
    ],
  },
  {
    slug: 'big-idea-cohort',
    title: 'The Big Idea Cohort',
    status: 'lab',
    discipline: 'Programme design',
    year: 'Planned',
    lenses: ['business', 'design'],
    role: 'Programme design',
    summary:
      'A plan for a regional pipeline that takes students’ problem statements through short video validation to a closed pitch in front of investors.',
    cover: { word: 'Pipeline', caption: 'Capture · validate · pitch', letter: 'Ω' },
    bg: 'moon',
    challenge: 'Students in the region have real problems they want to solve, but few routes take a rough idea to someone who could back it.',
    moves: [
      {
        title: 'Phase 1: capture',
        text: 'A design-thinking handbook goes out to schools and colleges in the region to collect raw problem statements.',
      },
      {
        title: 'Phase 2: validate',
        text: 'The strongest ideas are explained in 60-second videos, and audience response becomes part of the judging.',
      },
      {
        title: 'Phase 3: pitch',
        text: 'A small number of teams pitch behind closed doors to angel investors and the campus incubation pipeline.',
      },
    ],
    outcome: 'A written plan. It has not launched; the next step is to run Phase 1 and see which assumptions hold.',
    narrative: [
      'The Big Idea Cohort is a plan, not a finished project. The idea is a funnel in three phases: collect raw problem statements from schools and colleges using a design-thinking handbook, ask the strongest ideas to explain themselves in 60-second videos, and give a handful of teams a closed-door pitch to investors and the campus incubation pipeline.',
      'I like it because each group gets something real: students get a path, the institute gets reach, and sponsors get a pipeline of ideas. But until Phase 1 runs, it is only a well-organised guess.',
    ],
  },
  {
    slug: 'shree-patidar',
    title: 'Shree Patidar retail',
    status: 'lab',
    discipline: 'Positioning and sourcing',
    year: 'Ongoing',
    lenses: ['business', 'design'],
    role: 'Branding and sourcing',
    summary:
      'Repositioning a home decor business in semi-urban Madhya Pradesh as an interior transformation brand, with sourcing from Indore and Ahmedabad.',
    cover: { word: 'Retail', caption: 'Semi-urban Madhya Pradesh', letter: 'Π' },
    bg: 'gateway',
    challenge: 'Semi-urban shops usually compete on price alone, because nobody has positioned them as anything more.',
    moves: [
      {
        title: 'Positioning',
        text: 'Moving Shree Patidar Home Decor from a conventional local shop towards a premium interior transformation brand.',
      },
      {
        title: 'Sourcing',
        text: 'B2B supply work across Indore and Ahmedabad, for Home Decor and for Shree Patidar Electric Vehicles.',
      },
    ],
    outcome: 'Ongoing work in Sitamau, Nahargarh and Rupani Chauraha.',
    narrative: [
      'In semi-urban towns, most shops compete on one thing: price. That is a hard game to win, and it leaves customers who want something better with nowhere to go.',
      'With Shree Patidar Home Decor, the work is to reposition the business as a place you come to change how a room feels, not just to buy a product. On the supply side, it means building sourcing across Indore and Ahmedabad so the range can support that. There is a sister business in electric vehicles too.',
      'It is ongoing, and probably the most practical business education I have.',
    ],
  },
  {
    slug: 'green-vent',
    title: 'Green Vent',
    status: 'lab',
    discipline: 'Design thinking',
    year: 'Inventex ’26',
    lenses: ['design'],
    role: 'Design-thinking research',
    summary: 'A design-thinking project on grain spoilage and pest infestation in rural storage.',
    cover: { word: 'Storage', caption: 'Grain, moisture, pests', letter: 'Γ' },
    bg: 'temple',
    challenge: 'Grain stored in rural India is regularly lost to moisture and pests before it reaches a market.',
    moves: [
      {
        title: 'Start from the farm',
        text: 'Research grounded in how grain is actually stored, not how it should be.',
      },
    ],
    outcome: 'Developed for Inventex ’26.',
    narrative: [
      'Coming from a farming family, grain lost in storage is not an abstract problem to me. Green Vent was a design-thinking project for Inventex ’26 that looked at spoilage and infestation in rural storage, starting from how grain is actually kept.',
    ],
  },
];

export const lensLabels: Record<Lens, string> = {
  business: 'Business',
  ai: 'AI',
  design: 'Design',
};
