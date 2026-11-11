// The professional frame: a résumé in the standard campus-placement format.
// Every bullet starts with an action verb and describes what *I* did, not what an event achieved.
// TODO(Sonu): add CGPA / percentages and the Class 12 row when you want them shown.

export interface Entry {
  title: string;
  sub: string; // organisation or tools
  when: string;
  points: string[];
}

export const resume = {
  degree: 'B.Tech, Materials Science and Engineering',
  institute: 'Indian Institute of Technology Jammu',
  location: 'Jammu, J&K',

  education: [
    { course: 'B.Tech, Materials Science and Engineering', place: 'Indian Institute of Technology Jammu', when: '2025 – 2029' },
    { course: 'Class 10', place: 'Jawahar Navodaya Vidyalaya', when: '' },
  ],

  projects: [
    {
      title: 'Sponsorship Outreach Automation',
      sub: 'Google Apps Script, OpenAI API, Google Sheets, Gmail',
      when: '2026',
      points: [
        'Built a pipeline that reads a prospect list of 412 companies from Google Sheets, generates a personalised email for each with the OpenAI API, sends it through Gmail and logs every send.',
        'Replaced the sponsorship team’s manual, one-by-one emailing; learned Apps Script and the API from scratch in five days to deliver it.',
        'Received appreciation from faculty for improving the team’s process.',
      ],
    },
    {
      title: 'Event Operations Automation, Investi-Case ’26',
      sub: 'Google Apps Script',
      when: '2026',
      points: [
        'Automated registration status emails, Round 2 scheduling across parallel volunteer note-taking slots, and certificate generation and delivery for a national case competition.',
      ],
    },
    {
      title: 'ForgeX: skill-first collaboration platform (prototype)',
      sub: 'HTML, CSS, product design',
      when: '2026',
      points: [
        'Designed the product architecture for a platform that matches technical and business students across institutes.',
        'Specified an anonymised skill card that hides college, GPA and gender during first matching; built an interactive HTML/CSS prototype.',
      ],
    },
    {
      title: 'Green Vent: rural grain storage',
      sub: 'Design thinking, Inventex ’26',
      when: '2026',
      points: ['Developed a design-thinking concept to reduce grain spoilage and pest infestation in rural storage.'],
    },
  ] as Entry[],

  positions: [
    {
      title: 'President, Budding Entrepreneurs Club',
      sub: 'IIT Jammu',
      when: '2026 – present',
      points: [
        'Reorganised a large committee into a five-member core team with a clear owner for each function.',
        'Designed the club’s brand system (type scale, palette, logo-derived patterns, templates) used across its communication.',
        'Co-designed the format and visual identity of Investi-Case ’26, including a live crisis boardroom round with no AI tools allowed.',
        'Wrote and designed Chapter 1 of the BEC Design Thinking Handbook.',
      ],
    },
    {
      title: 'Head of Sponsorship',
      sub: 'Anhad (techno-cultural fest) and Convoquer ’26 (sports fest), IIT Jammu',
      when: '2026',
      points: [
        'Led sponsor pitching and designed the sponsorship decks and collateral for both fests.',
        'Introduced automated, personalised outreach to replace manual emailing (see Projects).',
      ],
    },
    {
      title: 'Lead Graphic Designer',
      sub: 'Tinkerer’s Lab, IIT Jammu',
      when: '2025 – 2026',
      points: [
        'Created the visual identities for flagship events Perjan / Pragyaan and Ujjemitsu: theme, typography and colour system.',
        'Designed posters, merchandise and hoodies, and participant ID cards.',
      ],
    },
    {
      title: 'Sponsorship Team Member',
      sub: 'Campus fest, IIT Jammu',
      when: '2025 – 2026',
      points: ['Closed all 11 food vendor sponsorships assigned to me.'],
    },
  ] as Entry[],

  experience: [
    {
      title: 'Branding and Sourcing',
      sub: 'Shree Patidar Group, Madhya Pradesh',
      when: 'Ongoing',
      points: [
        'Working on repositioning Shree Patidar Home Decor from a conventional local shop towards an interior transformation brand.',
        'Supporting B2B sourcing from Indore and Ahmedabad for the home decor and electric vehicle businesses.',
      ],
    },
  ] as Entry[],

  skills: [
    { k: 'Automation and AI', v: 'Google Apps Script, OpenAI API, prompt design, Google Workspace automation' },
    { k: 'Programming', v: 'Python, HTML, CSS' },
    { k: 'Design', v: 'Brand identity, typography, colour systems, print and merchandise design' },
    { k: 'Business', v: 'Sponsorship sales, partnerships, market positioning, B2B sourcing' },
  ],

  interests: [
    { k: 'Writing', v: 'Poetry, behavioural psychology notes, the DB Web Method (lateral thinking)' },
    { k: 'Research', v: 'IoT beehive monitoring; passive solar-panel cleaning mechanism' },
  ],
};
