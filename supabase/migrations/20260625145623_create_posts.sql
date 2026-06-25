-- posts: blog entries
create table if not exists public.posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  content      text not null default '',
  excerpt      text,
  tags         text[] default '{}',
  status       text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

-- Indexes
-- Note: `slug` is already backed by a btree index via its UNIQUE constraint above,
-- so we only add an index for the status/date listing query.
create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);

-- Keep updated_at fresh on every row update
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row
  execute function public.set_updated_at();

-- Row Level Security
alter table public.posts enable row level security;

-- Anyone (including anonymous) may read ONLY published posts
drop policy if exists "Published posts are readable by everyone" on public.posts;
create policy "Published posts are readable by everyone"
  on public.posts
  for select
  using (status = 'published');

-- Writes are restricted to authenticated users (login UI comes in a later step)
drop policy if exists "Authenticated users can insert posts" on public.posts;
create policy "Authenticated users can insert posts"
  on public.posts
  for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update posts" on public.posts;
create policy "Authenticated users can update posts"
  on public.posts
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete posts" on public.posts;
create policy "Authenticated users can delete posts"
  on public.posts
  for delete
  to authenticated
  using (true);

-- Seed: one published post for verification (idempotent)
insert into public.posts (slug, title, excerpt, content, tags, status, published_at)
values (
  'hello-world',
  '안녕하세요, 첫 글입니다',
  'Supabase 연동을 확인하기 위한 첫 번째 글입니다.',
  E'koi-dev 블로그의 첫 글입니다.\n\n이 글이 보인다면 Supabase 연동과 RLS SELECT 정책이 정상 동작하는 것입니다. 로그인 없이도 published 상태의 글은 누구나 읽을 수 있습니다.\n\n마크다운 고급 렌더링은 다음 단계에서 다룹니다. 지금은 기본 텍스트와 줄바꿈 수준으로 충분합니다.',
  array['announcement', 'supabase'],
  'published',
  now()
)
on conflict (slug) do nothing;
