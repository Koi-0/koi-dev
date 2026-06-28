import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Blog",
  description: "개발하며 남기는 기록 — 웹 개발 회고와 의사결정 로그.",
  alternates: { canonical: "/blog" },
};

export const dynamic = "force-dynamic";

type PostListItem = {
  slug: string;
  title: string;
  excerpt: string | null;
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

export default async function BlogPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, excerpt, tags, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const posts = (data ?? []) as PostListItem[];

  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <header className="mb-12 sm:mb-16">
          <p className="font-mono text-sm tracking-wide text-accent">Blog</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            블로그
          </h1>
        </header>

        {error ? (
          <p className="text-muted">글을 불러오지 못했습니다.</p>
        ) : posts.length === 0 ? (
          <p className="text-muted">아직 발행된 글이 없습니다.</p>
        ) : (
          <ul className="border-t border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-xs tracking-wide text-muted">
                    {formatDate(post.published_at)}
                  </span>
                  <span className="text-xl font-medium transition-transform duration-200 group-hover:translate-x-1">
                    {post.title}
                  </span>
                  {post.excerpt ? (
                    <span className="text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </span>
                  ) : null}
                  {post.tags && post.tags.length > 0 ? (
                    <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                      {post.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="mx-auto w-full max-w-xl pt-12">
        <Link
          href="/"
          className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          ← 홈으로
        </Link>
      </footer>
    </div>
  );
}
