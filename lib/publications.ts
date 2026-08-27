import type { BorderedFrameVariant } from "@/components/BorderedFrame";

export type Publication = {
  slug: string;
  title: string;
  venue?: string;
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
    year: "2025",
    description:
      "Co-authored a practitioner-focused chapter in a published book on generative AI, bias, and assessment design; selected as the sole student contributor in a professional author group",
    border: "blackTab",
    image: {
      src: "/publications/ai-bias-in-education-cover.jpg",
      alt: "Cover of AI Bias in Education: Performing Critical Oversight, edited by Victoria Hedlund",
    },
    body: [
      "Our chapter, “Could She Be Black? Struggles Using GenAI in a Diverse Community,” explores how generative AI tools often fail to reflect the diversity we see in our multicultural school community. In particular, it focuses on the underrepresentation of women of colour in GenAI outputs and considers the impact this has on both students and staff.",
      "The chapter also provides practical recommendations for educators and policymakers on how to mitigate bias in AI tools, including strategies for inclusive assessment design and the importance of diverse data sets in training AI models.",
      "https://amzn.eu/d/0gZr12Hh",
    ],
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return PUBLICATIONS.find((pub) => pub.slug === slug);
}
