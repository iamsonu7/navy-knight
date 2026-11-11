// All project content. Add a new object to `projects` to add a card and a case-study page.
//
// image:   optional. Put the file in /public/work/ and set e.g. '/work/investi-case.webp'.
//          Without one, the card shows a typographic cover built from `cover`.
// gallery: optional process images for the case-study page, same folder.
// bg:      which painting sits behind the case-study page (see src/components/Painting.astro).

export type Lens = 'business' | 'ai' | 'design';
export type Status = 'shipped' | 'lab';
export type { Painting } from './paintings';
import type { Painting } from './paintings';

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
  narrative: string[]; // the case study told in the first person
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
    narrative: [
      'Most college case competitions I had seen followed the same pattern: a PDF goes out, teams paste the problem into an AI tool, polished slides come back, and judges struggle to tell real thinking from generated text. Participation tends to come from a small circle of nearby colleges. I wanted to try building something that felt different to take part in.',
      'We started with the identity. Investi-Case was framed as an investigation: a company in crisis, clues in the data, a boardroom waiting for your call. Visually, I mixed the mood of a modern corporate mystery with motifs from Dogra and Basohli art from the Jammu region, so the competition looked like it came from somewhere specific rather than from a template.',
      'The second round was the heart of it: a live crisis boardroom with zero tolerance for AI tools. Teams had to think on their feet in front of evaluators, which is much closer to how real decisions get made.',
      'Behind the scenes, I wrote Google Apps Script pipelines so the logistics would not swallow the team. Registration status emails went out automatically, Round 2 boardroom slots were scheduled across parallel volunteer note-taking sessions, and certificates were generated and sent the moment results were final.',
      'It reached 306 registered participants from 74 institutions, including seven IITs and six IIMs, and left behind a community of around five hundred people. It was a team effort from start to finish, and it is the project where I most clearly saw an idea go all the way from a plan to measurable results.',
    ],
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
    narrative: [
      'When I took on sponsorship for Anhad, the inherited plan was a list of more than four hundred companies and the expectation that we would email each of them by hand. I could see what that would do to the team: weeks of copying, pasting and changing names, and very few replies at the end of it, because every email looked the same.',
      'I had never automated anything before. I gave myself five days to learn Google Apps Script and how to call the OpenAI API from it. The pipeline I ended up with reads the company list, drafts an email written for that specific company, and sends it, keeping track of what has gone out.',
      'The point was never to remove people from sponsorship. It was to remove the copying and pasting so the team could spend its time on calls, meetings and follow-ups, which is where deals are actually made. I led the pitching and designed the sponsor collateral for Anhad and for Convoquer ’26, our sports fest.',
      'We closed partnerships with organisations including J&K Bank, Dabur and Scaleon, and the automation was appreciated by faculty. Before all of this, as a first-year volunteer, I had closed all eleven food vendor sponsorships I was given, and that ground-level experience of how sponsors think shaped how the emails were written.',
    ],
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
    narrative: [
      'When I started looking after the Budding Entrepreneurs Club, it had two problems that fed each other. Very few students knew what it did, and the people inside it were spread across a committee of around twenty-eight, so nobody clearly owned anything.',
      'The first change was structural. We moved to five Captains, each responsible for a clear area. A smaller group is easier to coordinate, and when something slips, it is obvious whose job it is to fix it.',
      'The second was visual. I built a brand kit from scratch: Sora ExtraBold for headlines, Manrope SemiBold for subheadings and Inter for body text; a palette of Sky Blue #4DB6FF, Deep Navy #1E3A8A and Charcoal #111827; and two graphic patterns, the Angled Cut and the Curved Trail, taken from the logo. Templates mean any Captain can make a post that looks like it belongs.',
      'The third was credibility. A partnership with E-Cell / NEC IIT Bombay put a well-known name next to ours for events, while BEC kept its own audience and decisions. With that in place we ran Investi-Case ’26 and a Founders Forum in September 2026, and I wrote and designed the first chapter of a BEC Design Thinking Handbook.',
      'It is still a work in progress. The next step is writing down how things are done so the team can run without depending on me.',
    ],
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
    narrative: [
      'Tinkerer’s Lab was where I first did design work that real crowds would see. The flagship events, Perjan / Pragyaan and Ujjemitsu, each needed an identity that would hold together from the first announcement poster to the last day of the event.',
      'For each one I worked out a theme, chose the typography and set a colour system, then carried it through every piece: posters, custom merchandise and hoodies, and the physical ID cards participants wore.',
      'Working across print, fabric and screen taught me that a design system is only as good as its weakest application. A palette that looks great on a poster has to survive being printed on a hoodie too.',
    ],
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
    narrative: [
      'There are plenty of students in the region with real problems they want to solve, and very few routes that take a rough idea all the way to someone who could fund it. The Big Idea Cohort is my plan for one such route. It has not launched yet.',
      'It works as an inverted funnel in three phases. First, the BEC Design Thinking Handbook goes out to 42+ schools and 15+ higher-education institutions, including IIMs, NIT Hamirpur and NIT Srinagar, and GFTIs like SMVDU, with the aim of collecting more than 1,500 raw problem statements.',
      'Second, the top fifth of those are asked to explain their idea in a 60-second video, and the response on social media becomes part of the judging. Third, the best five teams pitch in a closed-door finale to angel investors and the campus incubation pipeline, I3C.',
      'The design tries to give each group something real: students get a path, the administration gets regional reach, and sponsors get a pipeline of ideas. The honest next step is to run Phase 1 and find out which of my assumptions are wrong.',
    ],
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
    narrative: [
      'Across institutes, people who can build things and people who can sell and plan them rarely meet. When they do, decisions about who to work with are often made on college name or grades before anyone has seen what the other person can do.',
      'ForgeX is a platform idea to change that. Everyone gets an R-Resume Skill Card that shows what they can actually do. During the first round of matching, college name, GPA and gender are hidden on purpose, so the match is made on skills alone.',
      'Collaborations run on a royalty-based model, so people who contribute to a project share in what it becomes. That gives everyone a reason to stay after the first meeting.',
      'Right now ForgeX is a product architecture and an interactive HTML and CSS prototype. The next step is to put it in front of a small group of real users and learn from what they do with it.',
    ],
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
    narrative: [
      'In semi-urban towns, most shops compete on one thing: price. That is a hard game to win, and it leaves customers who want something better with nowhere to go.',
      'With Shree Patidar Home Decor, the work is to reposition the business from a conventional local shop into a premium interior transformation brand, a place you come to change how a room feels, not just to buy a product. Alongside it is Shree Patidar Electric Vehicles.',
      'On the supply side, it means building B2B sourcing across Indore and Ahmedabad so that the range and the margins can support that positioning, in towns like Sitamau, Nahargarh and Rupani Chauraha.',
      'It is ongoing work, and probably the most practical business education I have.',
    ],
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
    narrative: [
      'Grain stored in rural India is regularly lost to moisture and pests before it ever reaches a market. Coming from a farming background, this is not an abstract problem to me.',
      'Green Vent was a design-thinking project for Inventex ’26 that looked at grain spoilage and infestation in rural storage, starting from how grain is actually kept rather than from how textbooks say it should be.',
    ],
  },
];

export const lensLabels: Record<Lens, string> = {
  business: 'Business',
  ai: 'AI',
  design: 'Design',
};
