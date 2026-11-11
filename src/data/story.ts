// The personal frame: the long story, told in the first person.
// Each chapter is a list of paragraphs. Edit freely; the /story page reads from here.
import type { Painting } from './paintings';

export interface Chapter {
  id: string;
  numeral: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  plate?: { name: Painting; numeral: string };
}

export const storyIntro = {
  title: 'The long way round',
  lede:
    'This is the personal side of the site: where I come from, what shaped the way I work, and what I am still figuring out. If you only want the facts, the résumé is one click away. If you have ten minutes, this is the version I would tell you over chai.',
};

export const chapters: Chapter[] = [
  {
    id: 'roots',
    numeral: 'I',
    kicker: 'Mandsaur, Madhya Pradesh',
    title: 'Where I come from',
    paragraphs: [
      'I grew up in a farming family in Mandsaur, in western Madhya Pradesh. Farming teaches you economics long before anyone uses the word. A season has a fixed amount of water, money and time in it, and every decision about seed, labour or timing shows up in the harvest a few months later. Nobody around me talked about strategy, but everyone practised it.',
      'The lesson I took from that, without knowing I was taking it, is that an idea only matters when it produces something useful. A clever plan that does not change the yield is just a story. That sounds harsh, but I find it freeing: it means the question is never "is this impressive?" but "does this actually work, and for whom?"',
      'I still think about decisions this way. Before I start anything, I try to ask what it costs, what it returns, and whether there is a simpler way to get the same result.',
    ],
    quote: 'An idea only matters when it produces something useful.',
    plate: { name: 'column', numeral: 'II' },
  },
  {
    id: 'jnv',
    numeral: 'II',
    kicker: 'Jawahar Navodaya Vidyalaya · Class 6 to 12',
    title: 'Leaving home at eleven',
    paragraphs: [
      'At eleven I left home for Jawahar Navodaya Vidyalaya, a residential school, and lived in a hostel from Class 6 all the way to Class 12. For a child that age it is a big change. You learn to wake yourself up, look after your own things, settle your own arguments and handle your own homesickness, because there is nobody else whose job it is to do it for you.',
      'Navodaya also puts you in a room with students from very different villages and backgrounds. You learn quickly that people think differently, and that getting something done with a group depends far more on trust and clarity than on who is the smartest person present.',
      'Those seven years gave me something I lean on all the time now: I am comfortable being new, in unfamiliar places, without a map. When I do not know how something works, my first instinct is not to wait for someone to teach me. It is to start figuring it out.',
    ],
  },
  {
    id: 'kota',
    numeral: 'III',
    kicker: 'Kota, Rajasthan',
    title: 'Kota, and a choice',
    paragraphs: [
      'After school I went to Kota on a scholarship to prepare for engineering entrances. Kota is intense in a very particular way: everyone around you is measuring themselves by one number, and it is easy to start believing that number is the whole of you.',
      'When results came, I had a decision to make. I could join IIT Jammu straight away, or spend another year preparing to chase a different institutional name. I chose to start. My reasoning was simple, and I still believe it: a year spent building things, shipping work and learning from real people compounds. A year spent chasing a label mostly just delays the start.',
      'I do not say that to look down on anyone who chose differently. It was the right call for me, and it is the reason everything else on this site exists.',
    ],
    quote: 'A year spent building compounds. A year spent chasing a label mostly delays the start.',
    plate: { name: 'gateway', numeral: 'III' },
  },
  {
    id: 'first-year',
    numeral: 'IV',
    kicker: 'IIT Jammu · first year',
    title: 'Saying yes to everything',
    paragraphs: [
      'I study Materials Science and Engineering. It gives me a rigorous, analytical way of looking at things, and I take it seriously. But I never treated the degree as a fence around what I am allowed to learn.',
      'In my first year I tried to see how the campus actually runs. I joined Tinkerer’s Lab as a graphic designer and ended up building the complete visual identity for flagship events like Perjan / Pragyaan and Ujjemitsu: the theme, the typography, the colours, the posters, the hoodies, even the physical ID cards people wore around their necks. Seeing something I had designed on a screen turn into things people wore and carried around campus was a strange and very good feeling.',
      'I also volunteered on the sponsorship side of the fest, in an eleven-member team. My piece of it was food vendors, and I managed to close all eleven of the ones I approached. It was not glamorous work, mostly conversations and follow-ups, but it taught me how a sponsor thinks, which turned out to matter a lot later.',
    ],
  },
  {
    id: 'anhad',
    numeral: 'V',
    kicker: 'Anhad and Convoquer ’26',
    title: 'Five days with a script',
    paragraphs: [
      'Later I was made Head of Sponsorship for Anhad, our techno-cultural fest. The tradition I inherited was to email more than four hundred companies one by one, by hand. Find the contact, copy the template, change the name, hope for the best, repeat. It burned people out, and because every email was the same, very few companies replied.',
      'I had no background in automation. But it was obvious that the problem was not effort, it was the method. So I gave myself five days to learn Google Apps Script and how to connect it to the OpenAI API. By the end of them I had a working pipeline that read through our list of 412 companies, wrote a personalised email for each one, and sent it. Work that used to mean hundreds of hours of copying and pasting now ran in the background.',
      'Some faculty members noticed and appreciated it, which I was genuinely grateful for. More importantly, the team got its time back to do the parts a script cannot do: calls, meetings and actual conversations. I also led the pitching and designed the sponsor collateral for Anhad and for Convoquer ’26, our sports fest, and we closed partnerships with organisations including J&K Bank, Dabur and Scaleon.',
      'The real lesson was not about AI. It was that most "hard work" traditions survive simply because nobody has stopped to ask why they exist. Asking that question is free, and it is usually where the leverage is.',
    ],
    quote: 'The problem was not effort. It was the method.',
    plate: { name: 'temple', numeral: 'IV' },
  },
  {
    id: 'bec',
    numeral: 'VI',
    kicker: 'Budding Entrepreneurs Club',
    title: 'Running a club, and learning on the job',
    paragraphs: [
      'This year I am looking after the Budding Entrepreneurs Club (BEC) at IIT Jammu. I want to be honest about what that is: a student club role, one of many on campus, held for a year. It is a chance to practise, not a destination. What I care about is whether the things we run are actually useful to the students who show up.',
      'The club had a large committee of around twenty-eight people, and in practice that meant nobody was quite sure who owned what. We moved to a small core of five people we call the Captains, each clearly responsible for an area. It is not a perfect structure, but decisions now have owners, and things move faster.',
      'I also built the club a proper visual system, because a club that looks different in every post is hard to trust. A clear type scale (Sora, Manrope and Inter), a fixed palette, a couple of graphic patterns cut from the logo, and reusable templates so that anyone on the team can make something on-brand without me.',
      'With the team, we set up a partnership with E-Cell / NEC IIT Bombay, which gave our events a credibility a young club could not have built on its own. We ran Investi-Case ’26, a corporate-crisis case competition with a live boardroom round where AI tools were not allowed. It drew 306 registered participants from 74 institutions, including seven IITs and six IIMs, and the community around it has grown to roughly five hundred people. Behind the scenes, Apps Script handled registrations, Round 2 scheduling across volunteer slots, and certificates. We also ran a Founders Forum in September 2026 by cold-messaging founders, and I wrote and designed the first chapter of a BEC Design Thinking Handbook.',
      'None of this makes me someone special. It has mostly taught me how much I still have to learn about people, timelines and follow-through.',
    ],
    plate: { name: 'moon', numeral: 'V' },
  },
  {
    id: 'learning',
    numeral: 'VII',
    kicker: 'An honest note',
    title: 'What I am still learning',
    paragraphs: [
      'I am good at seeing the shape of a big idea and drawing the plan for it. ForgeX, the Big Idea Cohort, the frameworks in my notebooks: I enjoy that part. The harder part, and the part I am working on, is carrying plans all the way to something real people use, measuring what happens, and then improving it. Investi-Case is the one project where I have really done the full loop so far. I want more of my work to look like that.',
      'I also have a habit of starting too many things at once, because I can design, write a script, pitch a sponsor and draft a strategy, and all of them feel urgent. I am trying to pick one or two things each semester and finish them properly.',
      'And I am learning to delegate. Shrinking a team is easy. Writing things down clearly enough that other people can do the work well without me in every detail is much harder, and it is the skill I most want to have by the end of this year.',
    ],
    quote: 'Shrinking a team is easy. Writing things down so others can run it is the hard part.',
  },
  {
    id: 'desk',
    numeral: 'VIII',
    kicker: 'Outside the brief',
    title: 'Things I make when nobody asks',
    paragraphs: [
      'Back home in Madhya Pradesh, I work on branding and sourcing with Shree Patidar Group. With Shree Patidar Home Decor, the idea is to position it not as one more local shop competing on price, but as a place people come to transform a room, with sourcing improved across Indore and Ahmedabad. There is a sister business in electric vehicles too. Applying ideas usually reserved for big-city brands to towns like Sitamau, Nahargarh and Rupani Chauraha is one of the most interesting problems I know.',
      'I like small engineering puzzles that sit close to farming and energy: a design-thinking project on grain spoilage for Inventex ’26 called Green Vent, research into IoT sensors for beekeepers, and a passive bimetallic mechanism that could wipe dust off solar panels using only heat, with no power at all.',
      'And I write. Poems like “Sun was I”, “The Proposal” and “up n down”, which are mostly about identity and getting back up. Notes on behavioural psychology that became “The Gen Z Speaker”. A paper-based way of thinking sideways around a problem that I call the DB Web Method. None of these are finished products. They are how I think.',
    ],
  },
  {
    id: 'how',
    numeral: 'IX',
    kicker: 'How I try to work',
    title: 'Five rules I keep coming back to',
    paragraphs: [
      'Value over cost: I would rather spend more on something that returns more than save money on something that does nothing. Execution over labels: a title or a college name means little next to work you can open and numbers you can check. First principles over templates: before automating or redesigning a process, understand why it exists. Clarity over decoration: in a poster or in an org chart, every element has to earn its place. Creation over consumption: build handbooks, pipelines and frameworks, not only notes.',
      'I do not always live up to these. Writing them down is how I hold myself to them.',
    ],
  },
  {
    id: 'next',
    numeral: 'X',
    kicker: 'Still climbing',
    title: 'What comes next',
    paragraphs: [
      'I am in my second year, and most of what I want to build is still ahead of me. In the near term: take ForgeX from a prototype to something a few real users try, run the first phase of the Big Idea Cohort with schools and colleges in the region, and leave BEC with clear processes the next team can actually use.',
      'Further out, I want to keep working where business, AI and design meet, especially for the kind of semi-urban markets I grew up around, which are usually the last to get good tools and good brands.',
      'If any of that overlaps with something you are working on, I would genuinely like to hear from you.',
    ],
  },
];
