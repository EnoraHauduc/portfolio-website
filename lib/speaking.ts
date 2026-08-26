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
    year: "20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    border: "window",
    body: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — write-up in progress.",
    ],
  },
  {
    slug: "gsa-conference-panel",
    title: "Girls' School Association Conference — Panel",
    venue: "Girls' School Association Conference",
    year: "20XX",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    border: "browserTab",
    body: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit — write-up in progress.",
    ],
  },
  {
    slug: "you-make-your-own-luck",
    title: "You Make Your Own Luck (co-delivered talk)",
    venue: "Lorem ipsum dolor sit amet",
    year: "20XX",
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
