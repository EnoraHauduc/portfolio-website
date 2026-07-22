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
};

export const SPEAKING: SpeakingEntry[] = [
  {
    slug: "tedx-time-perception",
    title: "TEDx Talk: The Philosophy of Time Perception",
    venue: "TEDx",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    border: "crt",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — full transcript and video embed to follow.",
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
