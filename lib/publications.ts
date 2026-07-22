import type { BorderedFrameVariant } from "@/components/BorderedFrame";

export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  description: string;
  body: string[];
  border: BorderedFrameVariant;
  image?: { src: string; alt?: string };
};

export const PUBLICATIONS: Publication[] = [
  {
    slug: "ai-bias-in-education-book-chapter",
    title: "AI Bias in Education (Book Chapter)",
    venue: "Lorem ipsum dolor sit amet",
    year: "20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    border: "blackTab",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — full citation and excerpt to follow.",
    ],
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return PUBLICATIONS.find((pub) => pub.slug === slug);
}
