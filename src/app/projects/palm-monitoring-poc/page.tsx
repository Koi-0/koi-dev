import Link from "next/link";
import type { Metadata } from "next";

const description =
  "트레이딩·구매 담당자가 국가에서 농장까지 탐색하며 위성 지표와 30일 추이를 확인하는 PoC입니다. 제품 정의, 지도 기반 사용자 흐름, BFF 인증 경계, 인계받은 백엔드·인프라의 운영 위험 점검과 국소 수정을 담당했습니다.";

export const metadata: Metadata = {
  title: "대기업 종합상사 대상 팜유 작황 모니터링 PoC",
  description,
  alternates: { canonical: "/projects/palm-monitoring-poc" },
  openGraph: {
    title: "대기업 종합상사 대상 팜유 작황 모니터링 PoC | KOI",
    description,
    url: "https://koi-dev.vercel.app/projects/palm-monitoring-poc",
    type: "article",
  },
};

const linkRowClass =
  "group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent";

const overview: [string, string][] = [
  ["기간", "2026.05 – 2026.07"],
  ["산출물", "지도 기반 팜유 작황 모니터링 대시보드 (PoC MVP)"],
  ["대상 사용자", "대기업 종합상사 트레이딩·구매 부서"],
  [
    "담당 역할",
    "Product Definition · Web Application · BFF · Backend/Infra Audit · Operations",
  ],
  [
    "협업 구조",
    "소규모 팀 · 회사와 제품 방향·우선순위 협의 · AI 연구팀과 모델 입출력·데이터 인터페이스 조율 · 이전 담당자가 구축한 Backend·Infrastructure 인계",
  ],
  [
    "직접 구현",
    "Next.js App Router · React · TypeScript · MapLibre GL · TanStack Query · Zustand · Tailwind CSS · Vercel",
  ],
  ["인계·운영", "Spring Boot · PostgreSQL/PostGIS · AWS · OCI"],
];

const background = [
  "프론트엔드 담당으로 시작했지만, PoC를 성사시키기 위한 GTM PM 제안을 받아 제품 정의와 우선순위 결정을 병행했고, 프로젝트 중반에는 전임 개발자의 백엔드·인프라를 인수했습니다.",
  "이전부터 풀스택 확장을 준비하고 있었기에, 제품 정의부터 화면·시스템 경계·운영까지 하나의 흐름으로 책임지는 역할을 맡았습니다.",
];

const constraints = [
  "제품 비전이 팀의 공통 기준으로 문서화되어 있지 않아 사용자, 핵심 지표와 MVP 완료 기준을 먼저 정리해야 했습니다.",
  "초기 화면은 농장 중심이었지만 준비된 데이터는 국가·권역 단위였습니다. 탐색 구조와 데이터 인터페이스를 함께 다시 설계해야 했습니다.",
  "프로젝트 중반에 이전 담당자가 구축한 백엔드·인프라를 인계받았지만, 운영 절차와 실제 시스템 상태가 한곳에 정리되어 있지 않아 코드·설정·라이브 환경을 다시 확인해야 했습니다.",
  "보호된 백엔드 API를 호출하되, 인증 시크릿과 외부 토큰이 브라우저에 노출되면 안 됐습니다.",
  "고객사 경영진 대상 시연 일정이 확정된 뒤 약 8일 안에 실제 위성 영상 적용, 더미 데이터 제거, FE·BE 연동과 QA를 완료해야 했습니다.",
];

const responsibilities = [
  {
    title: "직접 담당",
    body: "GTM PM 역할과 제품 우선순위 조율, 사용자·핵심 지표·MVP 범위 정의, 제품 정의서·사용자 흐름·마일스톤 작성, UI/UX와 MapLibre GL 기반 프론트엔드 구현, BFF 인증 경계와 실제 API 연동, 인계받은 백엔드·인프라 감사·국소 수정·배포·운영",
  },
  {
    title: "협업 영역",
    body: "회사와 제품 방향·우선순위 협의, AI 연구팀과 모델 입출력·데이터 인터페이스 조율, 이전 담당자와 Backend·Infrastructure 인계",
  },
  {
    title: "인계 시 존재하던 시스템",
    body: "Spring Boot 애플리케이션 골격, 위성 데이터 처리 워커, 초기 알림·관리·모니터링 구조",
  },
];

