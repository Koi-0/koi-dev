"use client";

import { useActionState, useEffect, useState } from "react";
import { savePost } from "../actions";

export type EditablePost = {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  tags: string[] | null;
  status: string;
  slug: string;
};

const initialState: { error: string | null } = { error: null };

const fieldClass =
  "rounded-md border border-border bg-transparent px-3 py-2 text-base outline-none transition-colors focus:border-accent";

export function PostEditor({ post }: { post?: EditablePost }) {
  const [state, formAction, isPending] = useActionState(savePost, initialState);
  const [dirty, setDirty] = useState(false);

  // Warn on hard navigation (close/reload/external link) when there are unsaved
  // edits. Soft navigations from a successful save don't trigger this.
  useEffect(() => {
    if (!dirty || isPending) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty, isPending]);

  return (
    <form
      action={formAction}
      onChange={() => setDirty(true)}
      className="flex flex-col gap-5"
    >
      {post ? <input type="hidden" name="id" value={post.id} /> : null}

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">제목</span>
        <input
          name="title"
          defaultValue={post?.title ?? ""}
          required
          className={`${fieldClass} text-lg font-medium`}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">본문 (마크다운)</span>
        <textarea
          name="content"
          defaultValue={post?.content ?? ""}
          rows={16}
          className={`${fieldClass} resize-y font-mono text-sm leading-relaxed`}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">요약 (excerpt)</span>
        <input
          name="excerpt"
          defaultValue={post?.excerpt ?? ""}
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">태그 (쉼표로 구분)</span>
        <input
          name="tags"
          defaultValue={post?.tags?.join(", ") ?? ""}
          placeholder="announcement, supabase"
          className={`${fieldClass} font-mono text-sm`}
        />
      </label>

      {state.error ? (
        <p role="alert" className="text-sm text-accent">
          {state.error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          name="intent"
          value="draft"
          disabled={isPending}
          className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent disabled:opacity-50"
        >
          임시저장
        </button>
        <button
          type="submit"
          name="intent"
          value="publish"
          disabled={isPending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          발행
        </button>
      </div>
    </form>
  );
}
