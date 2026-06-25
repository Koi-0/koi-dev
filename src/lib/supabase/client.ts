import { createBrowserClient } from "@supabase/ssr";

// Browser-side Supabase client (uses the public anon key — safe to expose).
// Reads are still gated by Row Level Security on the database.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
