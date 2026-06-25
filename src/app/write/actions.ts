"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type SaveState = { error: string | null };

// ASCII slug from a title. Returns "" for titles with no latin/number chars
// (e.g. Korean-only), so the caller can apply a safe fallback.
function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function savePost(
  _prevState: SaveState,
  formData: FormData,
): Promise<SaveState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const id = formData.get("id") ? String(formData.get("id")) : null;
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const excerpt = String(formData.get("excerpt") ?? "").trim() || null;
  const tags = String(formData.get("tags") ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const status =
    String(formData.get("intent") ?? "draft") === "publish"
      ? "published"
      : "draft";

  if (!title) {
    return { error: "제목을 입력하세요." };
  }

  // For edits, load the existing row (authenticated can read drafts now).
  let existing: { id: string; slug: string; published_at: string | null } | null =
    null;
  if (id) {
    const { data } = await supabase
      .from("posts")
      .select("id, slug, published_at")
      .eq("id", id)
      .maybeSingle();
    if (!data) {
      return { error: "글을 찾을 수 없습니다." };
    }
    existing = data;
  }

  // Keep the slug stable on edit; generate + de-duplicate on create.
  let slug: string;
  if (existing) {
    slug = existing.slug;
  } else {
    const base = slugify(title) || `post-${Date.now().toString(36)}`;
    slug = base;
    let n = 2;
    // de-dupe against existing slugs
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { data } = await supabase
        .from("posts")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();
      if (!data) break;
      slug = `${base}-${n++}`;
    }
  }

  // Set published_at on first publish; preserve the original on later edits.
  const published_at =
    status === "published"
      ? (existing?.published_at ?? new Date().toISOString())
      : (existing?.published_at ?? null);

  const payload = { title, content, excerpt, tags, status, published_at, slug };

  let finalId: string;
  let finalSlug: string;
  if (existing) {
    const { error } = await supabase
      .from("posts")
      .update(payload)
      .eq("id", existing.id);
    if (error) {
      return { error: `저장 중 오류가 발생했습니다: ${error.message}` };
    }
    finalId = existing.id;
    finalSlug = slug;
  } else {
    const { data, error } = await supabase
      .from("posts")
      .insert(payload)
      .select("id, slug")
      .single();
    if (error) {
      return { error: `저장 중 오류가 발생했습니다: ${error.message}` };
    }
    finalId = data.id;
    finalSlug = data.slug;
  }

  if (status === "published") {
    redirect(`/blog/${finalSlug}`);
  }
  redirect(`/write/${finalId}?saved=1`);
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
