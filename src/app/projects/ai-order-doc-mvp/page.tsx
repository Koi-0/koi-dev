import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 주문 문서 정형화 SaaS MVP",
  description:
    "이미지·PDF·엑셀 형태의 주문 문서를 AI로 정형화하는 SaaS MVP입니다. 파일 업로드부터 AI 분석 결과 확인, 엑셀 다운로드와 이메일 전달까지 핵심 사용자 흐름을 구현했습니다.",
  alternates: { canonical: "/projects/ai-order-doc-mvp" },
};

const heroSummary =
  "이미지·PDF·엑셀 형태의 주문 문서를 AI로 정형화하는 SaaS MVP입니다. 파일 업로드부터 AI 분석 결과 확인, 엑셀 다운로드와 이메일 전달까지, 핵심 사용자 흐름을 하나의 화면 안에서 이어냈습니다.";

const background = [
  "매일 다른 형식의 주문 문서를 사람이 수기로 옮겨 적는 반복 업무를 줄이기 위해 시작한 SaaS MVP입니다. 문서 형식은 이미지·PDF·엑셀로 제각각이었고, 담당자는 새 파일을 받을 때마다 다시 형식을 파악해야 했습니다.",
  "AI 응답을 그대로 결과물로 쓸 수 없다는 점이 처음부터 명확했기 때문에, AI를 자동화 도구가 아니라 초안 생성자로 두고 사용자가 결과를 표준 포맷으로 확인·전달할 수 있는 흐름을 하나의 제품으로 설계했습니다.",
  "AI 분석 영역을 제외하고, 프론트엔드부터 Next.js Server Actions 기반 서버 연동, Supabase 연동, 분석 결과 데이터 변환, Excel 생성, Resend 이메일 전달까지의 제품 흐름을 담당했습니다.",
];

const problems = [
  "주문서 형식이 제각각이라, 사람이 매번 문서 구조를 다시 학습하지 않고도 같은 방식으로 다룰 수 있어야 했습니다.",
  "Python AI 서버를 브라우저에서 직접 호출하면 서버 주소와 호출 방식이 클라이언트에 노출되고, 화면 코드가 AI 서버 인터페이스에 직접 의존하게 되므로 서버 연동 계층이 필요했습니다.",
  "여러 파일을 한 번에 처리하는 상황에서, 한 파일의 실패가 나머지 작업을 막지 않는 파일 단위 부분 실패 허용 흐름이 필요했습니다.",
  "정형화된 결과를 화면에서 확인하는 데서 끝나면 업무 도구로 이어지지 못했기 때문에, 엑셀 다운로드와 이메일 전달까지 하나의 흐름으로 연결되어야 했습니다.",
];

const roles = [
  {
    title: "제품 정의",
    body: "사용자 시나리오, 화면 흐름, 완료 기준을 정의하고 개발 우선순위를 정리했습니다.",
  },
  {
    title: "프론트엔드 구현",
    body: "파일 업로드 UI, AG Grid로 분석 결과를 셀 단위로 확인하는 화면, 결과 다운로드·발송 화면을 직접 구현했습니다.",
  },
  {
    title: "서버 연동",
    body: "Next.js Server Actions에서 AI 서버 호출과 오류 응답 처리를 담당해, 클라이언트가 AI 서버의 주소와 호출 방식에 직접 의존하지 않도록 구성했습니다.",
  },
  {
    title: "분석 결과 데이터 변환",
    body: "AI 응답의 문서 기본 정보와 품목 목록을 하나의 행 구조로 변환하고, 각 값 객체에서 실제 표시값을 추출해 AG Grid가 단순한 표 데이터를 다루도록 구성했습니다.",
  },
  {
    title: "Supabase 연동",
    body: "브라우저의 Supabase Storage 업로드와 클라이언트 훅의 RPC 호출을 연동해 일일 사용량을 조회하고 화면에 반영했습니다.",
  },
  {
    title: "Excel · 이메일 전달",
    body: "클라이언트 다운로드용 엑셀 생성과 서버 이메일 첨부용 엑셀 버퍼 생성을 각각 구현하고, Resend API로 결과를 발송했습니다.",
  },
  {
    title: "AI 분석 영역 · 연구팀 담당",
    body: "Python AI 서버와 OCR·LLM·프롬프트 기반 분석은 연구팀이 담당했습니다. 저는 연구팀의 분석 결과를 화면에서 확인하고, 엑셀 다운로드와 이메일 전달로 이어지는 제품 흐름을 구현했습니다.",
  },
];

