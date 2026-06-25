import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "./login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Already signed in → go straight to the editor.
  if (user) {
    redirect("/write");
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <header className="mb-8">
          <p className="font-mono text-sm tracking-wide text-accent">Admin</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">로그인</h1>
          <p className="mt-2 text-sm text-muted">운영자 전용입니다.</p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}
