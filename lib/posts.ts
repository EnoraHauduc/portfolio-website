export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  body?: string[];
};

export const POSTS: Post[] = [
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
