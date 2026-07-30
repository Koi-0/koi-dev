import Link from "next/link";

const navItems = [
  {
    href: "/about",
    label: "About",
    description: "역할이 확장된 과정과 일하는 방식",
  },
  {
    href: "/projects",
    label: "Projects",
    description: "문제와 판단으로 정리한 제품 개발 경험",
  },
  { href: "/blog", label: "Blog", description: "개발하며 검증하고 남긴 기록" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "KOI", url: "https://koi-dev.vercel.app" },
      {
        "@type": "Person",
        name: "KOI",
        url: "https://koi-dev.vercel.app",
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-xl">
          <header className="mb-16 sm:mb-20">
            <p className="font-mono text-sm tracking-wide text-accent">
              Product Engineer
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              koi
            </h1>
            <p className="mt-4 max-w-md break-keep text-lg leading-relaxed text-muted">
              전우영입니다. React·Next.js·TypeScript를 기반으로, <br />
              제품 정의부터 구현·배포·운영까지 연결합니다.
            </p>
          </header>

          <nav aria-label="주요 페이지" className="border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent"
              >
                <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-xl font-medium transition-colors duration-200 group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted">{item.description}</span>
                </span>
                <span
                  aria-hidden
                  className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-xl pt-12">
        <p className="font-mono text-xs tracking-wide text-muted">© 2026</p>
      </footer>
    </div>
  );
}
