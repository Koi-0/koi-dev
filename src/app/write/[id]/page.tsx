import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PostEditor, type EditablePost } from "../_components/post-editor";
import { logout } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const { saved } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("posts")
    .select("id, title, content, excerpt, tags, status, slug")
    .eq("id", id)
    .maybeSingle();
  if (!data) {
    notFound();
  }
  const post = data as EditablePost;

  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-12 flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-sm tracking-wide text-accent">Edit</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
              글 수정
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

        {saved ? (
          <p className="mb-6 rounded-md border border-border px-4 py-3 text-sm text-muted">
            임시저장됨 · 이 글은 아직 공개되지 않았습니다.
          </p>
        ) : null}

        <PostEditor post={post} />

        <div className="mt-10">
          <Link
            href="/write"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            ← 글 목록
          </Link>
        </div>
      </div>
    </div>
  );
}
