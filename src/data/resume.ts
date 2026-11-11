// The professional frame: a résumé. Edit here; /resume reads from this file.
// TODO(Sonu): check the dates marked with ‘(confirm)’ in the README.

export const resume = {
  headline: 'B.Tech student, IIT Jammu · Business strategy, AI automation and brand systems',
  summary:
    'Second-year Materials Science and Engineering undergraduate at IIT Jammu who works across business strategy, AI workflow automation and visual design. I have automated personalised sponsorship outreach to 412 companies with Google Apps Script and the OpenAI API, helped run a national case competition that reached 306 participants from 74 institutions, and designed brand systems for student organisations and campus events. I learn new tools quickly when a problem calls for them, and I care about work that can be measured.',

  education: [
    {
      place: 'Indian Institute of Technology Jammu',
      detail: 'B.Tech, Materials Science and Engineering',
      when: 'Expected 2029',
    },
    {
      place: 'Kota, Rajasthan',
      detail: 'Engineering entrance preparation, on scholarship',
      when: 'Before IIT Jammu',
    },
    {
      place: 'Jawahar Navodaya Vidyalaya',
      detail: 'Class 6 to 12, residential',
      when: '',
    },
  ],

  experience: [
    {
      role: 'President',
      org: 'Budding Entrepreneurs Club (BEC), IIT Jammu',
      when: '2026 to present',
      points: [
        'Restructured a 28-member committee into a five-person core team (“Captains”) with clear ownership of each area.',
        'Designed the club’s brand system: type scale (Sora, Manrope, Inter), palette (#4DB6FF, #1E3A8A, #111827), logo-derived patterns and reusable post templates.',
        'Set up an institutional partnership with E-Cell / NEC IIT Bombay for event credibility and reach, while BEC kept ownership of its audience.',
        'Organised Investi-Case ’26: 306 registered participants from 74 institutions (incl. 7 IITs and 6 IIMs), with a live, no-AI crisis boardroom round.',
        'Automated registration emails, Round 2 scheduling across volunteer slots and certificate delivery with Google Apps Script.',
        'Ran the Founders Forum (September 2026) through cold outreach to founders; wrote and designed Chapter 1 of the BEC Design Thinking Handbook.',
      ],
    },
    {
      role: 'Head of Sponsorship',
      org: 'Anhad (techno-cultural fest) and Convoquer ’26 (sports fest), IIT Jammu',
      when: '2026',
      points: [
        'Replaced manual, one-by-one emailing of 412 corporate prospects with an automated pipeline that writes and sends a personalised email to each company.',
        'Learned Google Apps Script and OpenAI API integration in five days to build it, with no prior automation background; commended by faculty.',
        'Led sponsor pitching and designed sponsorship collateral; partnerships closed include J&K Bank, Dabur and Scaleon.',
      ],
    },
    {
      role: 'Lead Graphic Designer',
      org: 'Tinkerer’s Lab, IIT Jammu',
      when: '2025 to 2026',
      points: [
        'Created the complete visual identity for flagship events Perjan / Pragyaan and Ujjemitsu: theme, typography and colour system.',
        'Designed event posters, custom merchandise and hoodies, and physical ID cards.',
      ],
    },
    {
      role: 'Sponsorship volunteer',
      org: 'Campus fest sponsorship team (11 members), IIT Jammu',
      when: '2025 to 2026',
      points: ['Closed all 11 of the food vendor sponsorships assigned to me (11 of 11).'],
    },
    {
      role: 'Branding and sourcing',
      org: 'Shree Patidar Group, Madhya Pradesh',
      when: 'Ongoing',
      points: [
        'Repositioning Shree Patidar Home Decor from a conventional local shop to a premium interior transformation brand.',
        'B2B sourcing across Indore and Ahmedabad for Home Decor and Shree Patidar Electric Vehicles, serving Sitamau, Nahargarh and Rupani Chauraha.',
      ],
    },
  ],

  projects: [
    {
      name: 'ForgeX',
      status: 'Prototype',
      text: 'Cross-institute platform matching technical builders with business strategists. Skill cards hide college, GPA and gender during first matching; royalty-based collaboration. HTML/CSS prototype.',
    },
    {
      name: 'The Big Idea Cohort',
      status: 'Planned',
      text: 'Three-phase regional entrepreneurship pipeline for 42+ schools and 15+ colleges: handbook-led problem capture (1,500+ target), 60-second video validation, closed investor finale.',
    },
    {
      name: 'Green Vent',
      status: 'Inventex ’26',
      text: 'Design-thinking project on grain spoilage and pest infestation in rural storage.',
    },
    {
      name: 'Hardware research',
      status: 'Exploration',
      text: 'IoT smart-hive monitoring for Indian beekeeping; a passive bimetallic snap-wiper for solar panel dust.',
    },
  ],

  skills: [
    { group: 'Strategy', items: ['Business strategy', 'Partnerships and sponsorship', 'Organisation design', 'Event architecture'] },
    { group: 'Automation', items: ['Google Apps Script', 'OpenAI API and LLM pipelines', 'Python'] },
    { group: 'Design', items: ['Brand and visual systems', 'Typography and colour', 'Event and print design', 'HTML and CSS prototyping'] },
  ],

  recognition: [
    'Faculty commendation for the sponsorship automation pipeline',
    'Partnerships closed with J&K Bank, Dabur and Scaleon',
    'Institutional partnership with E-Cell / NEC IIT Bombay',
  ],

  writing: ['Design Thinking Handbook, Chapter 1 (BEC)', 'The DB Web Method (lateral thinking framework)', 'The Gen Z Speaker (behavioural psychology notes)', 'Poetry'],
};