const cases: {
  title: string;
  steps: { label: string; body?: string; items?: string[] }[];
}[] = [
  {
    title: "BFF 인증 경계 — 외부 토큰을 브라우저 밖에 둔 이유",
    steps: [
      {
        label: "문제",
        body: "보호된 백엔드 API를 호출하려면 인증 정보가 필요했지만, 브라우저에서는 클라이언트 시크릿을 안전하게 보관할 수 없고 외부 토큰이 사용자 환경에 남아서도 안 됐습니다.",
      },
      {
        label: "확인",
        body: "브라우저에서 직접 호출하면 인증에 쓰이는 비밀 값이 코드 번들에 포함되고, 토큰을 브라우저에 보관하면 탈취 위험이 생긴다는 것을 확인했습니다.",
      },
      {
        label: "판단",
        body: "브라우저가 외부 인증 서버와 직접 통신하지 않도록, Next.js 서버가 인증과 API 호출을 대신하는 BFF 경계를 두었습니다. 브라우저는 동일 출처의 서비스 API만 호출하도록 역할을 분리했습니다.",
      },
      {
        label: "구현",
        body: "토큰 발급과 캐싱을 서버에서 처리하고, 인증 실패 시 토큰을 갱신해 한 차례 재시도하도록 구성했습니다. 환경 변수와 인증 응답은 클라이언트 컴포넌트로 전달하지 않았습니다.",
      },
      {
        label: "결과",
        body: "실제 백엔드 데이터를 연결한 뒤 배포된 브라우저 번들을 점검해 인증 시크릿과 외부 토큰이 포함되지 않은 것을 확인했습니다.",
      },
    ],
  },
  {
    title: "인계 백엔드 감사 — 문서 없는 시스템을 방어 가능한 상태로",
    steps: [
      {
        label: "문제",
        body: "프로젝트 중반에 Spring 백엔드와 인프라를 인계받았지만, 운영 절차와 접근 권한, 배포·백업 구조가 한곳에 정리돼 있지 않았고 문서와 실제 코드·운영 환경 사이에도 차이가 있었습니다.",
      },
      {
        label: "확인",
        items: [
          "코드·설정·배포 환경·작업 큐·저장소를 교차 확인해 실제 데이터 흐름과 시스템 의존성을 다시 정리했습니다.",
          "접근 권한, 자격증명, 백업, 이전 클라우드 설정처럼 외부 시연과 운영 전환에 영향을 주는 항목을 위험도 기준으로 분류했습니다.",
        ],
      },
      {
        label: "판단",
        body: "전면 재구축보다 ‘감사 → 문서화 → 위험 우선순위화 → 필요한 곳만 수정’ 순서로 접근했습니다. 기존 설계의 당시 맥락을 존중하되, 외부 시연과 운영 단계에 필요한 접근 권한, 자격증명, 백업과 배포 기준을 높였습니다.",
      },
      {
        label: "구현",
        items: [
          "시스템 구성, 데이터 흐름, 운영 위험과 담당 경계를 문서화",
          "기존 접근 권한과 배포 자격증명을 정리하고 관리자 범위로 재설정",
          "데이터베이스 자동 백업과 복원 확인 절차 구성",
          "이전 클라우드 환경에 남아 있던 설정을 정리하고 신규 환경 배포 검증",
          "우선순위가 높은 API·상태 처리·테스트 설정 문제를 국소 수정",
        ],
      },
      {
        label: "결과",
        body: "신규 환경에서 위성 데이터 처리부터 API·화면까지 핵심 흐름을 재실행하고, 실패 작업의 데이터를 대조해 운영 전환에 필요한 근거를 확보했습니다. 전체 재작성 없이 시연과 운영에 필요한 위험을 줄이고, 이후 담당자가 확인할 수 있는 문서와 운영 기준을 남겼습니다.",
      },
    ],
  },
];

type ArchitectureScope = "external" | "handover" | "direct";

type ArchitectureNode = {
  title: string;
  detail: string;
  scope: ArchitectureScope;
};

const architectureNodes: ArchitectureNode[] = [
  {
    title: "위성 데이터 공급원",
    detail: "원본 위성 영상",
    scope: "external",
  },
  {
    title: "Tile Worker",
    detail: "Raster 생성",
    scope: "handover",
  },
  {
    title: "Raster 로컬 저장소",
    detail: "워크스테이션 볼륨",
    scope: "handover",
  },
  {
    title: "Farm Worker",
    detail: "농장 단위 처리",
    scope: "handover",
  },
  {
    title: "Thumbnail Object Storage",
    detail: "위성 썸네일",
    scope: "handover",
  },
  {
    title: "Spring API",
    detail: "데이터·이미지 조회",
    scope: "handover",
  },
  {
    title: "Next.js BFF",
    detail: "인증·API 경계",
    scope: "direct",
  },
  {
    title: "사용자 대시보드",
    detail: "지도·농장 상세·30일 추이",
    scope: "direct",
  },
];