type FlowScope = "external" | "handover" | "direct";

type FlowStep = {
  title: string;
  detail: string;
  scope: FlowScope;
};

const userFlowSteps: FlowStep[] = [
  {
    title: "파일 업로드",
    detail:
      "이미지·PDF·엑셀 파일을 사용자가 업로드하는 화면과 입력 흐름을 담당했습니다.",
    scope: "direct",
  },
  {
    title: "파일 저장",
    detail:
      "원본 파일을 브라우저에서 Supabase Storage로 직접 업로드하고, 저장된 파일의 URL만 이후 단계로 넘겼습니다.",
    scope: "handover",
  },
  {
    title: "AI 서버 호출",
    detail:
      "Next.js Server Actions에서 저장된 파일의 URL과 메타데이터를 받아 Python AI 서버를 호출하고, 에러 매핑과 서버 로깅을 담당했습니다.",
    scope: "direct",
  },
  {
    title: "AI 문서 분석",
    detail:
      "OCR·LLM 기반 추론은 연구팀이 담당했습니다. 저는 응답 스펙과 에러 규약을 함께 조율했습니다.",
    scope: "external",
  },
  {
    title: "분석 결과 변환",
    detail:
      "AI 응답의 문서 기본 정보와 품목 목록으로 구성된 중첩 응답을 클라이언트에서 평탄화하고 래퍼 객체에서 실제 표시값(value)를 추출해 AG Grid가 단순한 행 데이터를 다루도록 구성했습니다.",
    scope: "direct",
  },
  {
    title: "결과 확인",
    detail: "문서별 분석 결과를 셀 단위로 확인할 수 있는 화면을 구현했습니다.",
    scope: "direct",
  },
  {
    title: "Excel 다운로드",
    detail:
      "AI 분석 결과를 표준 포맷의 엑셀 파일로 내려받을 수 있도록 클라이언트에서 다운로드용 엑셀을 생성했습니다.",
    scope: "direct",
  },
  {
    title: "Email 전달",
    detail:
      "서버에서 이메일 첨부용 엑셀 버퍼를 별도로 생성하고 Resend API로 발송한 뒤, 발송 요청의 성공·실패 결과를 화면에 안내했습니다.",
    scope: "handover",
  },
];

const flowScopeMeta: Record<FlowScope, { label: string; className: string }> = {
  external: {
    label: "협업·외부",
    className: "border-dashed border-border",
  },
  handover: {
    label: "관리형 서비스",
    className: "border-border bg-foreground/[0.02]",
  },
  direct: {
    label: "직접 구현",
    className: "border-accent bg-accent/[0.04]",
  },
};

