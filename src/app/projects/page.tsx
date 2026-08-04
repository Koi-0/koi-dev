import Link from "next/link";
import type { Metadata } from "next";

const description = "KOI가 직접 만들고 다듬은 프로젝트 모음.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | KOI",
    description,
    url: "https://koi-dev.vercel.app/projects",
    type: "website",
  },
};

const projects: {
  number: string;
  name: string;
  period: string;
  description: string;
  keywords: string;
  href?: string;
}[] = [
  {
    number: "01",
    name: "대기업 종합상사 대상 팜유 위성 모니터링 PoC",
    period: "2026.05 – 2026.07",
    description:
      "대기업 종합상사의 트레이딩·구매 담당자가 팜유 산지의 작황 변화를 위성 지표로 먼저 확인할 수 있는지를 검증하기 위한 PoC입니다. 제품 정의, 국가에서 농장까지 좁혀 가는 지도 탐색 구조, 서버 인증 경계, 인계받은 백엔드·인프라 점검을 담당했습니다.",
    keywords:
      "Product Definition · Web Application · BFF · Backend/Infra Audit",
    href: "/projects/palm-monitoring-poc",
  },
  {
    number: "02",
    name: "수확량 예측 B2B SaaS",
    period: "2026.03 – 2026.05",
    description:
      "트레이더가 작물별 수확량 예측 결과와 트랙레코드를 확인하는 B2B 대시보드입니다. 핵심 사용자 흐름, 조직 기반 RLS 멀티테넌시, mock·실데이터 공통 접근 구조를 설계했습니다.",
    keywords: "Frontend · Supabase · Auth/RLS · Multitenancy",
  },
  {
    number: "03",
    name: "AI 주문 문서 정형화 SaaS MVP",
    period: "2026.01 – 2026.02",
    description:
      "이미지·PDF·엑셀 형태의 주문 문서를 AI로 정형화하는 SaaS MVP입니다. 파일 업로드부터 AI 서버 연동, 클라이언트 데이터 변환, 엑셀 다운로드와 이메일 전달까지 핵심 사용자 흐름을 구현했습니다.",
    keywords: "Frontend · Supabase · Server Action · AI Integration",
    href: "/projects/ai-order-doc-mvp",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <header>
          <p className="font-mono text-sm tracking-wide text-accent">
            Projects
          </p>
          <h1 className="mt-3 break-keep text-3xl font-semibold tracking-tight sm:text-4xl">
            프로젝트
          </h1>
        </header>

        {projects.map((project) => {
          const body = (
            <>
              <p className="font-mono text-sm tracking-wide text-accent">
                {project.number}
              </p>
              <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                {project.name}
                {project.href ? (
                  <span
                    aria-hidden
                    className="ml-3 inline-block text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                ) : null}
              </h2>
              <p className="mt-2 font-mono text-sm tracking-wide text-muted">
                {project.period}
              </p>
              <p className="mt-6 break-keep text-lg leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-sm tracking-wide text-muted">
                {project.keywords}
              </p>
            </>
          );

          return (
            <section
              key={project.number}
              className="mt-16 border-t border-border pt-16"
            >
              {project.href ? (
                <Link href={project.href} className="group block">
                  {body}
                </Link>
              ) : (
                body
              )}
            </section>
          );
        })}
      </main>

      <footer className="mx-auto w-full max-w-xl pt-12">
        <Link
          href="/"
          className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          ← 홈으로
        </Link>
      </footer>
    </div>
  );
}
