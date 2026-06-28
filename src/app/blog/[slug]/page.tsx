import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type Post = {
  slug: string;
  title: string;
  content: string;
  tags: string[] | null;
  published_at: string | null;
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select("slug, title, content, tags, published_at")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (!data) {
    notFound();
  }

  const post = data as Post;

  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <article className="mx-auto w-full max-w-xl flex-1">
        <header className="mb-10 border-b border-border pb-8">
          <p className="font-mono text-xs tracking-wide text-muted">
            {formatDate(post.published_at)}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 ? (
            <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </p>
          ) : null}
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <footer className="mx-auto w-full max-w-xl pt-12">
        <Link
          href="/blog"
          className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          ← 블로그 목록
        </Link>
      </footer>
    </div>
  );
}