const cases: {
  title: string;
  steps: { label: string; body?: string; items?: string[] }[];
}[] = [
  {
    title: "Supabase Storage 직접 업로드와 Next.js Server Actions 경계",
    steps: [
      {
        label: "문제",
        body: "브라우저에서 Python AI 서버를 직접 호출하면 서버 주소와 호출 방식이 클라이언트에 노출되고, 파일 바이트를 Server Action 인자로 전달하면 서버 함수의 요청 크기가 커질 수 있었습니다.",
      },
      {
        label: "해결",
        body: "파일 업로드는 브라우저에서 Supabase Storage로 직접 수행하고, Next.js Server Actions에는 저장된 파일의 URL과 메타데이터만 전달했습니다. AI 서버 호출은 Server Action에서 담당하고, AI 서버 주소는 서버 전용 환경 변수에만 두었습니다.",
      },
      {
        label: "구현",
        body: "브라우저에서 파일을 Supabase Storage로 직접 업로드하고, Next.js Server Actions에는 저장된 파일의 URL과 메타데이터만 전달했습니다. Server Action에서 Python AI 서버를 호출하고, AI 서버 주소는 서버 전용 환경 변수에 두어 클라이언트 번들에 포함되지 않도록 경계를 나눴습니다.",
      },
      {
        label: "결과",
        body: "클라이언트가 AI 서버의 주소와 호출 방식에 직접 의존하지 않도록 구성했고, 파일 바이트가 Server Action 인자로 전달되지 않도록 업로드 경로를 분리했습니다.",
      },
    ],
  },
  {
    title: "클라이언트 데이터 변환 계층",
    steps: [
      {
        label: "문제",
        body: "AI 응답은 문서 기본 정보와 품목 목록이 중첩된 형태였고, 각 값도 객체로 감싸져 있어 화면에서 바로 사용하기 어려웠습니다. 파일명에는 브라우저·운영체제별 조합형 차이가 섞여 같은 파일이 다른 문자열로 비교되기도 했습니다.",
      },
      {
        label: "해결",
        body: "문서 기본 정보와 품목 목록을 하나의 행 구조로 변환하고, 각 객체에서 화면에 표시할 값만 추출해 AG Grid가 단순한 표 데이터를 다루도록 구성했습니다.",
      },
      {
        label: "구현",
        body: "서버 응답을 받은 뒤 클라이언트 훅에서 중첩된 문서 정보와 품목 목록을 하나의 행 구조로 변환하고, 화면에 표시할 값만 추출했습니다. 이를 통해 화면 컴포넌트가 원본 응답 구조에 직접 의존하지 않도록 했습니다. 운영체제별 조합형 차이를 줄이기 위해 파일명에 NFC 정규화를 적용했습니다.",
      },
      {
        label: "결과",
        body: "AG Grid가 원본 응답 구조에 직접 의존하지 않게 되었고, 화면 코드에서 데이터 접근 경로에 대한 분기를 줄였습니다.",
      },
    ],
  },
  {
    title: "파일 단위 부분 실패",
    steps: [
      {
        label: "문제",
        body: "여러 파일을 함께 처리할 때 한 파일이 실패하면 나머지 작업까지 함께 막히는 흐름은 반복 업무 도구로 쓸 수 없었습니다.",
      },
      {
        label: "해결",
        body: "파일 단위로 성공과 실패를 분리해, 한 파일이 실패해도 성공한 나머지 파일은 결과 화면에 표시되도록 흐름을 나눴습니다.",
      },
      {
        label: "구현",
        body: "여러 파일을 함께 처리할 때 파일 단위로 성공과 실패를 분리해, 한 파일이 실패해도 성공한 나머지 파일은 결과 화면에 표시되도록 했습니다. 실패한 파일은 결과 목록에서 제외하고, 어떤 파일이 실패했는지는 사용자에게 별도로 안내했습니다.",
      },
      {
        label: "결과",
        body: "한 파일의 실패가 전체 작업을 중단시키지 않게 됐고, 사용자는 성공한 파일부터 이어서 다음 단계로 넘어갈 수 있게 됐습니다.",
      },
    ],
  },
  {
    title: "클라이언트·서버 Excel 생성과 Resend 이메일 첨부",
    steps: [
      {
        label: "문제",
        body: "정형화된 결과를 화면에서 확인하는 것으로 끝나면 담당자가 결과를 다른 시스템·거래처로 옮기기 어려웠고, 다운로드 경로와 이메일 경로가 각기 다른 형태의 데이터를 요구했습니다.",
      },
      {
        label: "해결",
        body: "클라이언트에서는 결과 엑셀 다운로드를 생성하고, 서버에서는 이메일 첨부용 엑셀 버퍼를 별도로 생성해 Resend API로 발송했습니다.",
      },
      {
        label: "구현",
        body: "클라이언트에서는 결과 엑셀 다운로드를 생성하고, 서버에서는 이메일 첨부용 엑셀 버퍼를 별도로 생성해 Resend API로 발송했습니다. 발송 요청의 성공·실패 결과만 화면에 안내하고, 실제 수신 상태는 별도로 추적하지 않습니다.",
      },
      {
        label: "결과",
        body: "사용자가 결과 확인 이후 다운로드·이메일 두 경로 중 하나로 마무리할 수 있게 됐고, 클라이언트·서버 각각의 엑셀 생성 책임이 분리됐습니다.",
      },
    ],
  },
];

