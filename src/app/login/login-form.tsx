"use client";

import { useActionState } from "react";
import { login } from "./actions";

const initialState: { error: string | null } = { error: null };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">이메일</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          className="rounded-md border border-border bg-transparent px-3 py-2 text-base outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted">비밀번호</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          className="rounded-md border border-border bg-transparent px-3 py-2 text-base outline-none transition-colors focus:border-accent"
        />
      </label>

      {state.error ? (
        <p role="alert" className="text-sm text-accent">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? "로그인 중…" : "로그인"}
      </button>
    </form>
  );
}
