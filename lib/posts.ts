export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "beri-labs",
    title: "Beri-Labs",
    category: "Startup",
    description:
      "Co-founder of Beri-Labs, an ed-tech startup building RAG-powered tools that let students query their school's own documents in natural language.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — write-up in progress.",
    ],
  },
  {
    slug: "extended-research-project",
    title: "Extended Research Project",
    category: "Project",
    description:
      "Increasing populations have led to greater concerns surrounding the effects of climate change, leading to food security becoming one of the most pressing challenges of the 21st century.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — write-up in progress.",
    ],
  },
  {
    slug: "tom-rocks-maths-essay",
    title: "Tom Rocks Maths Essay",
    category: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — write-up in progress.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
