import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PostEditor } from "./_components/post-editor";
import { logout } from "./actions";

export const dynamic = "force-dynamic";

type PostRow = {
  id: string;
  title: string;
  status: string;
  updated_at: string;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function WritePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Authenticated session → RLS allows reading drafts too.
  const { data } = await supabase
    .from("posts")
    .select("id, title, status, updated_at")
    .order("updated_at", { ascending: false });
  const posts = (data ?? []) as PostRow[];

  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-12 flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-sm tracking-wide text-accent">Write</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
              새 글 쓰기
            </h1>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              로그아웃
            </button>
          </form>
        </header>

        <PostEditor />

        <section className="mt-16">
          <h2 className="mb-4 text-sm font-medium tracking-wide text-muted">
            내 글 ({posts.length})
          </h2>
          {posts.length === 0 ? (
            <p className="text-sm text-muted">아직 글이 없습니다.</p>
          ) : (
            <ul className="border-t border-border">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/write/${post.id}`}
                    className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:border-accent"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          post.status === "published"
                            ? "text-accent"
                            : "text-muted"
                        }`}
                      >
                        {post.status === "published" ? "발행" : "초안"}
                      </span>
                      <span className="font-medium transition-transform duration-200 group-hover:translate-x-1">
                        {post.title}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {formatDate(post.updated_at)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