const techChoices = [
  {
    title: "Next.js App Router",
    body: "화면·서버 로직·라우팅을 한 코드베이스로 다루기 위해 선택했습니다. 별도의 Next.js API Route를 추가하지 않고 Server Action으로 브라우저와 Python AI 서버 사이의 경계를 구성했습니다.",
  },
  {
    title: "Next.js Server Actions",
    body: "브라우저와 Python AI 서버 사이에 서버 연동 계층을 두는 데 별도 프레임워크를 도입하지 않기 위해 선택했습니다. AI 서버 호출과 에러 매핑, 서버 로깅을 한 곳에 모아 클라이언트가 AI 서버의 주소와 호출 방식에 직접 의존하지 않도록 만들었습니다.",
  },
  {
    title: "Supabase",
    body: "Storage와 Postgres를 관리형 서비스 하나로 확보하기 위해 선택했습니다. 파일 보관과 사용량 조회에 필요한 저장소·데이터베이스 구성을 짧은 시간에 갖출 수 있었습니다.",
  },
  {
    title: "TanStack Query",
    body: "서버 상태와 클라이언트 상태를 분리해서 다루기 위해 선택했습니다. 결과 화면에서 자주 조회되는 데이터의 캐싱·재시도·무효화를 일관된 방식으로 관리했습니다.",
  },
  {
    title: "Zustand",
    body: "결과 화면 안에서만 필요한 UI 상태를 서버 상태로 두지 않고 가볍게 담기 위해 선택했습니다. Provider·boilerplate 없이 화면 스코프 안에서만 상태를 유지할 수 있었습니다.",
  },
  {
    title: "AG Grid",
    body: "많은 셀을 사용자가 셀 단위로 확인하는 화면을 짧은 시간에 만들기 위해 선택했습니다. 셀 정렬·필터를 기본 기능으로 활용하고, 컬럼 구성만 응답 데이터에 맞춰 얹었습니다.",
  },
  {
    title: "Resend",
    body: "이메일 전달을 위해 별도 SMTP 서버를 운영하지 않기 위해 선택했습니다. 서버에서 생성한 엑셀 버퍼를 첨부해 발송하고, 발송 요청의 성공·실패 결과만 화면에 안내했습니다.",
  },
];

const improvements = [
  "서버 계층에서 업로드 파일의 확장자·크기·MIME을 다시 검증하는 절차를 추가할 필요가 있습니다.",
  "현재는 클라이언트에서 사용량을 확인해 요청 시작을 차단하는 수준이므로, 서버 측 사용량 제한을 추가할 필요가 있습니다.",
  "결과를 화면에서 셀 단위로 수정할 수 있는 편집 기능을 추가할 필요가 있습니다.",
  "AI 응답의 신뢰도 값(confidence)을 화면에서 구분해 보여주는 기능을 추가할 필요가 있습니다.",
  "이메일 발송 이후 실제 수신 상태(delivered)를 추적하는 기능을 추가할 필요가 있습니다.",
];

const outcome =
  "파일 업로드부터 AI 분석 결과 확인, 엑셀 다운로드와 이메일 전달까지 핵심 사용자 흐름을 구현했습니다. 사용자 QA와 실사용 전환 이전에 회사의 사업 방향이 변경되며 프로젝트가 중단됐습니다.";

const retrospective = [
  {
    title: "AI 모델보다 사용자 흐름이 먼저였습니다",
    body: "AI 응답의 품질만으로는 업무 도구가 되지 못했습니다. 파일을 어디에 두고, 어떤 서버 경계를 통과하고, 실패한 파일을 어떻게 분리하고, 결과를 어떤 형태로 밖으로 내보내는지 — 반복 업무를 지원하려면 AI 결과뿐 아니라 이 전체가 하나의 사용자 흐름으로 연결되어야 한다는 점을 코드로 확인했습니다.",
  },
  {
    title: "서버 경계와 파일 검증은 초기부터 넣었어야 했습니다",
    body: "브라우저와 Python AI 서버 사이의 서버 연동 계층은 초반에 잡아둔 덕분에 이후 흐름이 흔들리지 않았지만, 서버 계층의 파일 검증과 사용량 제한은 개선 과제로 미뤄져 있었습니다. 이번 MVP를 통해 이런 항목은 첫 배포에 함께 들어가야 한다는 우선순위 감각을 얻었습니다.",
  },
  {
    title: "다시 한다면",
    body: "AI 서버 인터페이스와 사용량 조회 규약을 프로젝트 초기 단계에서 문서로 남기고, 서버 계층의 파일 검증·재시도·사용량 제한을 첫 배포에 포함하겠습니다. 기능보다 이 목록이 앞선 우선순위였다는 것이 이번 프로젝트에서 얻은 실무 감각입니다.",
  },
];

