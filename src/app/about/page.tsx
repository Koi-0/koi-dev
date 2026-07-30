import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "KOI 소개 — 개발자로서 걸어온 길과 관심사.",
  alternates: { canonical: "/about" },
};

const linkRowClass =
  "group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <section className="pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">01</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            제품 문제를 실제 동작하는 서비스로 연결합니다.
          </h2>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            전우영입니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            React·Next.js·TypeScript를 가장 강한 기술 기반으로 삼아, 사용자
            흐름과 시스템 경계를 구체화하고 구현·배포·운영까지 연결하는 Product
            Engineer로 일하고 있습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            모호한 요구사항을 실제 사용 가능한 제품으로 만드는 과정에 강점이
            있습니다.
          </p>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">02</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            역할이 확장된 과정
          </h2>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            웹디자인과 웹퍼블리싱을 배우기 시작했고, 실무형 프론트엔드 교육을
            거쳐 개발 경력을 시작했습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            스텝하우에서는 기존 서비스의 UI와 성능을 개선하며 PR 리뷰를 기반으로
            협업하는 방식을 익혔습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            이후 바르카에 인턴으로 합류해 정규직 Product Engineer로
            전환했습니다. 5인 팀에서 제품을 완성하는 과정에서 화면 구현을 넘어
            제품 정의, 데이터·API 연동, 배포와 운영까지 담당 범위를
            확장했습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            이 경험을 통해 화면·데이터·API·운영이 하나의 제품 흐름으로
            연결된다는 관점을 갖게 되었고, 지금의 역할이 형성됐습니다.
          </p>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">03</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            일하는 방식
          </h2>

          <div className="mt-8">
            <h3 className="break-keep text-xl font-medium">
              3-1. 모호한 요구를 구현 가능한 범위로 바꿉니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              요구사항이 모호할수록 바로 구현하기보다 사용자, 핵심 지표, 데이터
              범위와 완료 기준을 먼저 정리합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              팜유 위성 모니터링 PoC에서는 제품 비전을 사용자·핵심 지표·화면
              구성·데이터 범위·MVP 기준으로 나누고, 제품 정의서와 개발
              마일스톤으로 구체화했습니다.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="break-keep text-xl font-medium">
              3-2. 화면과 함께 데이터 접근 경계를 설계합니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              화면에서 보이지 않게 처리하는 것만으로는 권한을 보호할 수
              없습니다. 누가 어떤 데이터에 접근할 수 있고, 무엇이 브라우저로
              전달되어도 되는지를 화면 설계와 함께 정합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              곡물 예측 B2B SaaS에서는 조직 기반 RLS를 적용해 고객사별 데이터를
              데이터베이스 정책으로 격리하고, service_role 키가 브라우저에
              노출되지 않도록 구성했습니다.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="break-keep text-xl font-medium">
              3-3. 실패가 전체 흐름을 멈추지 않도록 만듭니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              정상적으로 동작하는 경우뿐 아니라, 일부 작업이 실패했을 때
              사용자가 어디까지 계속 진행할 수 있는지도 함께 설계합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              AI 주문 문서 정형화 SaaS에서는 파일별 진행률과 실패 상태를 분리해,
              한 파일의 오류가 전체 작업을 중단하지 않도록 구현했습니다.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">04</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            앞으로의 방향
          </h2>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            작은 조직에서 제품 정의부터 구현·배포·운영까지 독립적으로 연결하며
            0→1 경험을 쌓았습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            앞으로는 제품·디자인·엔지니어링 동료와 문제를 함께 정의하고, 코드
            리뷰와 사용자 피드백·운영 데이터를 바탕으로 하나의 제품을 지속적으로
            개선하는 팀에서 일하고 싶습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            프론트엔드 전문성을 중심에 두면서 API, 인증·권한, 데이터 모델과 운영
            환경에 대한 이해를 넓혀, 제품을 End-to-End로 책임질 수 있는 역량을
            더 깊게 키우는 것이 다음 목표입니다.
          </p>

          <nav aria-label="링크" className="mt-12 border-t border-border">
            <Link href="/blog" className={linkRowClass}>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-xl font-medium transition-transform duration-200 group-hover:translate-x-1">
                  Blog
                </span>
                <span className="break-keep text-sm text-muted">
                  개발하며 검증하고 남긴 기록
                </span>
              </span>
              <span
                aria-hidden
                className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
            <a href="mailto:dndud5182@gmail.com" className={linkRowClass}>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-xl font-medium transition-transform duration-200 group-hover:translate-x-1">
                  Email
                </span>
                <span className="break-keep text-sm text-muted">
                  채용·협업 문의
                </span>
              </span>
              <span
                aria-hidden
                className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </a>
          </nav>
        </section>
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
