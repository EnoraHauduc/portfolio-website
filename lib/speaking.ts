import type { BorderedFrameVariant } from "@/components/BorderedFrame";

export type SpeakingEntry = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  body: string[];
  border: BorderedFrameVariant;
  image?: { src: string; alt?: string };
  images?: { src: string; alt?: string }[];
  video?: { youtubeId: string };
};

export const SPEAKING: SpeakingEntry[] = [
  {
    slug: "tedx-time-perception",
    title: "TEDx Talk: The Illusion of Time",
    venue: "TEDx",
    year: "2026",
    description:
      "Delivered a talk examining the philosophy of time perception, exploring how cognitive and physical models of time diverge and what that reveals about the limits of human intuition ",
    border: "crt",
    image: {
      src: "/speaking/tedx-time-perception.png",
      alt: "Enora Hauduc on stage at TEDx Haus Elstree, presenting The Illusion of Time",
    },
    video: { youtubeId: "eWKeNngTqAk" },
    body: [
      "In modern society, time is treated like a currency- something that we can spend, save, waste… And yet, for something that feels so obvious and universal, many of us rarely stop to question what it actually is.",
      "In my talk, The Illusion of Time, I explore how physics, philosophy, psychology, and even language all tell a surprisingly similar story: time is far less fixed, objective, and universal than we tend to believe.",
      "From Einstein's relativity - where time bends with speed and gravity- to how our minds actively reshape the passage of hours, to cultures that experience time as entirely event-based... our relationship with time is more constructed than we realise.",
      "We can measure time with incredible precision, yet as humans, we don’t live in hours and seconds; we live in moments.",
      "Moments that stretch with fear and compress with joy. Moments that blur with routine and sharpen with discovery.",
      "Perhaps what truly matters then isn't how much time we have - but how we live each moment.",
    ],
  },
  {
    slug: "wellington-festival-panel",
    title: "Wellington Festival of Education — Panel",
    venue: "Wellington Festival of Education",
    year: "2026",
    description:
      "Following the publication of a practitioner-focused chapter on generative AI, bias, and policy in institutional settings, I was invited to speak on a panel at the Wellington Festival of Education, discussing the ethical implications of AI in education.",
    border: "window",
    image: {
      src: "/speaking/wellington-mic.jpg",
      alt: "Enora Hauduc speaking into a microphone on the panel at the Wellington Festival of Education",
    },
    images: [
      {
        src: "/speaking/wellington-mic.jpg",
        alt: "Enora Hauduc speaking into a microphone on the panel at the Wellington Festival of Education",
      },
      {
        src: "/speaking/wellington-panel.jpg",
        alt: "The full panel on stage at the Wellington Festival of Education, with a Top Trumps-style slide displayed behind them",
      },
      {
        src: "/speaking/wellington-banner.jpg",
        alt: "Festival of Education banner hanging from a lamp post",
      },
      {
        src: "/speaking/wellington-lawn.jpg",
        alt: "The festival grounds, with marquees, umbrellas, and attendees seated on the lawn",
      },
    ],
    body: [
      "Following the publication of a practitioner-focused chapter on generative AI, bias, and policy in institutional settings, I was invited to speak on a panel at the Wellington Festival of Education, discussing the ethical implications of AI in education - a conversation that's become increasingly urgent as AI tools reshape how students are being taught and supported.",
      "During our discussion, we explored how GenAI outputs reflect patterns and assumptions baked into their training data. When tools marketed as 'intelligent' exhibit bias, students disconnect from resources that could genuinely help them, reinforcing the very inequalities these tools should help address.",
      "Yet this isn't a reason to abandon GenAI. Instead, when educators maintain agency through critical prompting and learn to spot bias in outputs, they can harness these tools to create diverse, representative learning resources.",
      "Millions of students are experiencing learning shaped by AI right now. As we move through a transitional period, it becomes more vital than ever to harness AI’s huge potential for increased representation and accessibility in the classroom, whilst staying vigilant about potential dangers."
    ],
  },
  {
    slug: "gsa-conference-panel",
    title: "Girls' School Association Conference — Panel",
    venue: "Girls' School Association Conference",
    year: "2026",
    description:
      "I was invited to speak on a panel at the Girls' School Association Conference, discussing the ethical implications of AI in education and how to ensure that students are supported in navigating this rapidly evolving landscape.",
    border: "browserTab",
    body: [
      "I was invited to speak on a panel at the Girls' School Association Conference, discussing the ethical implications of AI in education and how to ensure that students are supported in navigating this rapidly evolving landscape.",
      "The conference brought together educators across the UK to address the complex mental health and wellbeing challenges facing young people today. With this year's theme covering digital strategies in schools, our panel explored how we can engage critically with the digital tools we're using in the classroom.",
      "Our panel, 'Biased AI Outcomes and Why They Matter,' explored effective usage of generative AI in schools, with particular focus on the biases that can occur. We explored how AI acts like a mirror to the biases in the world, and when we use it superficially, we risk overlooking its limitations.",
      "We concluded that AI must instead be used thoughtfully through three key strategies: Notice, Mitigate, and Educate."
    ],
  },
  {
    slug: "you-make-your-own-luck",
    title: "You Make Your Own Luck (co-delivered talk)",
    venue: "Haberdashers' Girls' School",
    year: "2026",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    border: "blackTab",
    body: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris — write-up in progress.",
    ],
  },
];

export function getSpeakingBySlug(slug: string): SpeakingEntry | undefined {
  return SPEAKING.find((entry) => entry.slug === slug);
}
