import type { BorderedFrameVariant } from "@/components/BorderedFrame";

export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  body?: string[];
  border?: BorderedFrameVariant;
  image?: { src: string; alt?: string };
  images?: { src: string; alt?: string }[];
  video?: { youtubeId: string };
  gallery?: { src: string; alt: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "safeway-ai-women-hackathon",
    title: "SafeWay: 2nd Place at the AI.WOMEN Hackathon",
    category: "Hackathon",
    description:
      "Placed 2nd overall out of 300 participants at the AI.WOMEN Hackathon in Hamburg, with an invitation to AI.SUMMIT 2026. Built SafeWay, a pedestrian routing app that finds the safest walk home rather than the fastest, personalised to each traveller's preferences.",
    border: "browserTab",
    video: { youtubeId: "axFjS1mrnR8" },
    image: {
      src: "/projects/safeway-app.jpg",
      alt: "SafeWay app showing ranked walking route options on a map of Hamburg",
    },
    gallery: [
      { src: "/projects/safeway-award.jpg", alt: "The SafeWay team holding the 2nd place Best Overall Project award at the AI.WOMEN Hackathon" },
      { src: "/projects/safeway-winner-tickets.jpg", alt: "The SafeWay team holding their AI.SUMMIT 2026 winner tickets" },
      { src: "/projects/safeway-team-working.jpg", alt: "The SafeWay team working together at the hackathon" },
    ],
    body: [
      "2nd place overall (Best Overall Project) at the AI.WOMEN Hackathon in Hamburg, 12-13 September 2026, out of 300 participants. The team was invited to the AI.SUMMIT 2026 in November.",
      "Built with Hannah Kalker, Janne Achenbach, Dominika Oliinyk and Megha Darda, SafeWay is a pedestrian routing app that finds the safest walk home, not just the fastest one. It scores a few route options against the traveller's own preferences (lighting, street type etc.), so each person gets a route personalised to them.",
      "The technical challenge: Hamburg doesn't have an official open streetlight dataset. SafeWay pulls street data from OpenStreetMap via the Overpass API, classifies each segment as unlit or lit and by type (residential, main road etc.), and turns that into an avoid layer. This is fed into OpenRouteService's routing engine as avoid-polygons, which generates the route alternatives live and scores them against the user's preferences.",
      "The QR code at the end of the demo video only works within Hamburg's coverage area, as it was built for the city we hacked in, in the time we had.",
    ],
  },
  {
    slug: "beri-labs",
    title: "Beri-Labs",
    category: "Startup",
    description:
      "Co-founder of Beri-Labs, an ed-tech startup building RAG-powered tools that let students and staff query their school's own documents in natural language.",
    body: [
      "Co-founder of Beri-Labs, an ed-tech startup building RAG-powered tools that let students and staff query their school's own documents in natural language.",
      "Helped 15 staff members in a leading independent school to onboard using our custom onboarding tool.",
      "https://beri-labs.github.io/",
    ],
  },
  {
    slug: "stochastic-modelling-markov-chains",
    title: "Stochastic Modelling with Markov Chains in Python: Weather and Text Prediction",
    category: "Personal Coding Project",
    description:
      "Coded a first-order Markov chain text-generation model in Python to simulate sequential behaviour, estimating transition probabilities from observed data and generating predictions via weighted sampling. Adapted the model for weather-state prediction, conducting independent research in eigenvectors and transition matrices to identify long-term probabilities of each state.",
  },
  {
    slug: "stock-market-sentiment-analysis",
    title: "Stock Market Sentiment Analysis",
    category: "Guided Project",
    description:
      "Analysed stock market movement from social-media text using BERT embeddings and logistic regression (TensorFlow/Keras/scikit-learn), achieving ~96% classification accuracy; choosing BERT over simpler embeddings to capture contextual sentiment nuance. Presented findings to 50+ attendees, translating model design decisions for a non-technical audience.",
  },
  {
    slug: "mathematical-modelling-essay",
    title: "Mathematical Modelling Essay",
    category: "Essay",
    description:
      "Modelled the art gallery problem using computational geometry; used triangulation and 3-colouring to derive the ⌊n/3⌋ guard bound through proof by induction; produced original diagrams.",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
