-- Table-level privileges for the API roles.
-- RLS (defined in the previous migration) still filters WHICH rows each role sees;
-- these GRANTs are the required base privilege for PostgREST to touch the table at all.

-- Anonymous visitors: read only (RLS further limits them to status = 'published').
grant select on table public.posts to anon;

-- Logged-in users: full read/write (write UI comes in a later step; RLS gates rows).
grant select, insert, update, delete on table public.posts to authenticated;