const sectionClass = "mt-16 border-t border-border pt-16";
const labelClass = "font-mono text-sm tracking-wide text-accent";
const headingClass =
  "mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl";
const bodyClass = "break-keep text-lg leading-relaxed text-muted";

function UserFlowDiagram() {
  return (
    <figure className="mt-8 border border-border p-5 sm:p-6">
      <figcaption className="break-keep text-sm leading-relaxed text-muted">
        각 단계의 담당 범위를 단순화해 표시했습니다. 연구팀과 관리형 서비스
        영역은 제가 구현한 연동 지점을 중심으로 구분했습니다.
      </figcaption>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
        {(Object.keys(flowScopeMeta) as FlowScope[]).map((scope) => (
          <span key={scope} className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className={`h-3 w-3 border ${flowScopeMeta[scope].className}`}
            />
            {flowScopeMeta[scope].label}
          </span>
        ))}
      </div>

      <ol className="mt-6">
        {userFlowSteps.map((step, index) => {
          const scope = flowScopeMeta[step.scope];

          return (
            <li key={step.title}>
              <div className={`border p-4 ${scope.className}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="break-keep font-medium">{step.title}</p>
                    <p className="mt-1 break-keep text-sm text-muted">
                      {step.detail}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {scope.label}
                  </span>
                </div>
              </div>
              {index < userFlowSteps.length - 1 ? (
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

export default function AiOrderDocMvpPage() {
  return (
    <div className="flex flex-1 flex-col px-6 py-14 sm:px-10">
      <main className="mx-auto w-full max-w-xl flex-1">
        <header>
          <p className={labelClass}>Project</p>
          <h1 className="mt-3 break-keep text-3xl font-semibold tracking-tight sm:text-4xl">
            AI 주문 문서 정형화 SaaS MVP
          </h1>
          <p className="mt-2 font-mono text-sm tracking-wide text-muted">
            2025.11 – 2026.03 · 핵심 흐름 구현 · 사업 방향 전환으로 종료
          </p>
          <p className={`mt-8 ${bodyClass}`}>{heroSummary}</p>
        </header>

        <section className={sectionClass}>
          <p className={labelClass}>01</p>
          <h2 className={headingClass}>프로젝트 배경</h2>
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
          <p className={labelClass}>02</p>
          <h2 className={headingClass}>핵심 문제와 제약</h2>
          <ul className="mt-8 list-disc space-y-3 pl-5">
            {problems.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>03</p>
          <h2 className={headingClass}>맡은 역할</h2>
          {roles.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-10"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              <p className={`mt-3 ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>04</p>
          <h2 className={headingClass}>사용자 흐름</h2>
          <p className={`mt-8 ${bodyClass}`}>
            업로드부터 이메일 전달까지 이어지는 사용자 작업 흐름과, 각 단계에서
            제가 담당한 범위입니다. 이 프로젝트의 가치는 개별 기술이 아니라 이
            흐름 전체를 하나의 제품으로 이어낸 데 있습니다.
          </p>
          <UserFlowDiagram />
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>05</p>
          <h2 className={headingClass}>핵심 구현</h2>
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
          <h2 className={headingClass}>왜 이렇게 설계했는가</h2>
          {techChoices.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-10"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              <p className={`mt-3 ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>07</p>
          <h2 className={headingClass}>이어서 필요한 개선 과제</h2>
          <ul className="mt-8 list-disc space-y-3 pl-5">
            {improvements.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>08</p>
          <h2 className={headingClass}>결과</h2>
          <p className={`mt-8 ${bodyClass}`}>{outcome}</p>
        </section>

        <section className={sectionClass}>
          <p className={labelClass}>09</p>
          <h2 className={headingClass}>회고</h2>
          {retrospective.map((item, index) => (
            <div key={item.title} className={index === 0 ? "mt-8" : "mt-12"}>
              <h3 className="break-keep text-xl font-medium">{item.title}</h3>
              <p className={`mt-4 ${bodyClass}`}>{item.body}</p>
            </div>
          ))}
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
