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
    slug: "extended-research-project",
    title: "Extended Research Project",
    venue: "Haberdashers' Occasional Paper",
    year: "2025",
    description:
      "STEM Prize-winner across both Haberdashers' schools; published as an Occasional Paper on how computer vision could improve food security, including comparison of model families (YOLO, F-CNNs)",
    border: "window",
    body: [
      "Increasing populations have led to greater concerns surrounding the effects of climate change, leading to food security becoming one of the most pressing challenges of the 21st century. To meet this demand, new data-driven and intelligent approaches to agriculture have emerged.",
      "This paper explores how computer vision, a branch of artificial intelligence that trains computers to interpret visual information, is transforming agricultural practices today.",
      "By combining hyperspectral imaging with 3D Convolutional Neural Networks, computer vision allows for plant diseases to be detected earlier, reducing pesticide use and preventing crop loss. For crop planning, Fully Convolutional Neural Networks applied to satellite imagery allow for farmland to be mapped more precisely, improving yield estimation and land management. And within farms, YOLO-based object detection methods automate cattle health monitoring, allowing farmers to manage larger and healthier herds.",
      "Despite some accessibility and computational challenges remaining, these applications collectively demonstrate how computer vision systems can enhance agricultural resilience and contribute to a more sustainable and food-secure future.",
      "https://www.habselstree.org.uk/wp-content/uploads/2025/11/OP-90-Hauduc-Harvesting-Intelligence.pdf",
    ],
  },
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
