// All project content. Add a new object to `projects` to add a card and a case-study page.
//
// image:   optional. Put the file in /public/work/ and set e.g. '/work/investi-case.webp'.
//          Without one, the card shows a typographic cover built from `cover`.
// gallery: optional process images for the case-study page, same folder.
// bg:      which painting sits behind the case-study page (see src/components/Painting.astro).

export type Lens = 'business' | 'ai' | 'design';
export type Status = 'shipped' | 'lab';
export type Painting = 'sword' | 'gateway' | 'column' | 'temple' | 'moon';

export interface Project {
  slug: string;
  title: string;
  status: Status;
  discipline: string;
  year: string;
  lenses: Lens[];
  role: string;
  summary: string; // two lines on the card
  cover: { figure: string; caption: string; letter: string };
  image?: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption?: string }[];
  bg: Painting;
  metrics?: { value: string; label: string }[];
  challenge: string;
  moves: { title: string; text: string }[];
  outcome: string;
  partners?: string[];
}

export const projects: Project[] = [
  {
    slug: 'investi-case-26',
    title: 'Investi-Case ’26',
    status: 'shipped',
    discipline: 'Event architecture',
    year: '2026',
    lenses: ['business', 'ai', 'design'],
    role: 'Organiser, with the BEC IIT Jammu team',
    summary:
      'A national corporate-crisis boardroom simulation with zero AI tolerance, automated end to end behind the scenes.',
    cover: { figure: '74', caption: 'institutions', letter: 'Ι' },
    bg: 'column',
    metrics: [
      { value: '74', label: 'institutions' },
      { value: '7 + 6', label: 'IITs and IIMs' },
      { value: '306', label: 'registered participants' },
      { value: '~500', label: 'community members' },
    ],
    challenge:
      'College case competitions often draw a narrow field, attract generic AI-written submissions and run on chaotic manual logistics.',
    moves: [
      {
        title: 'A brand with a point of view',
        text: 'An investigative identity that mixes modern corporate mystery with classical Dogra and Basohli visual motifs from the region.',
      },
      {
        title: 'Infrastructure nobody has to think about',
        text: 'Google Apps Script pipelines send registration status emails, schedule Round 2 boardrooms across parallel volunteer note-taking slots, and deliver certificates instantly.',
      },
      {
        title: 'A test AI can’t sit for you',
        text: 'A live crisis boardroom round with a 0% AI tolerance, built to test raw judgement under pressure.',
      },
    ],
    outcome:
      'Reached 74 institutions, including 7 IITs and 6 IIMs, with 306 registered participants and a community of about 500 members.',
  },
  {
    slug: 'sponsorship-engine',
    title: 'AI sponsorship engine',
    status: 'shipped',
    discipline: 'AI automation',
    year: '2025–26',
    lenses: ['ai', 'business'],
    role: 'Head of Sponsorship and Head of Design, Anhad and Convoquer ’26',
    summary:
      'Replaced one-by-one emailing to 412 companies with a personalised outreach pipeline I taught myself to build in five days.',
    cover: { figure: '412', caption: 'companies, one pipeline', letter: 'Σ' },
    bg: 'temple',
    metrics: [
      { value: '412', label: 'corporate prospects' },
      { value: '5 days', label: 'from zero to shipped' },
      { value: '11/11', label: 'food vendors closed earlier' },
    ],
    challenge:
      'The sponsorship team had inherited a workflow of emailing 412 companies by hand, one at a time. It burned people out and converted poorly.',
    moves: [
      {
        title: 'Learn the tool the problem needs',
        text: 'With no background in automation, I learned Google Apps Script and OpenAI API integration in five days.',
      },
      {
        title: 'Personal at scale',
        text: 'Each company received an email written for it, generated and sent by the pipeline instead of copied and pasted.',
      },
      {
        title: 'Pitch and collateral',
        text: 'Led the commercial pitching and designed the sponsor collateral for Convoquer ’26 (sports) and Anhad (techno-cultural).',
      },
    ],
    outcome:
      'Hundreds of hours of manual work removed, a faculty commendation for operational innovation, and partnerships closed with J&K Bank, Dabur and Scaleon.',
    partners: ['J&K Bank', 'Dabur', 'Scaleon'],
  },
  {
    slug: 'bec-rebrand',
    title: 'BEC rebrand and restructure',
    status: 'shipped',
    discipline: 'Brand system · Organisation design',
    year: '2026',
    lenses: ['design', 'business'],
    role: 'Lead brand designer and team lead, Budding Entrepreneurs Club',
    summary:
      'A 28-person committee became 5 Captains, a brand kit was built from scratch, and E-Cell IIT Bombay became a partner.',
    cover: { figure: '28 → 5', caption: 'members to Captains', letter: 'Β' },
    bg: 'gateway',
    metrics: [
      { value: '28 → 5', label: 'team, restructured' },
      { value: '3', label: 'typefaces, one scale' },
      { value: '1', label: 'national partner: E-Cell IIT Bombay' },
    ],
    challenge:
      'Low visibility, fragmented visual communication and a 28 to 30 person team where nobody was clearly accountable.',
    moves: [
      {
        title: 'Five Captains',
        text: 'Replaced the traditional hierarchy with a five-person executive unit, so every decision had an owner.',
      },
      {
        title: 'A real brand kit',
        text: 'Sora ExtraBold headlines, Manrope SemiBold subheads, Inter body; Sky Blue #4DB6FF, Deep Navy #1E3A8A, Charcoal #111827; angled-cut and curved-trail patterns; modular UI parts.',
      },
      {
        title: 'Borrowed reach, kept ownership',
        text: 'A partnership with E-Cell / NEC IIT Bombay brought national credibility at no cost, while BEC kept its own audience.',
      },
      {
        title: 'Handbook and Founders Forum',
        text: 'Wrote and designed Chapter 1 of the BEC Design Thinking Handbook, and ran the Founders Forum (September 2026) through cold outreach to founders.',
      },
    ],
    outcome:
      'A smaller team that moves faster, a visual system every post now follows, and a national partner on day one.',
    partners: ['E-Cell IIT Bombay'],
  },
  {
    slug: 'tinkerers-lab',
    title: 'Tinkerer’s Lab visual identity',
    status: 'shipped',
    discipline: 'Event identity',
    year: '2025–26',
    lenses: ['design'],
    role: 'Lead graphic designer, Tinkerer’s Lab',
    summary:
      'Complete visual themes for flagship tech events: type, colour, posters, hoodies and physical ID cards.',
    cover: { figure: '2', caption: 'flagship events, end to end', letter: 'Τ' },
    bg: 'sword',
    challenge: 'Flagship campus events needed an identity that held together from the first poster to the ID card on the lanyard.',
    moves: [
      {
        title: 'One theme per event',
        text: 'Conceived and executed the full visual theme, typography and colour system for Perjan / Pragyaan and Ujjemitsu.',
      },
      {
        title: 'Print to wearable',
        text: 'Posters, custom merchandise and hoodies, and physical ID cards, all designed single-handedly.',
      },
    ],
    outcome: 'Two flagship events with a single, recognisable identity across every touchpoint.',
  },
  {
    slug: 'big-idea-cohort',
    title: 'The Big Idea Cohort',
    status: 'lab',
    discipline: 'Growth strategy',
    year: 'In progress',
    lenses: ['business', 'design'],
    role: 'Strategy and rollout architecture',
    summary:
      'An inverted-funnel entrepreneurship pipeline across 42+ schools and 15+ colleges, ending in a closed-door investor finale.',
    cover: { figure: '1,500+', caption: 'problem statements, target', letter: 'Ω' },
    bg: 'moon',
    metrics: [
      { value: '42+', label: 'schools in scope' },
      { value: '15+', label: 'higher-ed institutions' },
      { value: '3', label: 'phases' },
    ],
    challenge:
      'Regional students have ideas but no pipeline that takes a problem statement all the way to an investor.',
    moves: [
      {
        title: 'Phase 1: capture',
        text: 'The BEC Design Thinking Handbook as a lead magnet, aiming to collect 1,500+ raw problem statements.',
      },
      {
        title: 'Phase 2: validate',
        text: 'The top 20% go through a 60-second social video loop, so the audience does the first round of judging.',
      },
      {
        title: 'Phase 3: the finale',
        text: 'The top five teams pitch behind closed doors to angel investors and the I3C incubation pipeline.',
      },
    ],
    outcome:
      'A framework and rollout plan covering IIMs, NIT Hamirpur and Srinagar, and GFTIs like SMVDU, with a dual-value case for administration and sponsors. Not yet launched.',
  },
  {
    slug: 'forgex',
    title: 'ForgeX',
    status: 'lab',
    discipline: 'Product architecture',
    year: 'Prototype',
    lenses: ['business', 'design', 'ai'],
    role: 'Product concept, architecture and HTML/CSS prototype',
    summary:
      'A cross-institute platform matching builders with strategists on skill alone: no college name, GPA or gender at first match.',
    cover: { figure: '0', caption: 'bias signals at first match', letter: 'Φ' },
    bg: 'sword',
    challenge: 'Technical builders and business strategists rarely meet across institutes, and when they do, labels decide too early.',
    moves: [
      {
        title: 'The R-Resume Skill Card',
        text: 'A profile built on skills, with strict rules that hide college name, GPA and gender during initial matching.',
      },
      {
        title: 'Royalty-based collaboration',
        text: 'Contributors share in what they help build, so there is a reason to stay past the first meeting.',
      },
    ],
    outcome: 'Product architecture and an interactive HTML/CSS prototype. Next step: put it in front of real users.',
  },
  {
    slug: 'shree-patidar',
    title: 'Shree Patidar retail',
    status: 'lab',
    discipline: 'Brand positioning · Supply chain',
    year: 'Ongoing',
    lenses: ['business', 'design'],
    role: 'Branding and supply chain consulting',
    summary:
      'Metropolitan brand positioning and B2B sourcing applied to semi-urban Madhya Pradesh: home decor and electric vehicles.',
    cover: { figure: '3', caption: 'semi-urban markets', letter: 'Π' },
    bg: 'gateway',
    challenge: 'Semi-urban shops compete on price alone because nobody has positioned them as anything more.',
    moves: [
      {
        title: 'Repositioning',
        text: 'Shree Patidar Home Decor moves from a conventional local shop to a premium interior transformation brand.',
      },
      {
        title: 'Sourcing',
        text: 'B2B supply chain work across Indore and Ahmedabad for Home Decor and Shree Patidar Electric Vehicles.',
      },
    ],
    outcome: 'Active in Sitamau, Nahargarh and Rupani Chauraha.',
  },
  {
    slug: 'green-vent',
    title: 'Green Vent',
    status: 'lab',
    discipline: 'Design thinking · AgTech',
    year: 'Inventex ’26',
    lenses: ['design'],
    role: 'Design thinking research',
    summary: 'An agricultural design-thinking project targeting grain spoilage and pest infestation in rural storage.',
    cover: { figure: '1', caption: 'problem: grain that rots', letter: 'Γ' },
    bg: 'temple',
    challenge: 'Stored grain in rural India is lost to moisture and pests before it reaches the market.',
    moves: [
      {
        title: 'Start from the farm',
        text: 'Design-thinking research grounded in how grain is actually stored, not how it should be.',
      },
    ],
    outcome: 'Developed for Inventex ’26.',
  },
];

export const lensLabels: Record<Lens, string> = {
  business: 'Business',
  ai: 'AI',
  design: 'Design',
};
