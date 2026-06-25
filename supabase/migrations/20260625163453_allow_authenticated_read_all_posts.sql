-- Allow the single operator (any authenticated user) to read ALL posts,
-- including drafts, so the /write CMS can list, open, and edit them.
--
-- This is ADDITIVE and does not modify existing policies:
--   * "Published posts are readable by everyone" (anon + authenticated) stays as-is,
--     so anonymous visitors still see ONLY published posts.
--   * Postgres combines permissive SELECT policies with OR, so:
--       - anon          -> published only
--       - authenticated -> all rows (published OR true)
drop policy if exists "Authenticated can read all posts" on public.posts;
create policy "Authenticated can read all posts"
  on public.posts
  for select
  to authenticated
  using (true);
