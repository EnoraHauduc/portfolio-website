import type { BorderedFrameImage, BorderedFrameVariant } from "@/components/BorderedFrame";

export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  body: string[];
  border: BorderedFrameVariant;
  image?: BorderedFrameImage;
};

export const POSTS: Post[] = [
  {
    slug: "beri-labs",
    title: "Beri-Labs",
    category: "Startup",
    description:
      "Co-founding an ed-tech startup building RAG-powered tools that let students query their school's own documents in natural language.",
    border: "browserTab",
    body: [
      "Beri-Labs began as an attempt to answer a simple question: what if a student could ask their school's own materials a question directly, instead of digging through PDFs, slide decks, and scattered class notes?",
      "We built a retrieval-augmented generation (RAG) pipeline that ingests a school's existing documents and lets students query them in plain language, with answers grounded in the source material rather than a general-purpose model's guesswork.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — more on the technical architecture, the pilot rollout, and what we learned to come.",
    ],
  },
  {
    slug: "book-chapter-generative-ai-bias",
    title: "Generative AI, Bias & Policy — Book Chapter",
    category: "Publication",
    description:
      "Co-authoring a practitioner-focused chapter on generative AI, bias, and policy in institutional settings.",
    border: "blackTab",
    body: [
      "This chapter looks at generative AI adoption from inside an institution rather than from the outside looking in — the practical, everyday decisions that determine whether a tool reduces bias or quietly reproduces it.",
      "It draws on classroom-level observations to make the case for policy that treats bias as a design problem, not an afterthought.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris — full citation and excerpt to follow.",
    ],
  },
  {
    slug: "stock-sentiment-model",
    title: "Stock Sentiment Model",
    category: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit — a sentiment-driven model for exploring how market-moving language correlates with price action.",
    border: "window",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, framing the problem of extracting a tradeable signal from noisy financial text.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, covering the data pipeline, the model architecture, and how its output was evaluated against price movement.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — write-up in progress.",
    ],
  },
  {
    slug: "markov-chain-project",
    title: "Markov Chain Project",
    category: "Project",
    description:
      "Lorem ipsum dolor sit amet — a small project exploring Markov chains as a lens for modelling state transitions in a real-world system.",
    border: "browserTab",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, introducing the system being modelled and why a Markov chain was a natural fit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, walking through the transition matrix, steady-state behaviour, and what it predicted.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — write-up in progress.",
    ],
  },
  {
    slug: "tedx-time-perception",
    title: "TEDx Talk — The Philosophy of Time Perception",
    category: "Talk",
    description:
      "A TEDx talk on the philosophy of time perception — how cognitive and physical models of time diverge, and what that reveals about the limits of human intuition.",
    border: "crt",
    body: [
      "Physics treats time as a coordinate — symmetric, reversible in its equations, indifferent to direction. Human experience treats it as something closer to a current: irreversible, asymmetric, felt rather than measured.",
      "This talk sits in that gap, using it to ask what our intuitions about time are actually intuitions about — and where they quietly stop being reliable.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — full transcript and video embed to follow.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getPostImage(post: Post): BorderedFrameImage | undefined {
  if (!post.image) return undefined;
  return { src: post.image.src, alt: post.image.alt || `${post.title} — preview image` };
}
