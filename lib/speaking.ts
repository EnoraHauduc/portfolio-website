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
    image: {
      src: "/speaking/GSA-conference-desk.jpg",
      alt: "Laptop displaying the 'Notice, Mitigate, Educate' slide, alongside printed title slides and the book Biases in Education, set up ahead of the panel",
    },
    images: [
      {
        src: "/speaking/GSA-conference-desk.jpg",
        alt: "Laptop displaying the 'Notice, Mitigate, Educate' slide, alongside printed title slides and the book Biases in Education, set up ahead of the panel",
      },
      {
        src: "/speaking/GSA-conference-biased-outcomes-and-why-they-matter.jpeg",
        alt: "Title slide reading 'Biased AI outcomes and why they matter'",
      },
    ],
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
      "As part of the very first student-led Heads' Lecture Series at Haberdashers' Elstree Schools, Ravjoth Brar and I, shared our journey building Beri Labs, an AI education start-up creating real-world AI tools for schools.",
    border: "blackTab",
    image: {
      src: "/speaking/you-make-your-own-luck-presenting.jpg",
      alt: "Ravjoth Brar and Enora Hauduc standing in front of the title slide for 'You make your own luck' at the Heads' Lecture Series",
    },
    images: [
      {
        src: "/speaking/you-make-your-own-luck-presenting.jpg",
        alt: "Ravjoth Brar and Enora Hauduc standing in front of the title slide for 'You make your own luck' at the Heads' Lecture Series",
      },
      {
        src: "/speaking/you-make-your-own-luck-noticeboard.jpeg",
        alt: "The Heads' Lecture Series noticeboard displaying the 'You Make Your Own Luck' talk announcement alongside other lectures",
      },
      {
        src: "/speaking/you-make-your-own-luck-poster.jpeg",
        alt: "The 'You Make Your Own Luck' lecture poster, featuring the Beri logo and talk details",
      },
    ],
    body: [
      "As part of the very first student-led Heads' Lecture Series at Haberdashers' Elstree Schools, Ravjoth Brar and I, shared our journey building Beri Labs, an AI education start-up creating real-world AI tools for schools.",
      "What makes an individual lucky? Is it natural talent? Being in the right place at the right time?",
      "Drawing from our own experience of cold pitches, strategic pivots, and (many!) rejections, we spoke about how to stop waiting for luck and start cultivating it. We outlined six key tips to cultivate your luck:",
      "1. Be Proactive - Don't wait for opportunities to fall in your lap. Notice gaps. Act on them.",
      "2. Have a Clear, Actionable Goal - Set something ambitious but achievable. Break it into smaller steps.",
      "3. Lay the Foundations - Build credibility and relationships early. Network. Talk to people. Make yourself known. When the opportunity arrives, the connections are already there.",
      "4. Judge a Book by Its Cover - First impressions matter. When you pitch an idea, you're asking for someone's time and attention so prepare accordingly.",
      "5. Luck = Preparation + Opportunity - You can't control everything. But you can position yourself so that when moments come (and they will), you're ready.",
      "6. Fail Fast, Learn Faster - Rejection is normal. The people who cultivate luck don't have higher success rates; they just try more. Yes, they face more rejections. But they also succeed more. And crucially, they learn from what went wrong.",
    ],
  },
];

export function getSpeakingBySlug(slug: string): SpeakingEntry | undefined {
  return SPEAKING.find((entry) => entry.slug === slug);
}