const architectureScope: Record<
  ArchitectureScope,
  { label: string; className: string }
> = {
  external: {
    label: "협업·외부",
    className: "border-dashed border-border",
  },
  handover: {
    label: "인계·운영",
    className: "border-border bg-foreground/[0.02]",
  },
  direct: {
    label: "직접 구현·수정",
    className: "border-accent bg-accent/[0.04]",
  },
};

const structureBody =
  "매일 반복해서 확인하는 업무 도구라는 전제로, 장시간 보아도 주요 상태와 변화에 집중할 수 있는 다크 톤을 사용했습니다. 지도 마커, 상세 상태, 배지와 알림에는 같은 상태 팔레트를 적용해 어느 화면에서도 색이 동일한 의미로 읽히도록 했습니다. 데이터가 없거나 판단할 수 없는 상태는 정상으로 채우지 않고 별도로 구분했습니다. 30일 시계열은 지표별 선 색을 고정하고 보조 정보의 대비를 낮춰, 수치보다 변화 추이에 시선이 먼저 가도록 구성했습니다.";

const outcomes = [
  {
    result:
      "국가에서 농장까지 탐색하고 NDVI·NDMI·TCI 및 30일 시계열을 실제 API로 조회하는 흐름을 완성했습니다.",
    verification:
      "배포 환경에서 사용자 흐름을 반복 실행하고 네트워크 응답과 화면 표시를 함께 확인했습니다.",
  },
  {
    result: "외부 인증 정보를 브라우저 밖에 둔 BFF 경계를 구현했습니다.",
    verification:
      "배포된 브라우저 번들을 점검해 인증 비밀 값이 포함되지 않은 것을 확인했습니다.",
  },
  {
    result:
      "고객 시연 범위의 UI와 데이터 흐름을 안정화하고 경영진 시연을 완료했습니다.",
    verification:
      "브라우저 자동화로 핵심 흐름을 반복 실행한 뒤 결과 화면, 콘솔과 접근 제어를 직접 검토했습니다. 확인할 데이터가 없는 항목은 통과가 아닌 확인 불가로 구분했습니다.",
  },
  {
    result:
      "인계 시스템의 운영 위험을 정리하고 우선순위가 높은 항목을 국소 수정했습니다.",
    verification:
      "코드·설정·라이브 환경을 교차 확인하고 신규 환경에서 핵심 처리 흐름을 다시 실행했습니다.",
  },
];

const retrospective = [
  {
    title: "같은 문제를 보게 만드는 일이 구현보다 먼저였습니다",
    body: "소규모 팀에서는 역할의 수보다 각자가 같은 문제와 우선순위를 보고 있는지가 더 중요했습니다. 한 사람은 A를 해결하려 하고 다른 사람은 B를 보고 있으면 구현 속도가 빨라도 결정을 내리기 어렵습니다. 사용자, 핵심 지표, MVP 범위와 완료 기준을 문서로 정리하는 일이 제품 개발의 출발점이라는 것을 배웠습니다.",
  },
  {
    title: "인계받은 시스템은 당시의 맥락부터 이해해야 했습니다",
    body: "초기 단계에서 속도를 우선해 선택한 구조를 곧바로 잘못이라고 평가하기보다, 당시의 목표와 제약을 먼저 이해해야 했습니다. 제품이 외부 시연과 운영 단계로 넘어가면서 접근 권한, 자격증명, 백업과 배포 기준을 높이는 것이 인수자의 역할이라고 판단했습니다.",
  },
  {
    title: "다시 한다면",
    body: "인계 첫날 시스템 구성도, 접근 권한 목록, 배포·복구 체크리스트를 하나의 문서로 만들고 실제 복원 테스트부터 진행하겠습니다. 기능과 코드를 파악하는 것만큼 누가 접근할 수 있고, 장애가 났을 때 어디에서 복구할지를 먼저 확인하겠습니다.",
  },
];
const sectionClass = "mt-16 border-t border-border pt-16";
const labelClass = "font-mono text-sm tracking-wide text-accent";
const headingClass =
  "mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl";
const bodyClass = "break-keep text-lg leading-relaxed text-muted";

