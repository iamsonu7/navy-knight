// Everything about Sonu that isn't a project lives here.
// Edit this file to change copy; layout code reads from it.

export const site = {
  name: 'Sonu Patidar',
  shortName: 'SONU',
  // Replace with the real domain once deployed (used for canonical + Open Graph URLs)
  url: 'https://sonupatidar.example',
  title: 'Sonu Patidar — Business × AI × Design',
  description:
    'Sonu Patidar is an interdisciplinary builder at IIT Jammu, combining business strategy, AI automation and brand systems design to turn raw ideas into ventures, events and organisations.',
  positioning: 'Business × AI × Design',
  tagline: 'I think across disciplines. I build through execution.',
  intro:
    'IIT Jammu undergraduate working where business strategy, AI workflow automation and brand systems meet. Learning by building: events, automations, brand systems and small ventures, one project at a time.',
  thesis: ['Value over cost.', 'Execution over labels.', 'Learning through building.'],

  email: 'patidarsonu098@gmail.com',
  // Add more profiles here (e.g. Instagram, Behance) when you want them on the site.
  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/sonu-patidar/' }],
};

// The three things I work on: shown under the hero.
export const focus = [
  {
    name: 'Business',
    text: 'Sponsorship, partnerships, positioning and how small organisations are structured.',
  },
  {
    name: 'AI and automation',
    text: 'Google Apps Script and LLM pipelines that take repetitive work off people’s hands.',
  },
  {
    name: 'Design',
    text: 'Brand systems, event identities and type and colour that hold together everywhere.',
  },
];

export const facts = [
  { k: 'Based in', v: 'IIT Jammu, J&K' },
  { k: 'From', v: 'Mandsaur, Madhya Pradesh' },
  { k: 'Studying', v: 'B.Tech, Materials Science & Engineering, class of 2029' },
  { k: 'Currently', v: 'Running BEC with a small team' },
  { k: 'Available for', v: 'Collaborations, partnerships, internships' },
];

// The climb: rendered as interactive steps in the Story section.
export const path = [
  {
    id: 'roots',
    letter: 'Α',
    place: 'Mandsaur',
    label: 'Roots',
    text: 'A farming family in Madhya Pradesh. Where resources are finite and every decision has a cost, you learn early that an idea only matters when it produces something useful.',
  },
  {
    id: 'jnv',
    letter: 'Β',
    place: 'Jawahar Navodaya Vidyalaya',
    label: 'Away at 11',
    text: 'Left home at eleven for Jawahar Navodaya Vidyalaya and lived in its hostel from Class 6 to 10. Years of unfamiliar places built a habit of self-reliance.',
  },
  {
    id: 'kota',
    letter: 'Γ',
    place: 'Kota',
    label: 'Scholarship',
    text: 'Moved to Kota on a scholarship. Then a deliberate call: start building at IIT Jammu now rather than spend another year chasing a different label.',
  },
  {
    id: 'iitj',
    letter: 'Δ',
    place: 'IIT Jammu',
    label: 'Beyond the degree',
    text: 'Materials Science for rigour, but not as a boundary. First year: visual identities for Tinkerer’s Lab fests and 11 out of 11 food vendor sponsorships closed.',
  },
  {
    id: 'anhad',
    letter: 'Ε',
    place: 'Anhad',
    label: 'Head of Sponsorship',
    text: 'Refused to email 400+ companies by hand. Taught myself Google Apps Script and API integration in five days and shipped an AI-personalised outreach engine. Faculty noticed.',
  },
  {
    id: 'bec',
    letter: 'Ζ',
    place: 'Budding Entrepreneurs Club',
    label: 'Where I am now',
    text: 'Helping run the Budding Entrepreneurs Club this year: a smaller core team of five, a brand system, and events like Investi-Case. Still early, still learning how to run things well.',
  },
  {
    id: 'next',
    letter: 'Η',
    place: 'What comes next',
    label: 'Not yet climbed',
    text: 'Taking ForgeX and the Big Idea Cohort from plans to something real people use, and learning to build teams that run without me in every detail.',
    upcoming: true,
  },
];

// Operating principles. Also the five named stars in the hero sky.
export const principles = [
  { name: 'Value over cost', text: 'Spend on net return and position, never on what is merely cheap.' },
  { name: 'Execution over labels', text: 'A title is an empty shell without work you can inspect and numbers you can check.' },
  { name: 'First principles over templates', text: 'Ask why a process exists before deciding to automate, redesign or remove it.' },
  { name: 'Clarity over decoration', text: 'In a layout or an org chart, every element has to justify its place.' },
  { name: 'Creation over consumption', text: 'Build assets: handbooks, pipelines, brand kits, frameworks. Not just notes.' },
];

export const craft = {
  disciplines: [
    'Business strategy',
    'AI workflow automation',
    'Brand and visual systems',
    'Organisation design',
    'Sponsorship and partnerships',
  ],
  // TODO(Sonu): adjust to the tools you actually use day to day.
  tools: [
    'Google Apps Script',
    'OpenAI API and LLM pipelines',
    'Python',
    'HTML and CSS prototyping',
    'Type and colour systems',
  ],
  recognition: [
    'Faculty commendation for the sponsorship automation engine',
    'Partners closed: J&K Bank, Dabur, Scaleon',
  ],
  process: [
    { letter: 'Α', name: 'Deconstruct', text: 'Find the real bottleneck and why the old way exists.' },
    { letter: 'Β', name: 'Architect', text: 'Design the system: incentives, flow, who does what.' },
    { letter: 'Γ', name: 'Give it form', text: 'A name, a type scale, a palette, words that move people.' },
    { letter: 'Δ', name: 'Ship and measure', text: 'Put it in front of real people and count what happens.' },
  ],
};

export const explorations = [
  { title: 'Smart-hive monitoring', text: 'Commercial risk research into IoT hive sensors for Indian beekeeping.' },
  { title: 'Bimetallic snap-wiper', text: 'A passive thermal mechanism that clears dust from solar panels without power.' },
  { title: 'The DB Web Method', text: 'A paper-based framework for lateral thinking.' },
  { title: 'The Gen Z Speaker', text: 'A synthesis of behavioural psychology for speaking to a young audience.' },
  { title: 'Poetry', text: '“Sun was I”, “The Proposal”, “up n down”: identity and resilience.' },
];
