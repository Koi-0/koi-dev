import Link from "next/link";
import type { Metadata } from "next";

const description =
  "제품 문제를 실제 동작하는 서비스로 연결하는 Product Engineer 전우영입니다. 역할이 확장된 과정과 문제를 푸는 세 가지 방식을 소개합니다.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | KOI",
    description,
    url: "https://koi-dev.vercel.app/about",
    type: "profile",
  },
};

const linkRowClass =
  "group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent";

const inlineLinkClass =
  "underline underline-offset-4 transition-colors hover:text-accent";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <header>
          <p className="font-mono text-sm tracking-wide text-accent">About</p>
          <h1 className="mt-3 break-keep text-3xl font-semibold tracking-tight sm:text-4xl">
            제품 문제를 실제 동작하는 서비스로 연결합니다.
          </h1>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            React·Next.js·TypeScript를 주력 기술로 사용하며, 모호한 요구사항을
            사용자 흐름과 시스템 경계로 구체화하고 구현·배포·운영까지 연결하는{" "}
            <span className="whitespace-nowrap">Product Engineer</span>,
            전우영입니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            기능 단위의 구현에 그치지 않고, 제품이 실제로 사용되고 운영되기까지
            비어 있는 문제를 찾아 끝까지 해결하는 데 강점이 있습니다.
          </p>
        </header>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">01</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            프론트엔드에서 제품 전체 흐름으로
          </h2>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            웹디자인·웹퍼블리싱과 실무형 프론트엔드 교육을 거쳐 개발 경력을
            시작했습니다.
          </p>

          <div className="mt-12">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <p className="break-keep font-medium text-foreground">스텝하우</p>
              <p className="break-keep font-mono text-sm tracking-wide text-muted">
                Frontend Developer Intern
              </p>
            </div>
            <p className="mt-1 break-keep font-mono text-sm tracking-wide text-muted">
              2025.06–07
            </p>
            <p className="mt-3 break-keep text-lg leading-relaxed text-muted">
              기존 서비스의 구독 요금제, 회원가입 튜토리얼, 플레이북 매뉴얼 등
              주요 사용자 흐름을 구현하고 빌드·내비게이션·다국어 문제를
              개선했습니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              Lighthouse와 Chrome DevTools로 웹폰트 구조를 진단해 파일 용량을 약
              2.7MB에서 766KB로 줄였습니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              PR 기반 상호 리뷰를 통해 구현 의도를 설명하고 피드백을 반영하는
              협업 방식도 익혔습니다.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <p className="break-keep font-medium text-foreground">바르카</p>
              <p className="break-keep font-mono text-sm tracking-wide text-muted">
                Product Engineer
              </p>
            </div>
            <p className="mt-1 break-keep font-mono text-sm tracking-wide text-muted">
              2025.09–현재 · 2026.01 정규직 전환
            </p>
            <p className="mt-3 break-keep text-lg leading-relaxed text-muted">
              제품 담당자가 별도로 없는 소규모 AI 스타트업에 합류해, 사용자·핵심
              지표·MVP 범위를 정리하고 AI 연구팀과 모델 입출력·데이터
              인터페이스를 조율했습니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              프로젝트에 따라 웹 애플리케이션 구현뿐 아니라 데이터·API 연동,
              인증·권한, BFF, 배포와 운영까지 담당 범위를 넓혔습니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              이 과정에서 화면·데이터·API·운영은 따로 떨어진 작업이 아니라
              하나의 제품 흐름이라는 관점을 갖게 되었고, 지금의 Product Engineer
              역할이 형성됐습니다.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">02</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            문제를 푸는 세 가지 방식
          </h2>

          <div className="mt-8">
            <h3 className="break-keep text-xl font-medium">
              모호한 요구를 구현 가능한 범위로 바꿉니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              요구사항이 모호할수록 바로 구현하기보다 사용자, 핵심 지표, 데이터
              범위와 완료 기준을 먼저 정리합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              <Link
                href="/projects/palm-monitoring-poc"
                className={inlineLinkClass}
              >
                대기업 종합상사 대상 팜유 위성 모니터링 PoC
              </Link>
              {
                "에서는 트레이딩·구매 담당자를 사용자로 두고, 회사의 제품 비전을 사용자·핵심 지표·화면 구성·데이터 범위·MVP 기준으로 나눠 제품 정의서와 개발 마일스톤으로 구체화했습니다."
              }
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              이어서 목업 데이터를 화면에서 제거하고, 실제 위성 지표를 조회하는
              흐름으로 바꿔 시연할 수 있는 상태까지 구현했습니다.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="break-keep text-xl font-medium">
              화면과 함께 데이터 접근 경계를 설계합니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              화면에서 보이지 않게 처리하는 것만으로는 권한을 보호할 수
              없습니다. 누가 어떤 데이터에 접근할 수 있고, 무엇이 브라우저로
              전달되어도 되는지를 화면 설계와 함께 정합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              <Link href="/projects" className={inlineLinkClass}>
                수확량 예측 B2B SaaS
              </Link>
              {
                "에서는 조직 기반 RLS로 고객사별 데이터를 데이터베이스 정책에서 격리하고, 서버 전용 관리자 권한이 브라우저에 노출되지 않도록 구성했습니다."
              }
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              mock과 실데이터가 같은 인터페이스를 사용하도록 데이터 접근 계층을
              분리해, 실데이터 준비가 늦어져도 프론트엔드 개발과 고객 데모
              일정이 멈추지 않도록 했습니다.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="break-keep text-xl font-medium">
              일부 실패가 전체 흐름을 멈추지 않게 만듭니다
            </h3>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              정상적으로 동작하는 경우뿐 아니라 일부 작업이 실패했을 때 사용자가
              어디까지 계속 진행할 수 있는지도 함께 설계합니다.
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              <Link href="/projects" className={inlineLinkClass}>
                AI 주문 문서 정형화 SaaS MVP
              </Link>
              {
                "에서는 파일별 진행률과 실패 상태를 분리해 한 파일의 오류가 전체 작업을 중단하지 않도록 했습니다."
              }
            </p>
            <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
              일부 파일이 실패해도 성공한 파일의 결과는 유지되도록 구성했습니다.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-16">
          <p className="font-mono text-sm tracking-wide text-accent">03</p>
          <h2 className="mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            함께 하나의 제품을 오래 개선하는 팀
          </h2>
          <p className="mt-8 break-keep text-lg leading-relaxed text-muted">
            앞으로는 제품·디자인·엔지니어링 동료와 문제를 함께 정의하고, 하나의
            제품을 오래 개선하는 환경에서 일하고 싶습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            코드 리뷰와 사용자 피드백, 운영 데이터를 바탕으로 가설을 검증하고
            다음 이터레이션으로 연결하는 팀을 찾고 있습니다.
          </p>
          <p className="mt-4 break-keep text-lg leading-relaxed text-muted">
            프론트엔드 전문성을 중심에 두되 API·인증·권한·데이터 모델·운영
            환경까지 이해하며, 제품을 End-to-End로 책임지는 역량을 더 깊게
            키워가고자 합니다.
          </p>

          <nav aria-label="주요 링크" className="mt-12 border-t border-border">
            <Link href="/projects" className={linkRowClass}>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-xl font-medium transition-colors duration-200 group-hover:text-accent">
                  Projects
                </span>
                <span className="break-keep text-sm text-muted">
                  제품별 문제와 판단, 구현 결과
                </span>
              </span>
              <span
                aria-hidden
                className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
            <Link href="/blog" className={linkRowClass}>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-xl font-medium transition-colors duration-200 group-hover:text-accent">
                  Blog
                </span>
                <span className="break-keep text-sm text-muted">
                  기술적 선택과 검증 과정을 정리한 기록
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
                <span className="text-xl font-medium transition-colors duration-200 group-hover:text-accent">
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