function ArchitectureDiagram() {
  return (
    <figure className="mt-8 border border-border p-5 sm:p-6">
      <figcaption className="break-keep text-sm leading-relaxed text-muted">
        공개 가능한 데이터 흐름과 책임 범위만 단순화해 표현했습니다.
      </figcaption>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
        {(Object.keys(architectureScope) as ArchitectureScope[]).map(
          (scope) => (
            <span key={scope} className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className={`h-3 w-3 border ${architectureScope[scope].className}`}
              />
              {architectureScope[scope].label}
            </span>
          ),
        )}
      </div>

      <ol className="mt-6">
        {architectureNodes.map((node, index) => {
          const scope = architectureScope[node.scope];

          return (
            <li key={node.title}>
              <div className={`border p-4 ${scope.className}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="break-keep font-medium">{node.title}</p>
                    <p className="mt-1 break-keep text-sm text-muted">
                      {node.detail}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {scope.label}
                  </span>
                </div>
              </div>
              {index < architectureNodes.length - 1 ? (
                <div
                  aria-hidden
                  className="py-2 text-center font-mono text-sm text-muted"
                >
                  ↓
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

export default function PalmMonitoringPocPage() {
  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <header>
          <p className={labelClass}>Project</p>
          <h1 className="mt-3 break-keep text-3xl font-semibold tracking-tight sm:text-4xl">
            대기업 종합상사 대상 팜유 작황 모니터링 PoC
          </h1>
          <p className="mt-2 font-mono text-sm tracking-wide text-muted">
            2026.05 – 2026.07
          </p>
          <p className={`mt-8 ${bodyClass}`}>
            대기업 종합상사가 팜유 산지의 작황 변화를 위성 지표로 조기에
            파악하고, 이를 조달 판단에 활용할 수 있는지 검증한 PoC입니다.
          </p>
        </header>

        <section className={sectionClass}>
          <p className={labelClass}>01</p>
          <h2 className={headingClass}>개요</h2>
          <dl className="mt-8">
            {overview.map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:gap-6"
              >
                <dt className="font-mono text-sm tracking-wide text-muted sm:w-24 sm:shrink-0">
                  {label}
                </dt>
                <dd className="break-keep leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>02</p>
          <h2 className={headingClass}>배경</h2>
          {background.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 ? "mt-8" : "mt-4"} ${bodyClass}`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>03</p>
          <h2 className={headingClass}>문제와 제약</h2>
          <ul className="mt-8 list-disc space-y-3 pl-5">
            {constraints.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>04</p>
          <h2 className={headingClass}>책임 범위</h2>
          {responsibilities.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-12"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              <p className={`mt-4 ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>05</p>
          <h2 className={headingClass}>핵심 문제 해결</h2>
          {cases.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-12"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              {item.steps.map((step) => (
                <div key={step.label} className="mt-6">
                  <p className={labelClass}>{step.label}</p>
                  {step.body ? (
                    <p className={`mt-2 ${bodyClass}`}>{step.body}</p>
                  ) : null}
                  {step.items ? (
                    <ul className="mt-2 list-disc space-y-3 pl-5">
                      {step.items.map((bullet) => (
                        <li key={bullet} className={bodyClass}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>06</p>
          <h2 className={headingClass}>구조</h2>
          <ArchitectureDiagram />
          <p className={`mt-8 ${bodyClass}`}>{structureBody}</p>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>07</p>
          <h2 className={headingClass}>결과와 검증 방법</h2>
          <dl className="mt-8 border-t border-border">
            {outcomes.map((item) => (
              <div
                key={item.result}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[1fr_1fr] sm:gap-8"
              >
                <div>
                  <dt className={labelClass}>결과</dt>
                  <dd className={`mt-2 ${bodyClass}`}>{item.result}</dd>
                </div>
                <div>
                  <dt className={labelClass}>검증</dt>
                  <dd className={`mt-2 ${bodyClass}`}>{item.verification}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>08</p>
          <h2 className={headingClass}>회고</h2>
          {retrospective.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-12"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              <p className={`mt-4 ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>09</p>
          <h2 className={headingClass}>관련 블로그</h2>
          <nav aria-label="관련 블로그" className="mt-8 border-t border-border">
            <Link href="/blog/2" className={linkRowClass}>
              <span className="break-keep text-xl font-medium transition-transform duration-200 group-hover:translate-x-1">
                문서는 참고자료일 뿐 — 혼자 백엔드와 인프라를 인수하며 세운 원칙
              </span>
              <span
                aria-hidden
                className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
          </nav>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-xl pt-12">
        <Link
          href="/projects"
          className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          ← Projects
        </Link>
      </footer>
    </div>
  );
}
