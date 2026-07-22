import Link from "next/link";
import BorderedFrame from "./BorderedFrame";
import { getPostImage, type Post } from "@/lib/posts";
import { seededFrameTransform } from "@/lib/seededTransform";

export default function PostRow({ post }: { post: Post }) {
  const { rotateDeg, offsetX, offsetY } = seededFrameTransform(post.slug);

  return (
    <Link
      href={`/projects/${post.slug}`}
      className="group flex flex-col gap-6 border-b-2 border-black py-10 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
    >
      <div className="sm:max-w-lg">
        <p className="text-xs uppercase tracking-wide text-neutral-500">{post.category}</p>
        <h3 className="mt-1 font-display text-2xl transition-opacity group-hover:opacity-60 sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{post.description}</p>
      </div>

      <div className="w-40 shrink-0 self-center sm:w-48">
        <BorderedFrame
          variant={post.border}
          image={getPostImage(post)}
          placeholderLabel={post.category}
          rotateDeg={rotateDeg}
          offsetX={offsetX}
          offsetY={offsetY}
        />
      </div>
    </Link>
  );
}
