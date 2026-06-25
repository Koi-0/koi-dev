import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-wide text-accent">About</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        소개
      </h1>
      <p className="mt-4 text-muted">페이지 준비 중입니다.</p>
      <Link
        href="/"
        className="mt-10 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        ← 홈으로
      </Link>
    </main>
  );
}
