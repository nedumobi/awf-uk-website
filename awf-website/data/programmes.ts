export type Programme = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  whyItMatters: string;
  whatWeDo: string[];
  whoItSupports: string;
  exampleActivities: string[];
  image: string;
  icon: "hands" | "leaf" | "children" | "heart" | "book" | "bridge";
};

export const programmes: Programme[] = [
  {
    slug: "welfare-community-support",
    title: "Welfare & Community Support",
    shortDescription:
      "Supporting individuals and families during challenging circumstances through community assistance, signposting and practical support.",
    intro:
      "We help community members find their footing during difficult times — from a first point of contact to ongoing practical support.",
    whyItMatters:
      "Families facing hardship often don't know where to turn first. A trusted community organisation can be the difference between a problem that grows and one that gets resolved.",
    whatWeDo: [
      "Provide a first point of contact for individuals and families in need",
      "Signpost to relevant local authority, charity and statutory services",
      "Offer practical, community-based support during periods of hardship",
      "Check in on vulnerable and isolated community members",
    ],
    whoItSupports:
      "Individuals and families across the Anambra and wider Igbo community in Greater Manchester, particularly those newly arrived, isolated, or facing sudden hardship.",
    exampleActivities: [
      "[INSERT WELFARE CASE STUDY]",
      "Community support line and drop-in points",
      "Partnership referrals to local welfare services",
    ],
    image: "welfare",
    icon: "hands",
  },
  {
    slug: "culture-heritage",
    title: "Culture & Heritage",
    shortDescription:
      "Preserving and celebrating Anambra and Igbo culture through language, music, storytelling, traditions and cultural events.",
    intro:
      "Our cultural programmes keep Anambra and Igbo heritage alive and visible — for the people who grew up with it, and for the generations discovering it here in the UK.",
    whyItMatters:
      "Culture holds a community together across distance and generations. Without deliberate effort, language, story and tradition can fade within a single generation.",
    whatWeDo: [
      "Organise the annual Iriji (New Yam) Festival in Manchester",
      "Run Igbo language and cultural education sessions",
      "Celebrate traditional music, dress, dance and storytelling",
      "Document and share community history and heritage",
    ],
    whoItSupports:
      "Families wanting to pass on heritage to their children, young people exploring their identity, and the wider community marking cultural milestones together.",
    exampleActivities: [
      "Manchester Iriji Festival",
      "Igbo language classes for children and adults",
      "Cultural storytelling and heritage evenings",
    ],
    image: "culture",
    icon: "leaf",
  },
  {
    slug: "children-young-people",
    title: "Children & Young People",
    shortDescription:
      "Helping younger generations develop confidence, cultural identity, skills and stronger connections with their heritage.",
    intro:
      "We create spaces where children and young people build confidence, friendships and a secure sense of where they come from.",
    whyItMatters:
      "Young people growing up between cultures benefit from spaces that affirm both their heritage and their life in the UK — helping them thrive in both.",
    whatWeDo: [
      "Run youth-focused sessions alongside major community events",
      "Support mentoring and role-model opportunities",
      "Encourage participation in cultural and educational activities",
      "Create safe, welcoming spaces for young people to connect",
    ],
    whoItSupports:
      "Children and young people from the Anambra and wider Igbo community, and their families.",
    exampleActivities: [
      "Youth programme at the Iriji Festival",
      "[INSERT MENTORING PROGRAMME DETAIL]",
      "Family learning sessions",
    ],
    image: "youth",
    icon: "children",
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    shortDescription:
      "Promoting healthier lifestyles, social connection, physical activity and community wellbeing.",
    intro:
      "Wellbeing is a community effort. We create opportunities for connection, activity and support that help people feel well and less alone.",
    whyItMatters:
      "Isolation and poor wellbeing can go unnoticed without a community around to check in. Regular, welcoming activity brings people together before problems take hold.",
    whatWeDo: [
      "Host community social and wellbeing activities",
      "Promote awareness of health and wellbeing support services",
      "Encourage physical activity and social connection",
      "Support members experiencing isolation",
    ],
    whoItSupports:
      "Community members of all ages, with particular attention to older members and those at risk of isolation.",
    exampleActivities: [
      "[INSERT WELLBEING EVENT DETAIL]",
      "AWA Couples Dinner Night",
      "Community wellbeing check-ins",
    ],
    image: "wellbeing",
    icon: "heart",
  },
  {
    slug: "education-skills",
    title: "Education & Skills",
    shortDescription:
      "Providing opportunities for learning, development, workshops, mentoring and skills-building.",
    intro:
      "From workshops to mentoring, we help community members build the skills and knowledge to move forward with confidence.",
    whyItMatters:
      "Access to learning and development shouldn't depend on where you start. Community-led education closes gaps that formal systems can miss.",
    whatWeDo: [
      "Run workshops on topics relevant to community members",
      "Offer mentoring and guidance for education and career development",
      "Support skills-building for young people and adults",
      "Partner with training providers on relevant opportunities",
    ],
    whoItSupports:
      "Community members seeking to build skills, confidence or new opportunities, from young people to adults.",
    exampleActivities: [
      "[INSERT WORKSHOP PROGRAMME DETAIL]",
      "Mentoring pairings",
      "Partner-led training sessions",
    ],
    image: "education",
    icon: "book",
  },
  {
    slug: "community-integration",
    title: "Community Integration",
    shortDescription:
      "Helping individuals and families build stronger connections within their communities and participate fully in wider society.",
    intro:
      "We help community members put down roots — building connections both within the Anambra community and across Greater Manchester more widely.",
    whyItMatters:
      "A community that is confident in its own identity is better placed to contribute to, and connect with, the wider society around it.",
    whatWeDo: [
      "Build partnerships with local authorities and community organisations",
      "Support newly arrived families in settling into the local area",
      "Encourage participation in wider civic and community life",
      "Represent community interests in local and regional forums",
    ],
    whoItSupports:
      "Individuals and families building a life in Greater Manchester, and the wider community organisations and partners we work alongside.",
    exampleActivities: [
      "[INSERT PARTNERSHIP PROGRAMME DETAIL]",
      "Community forums and local authority liaison",
      "Newcomer welcome support",
    ],
    image: "integration",
    icon: "bridge",
  },
];
