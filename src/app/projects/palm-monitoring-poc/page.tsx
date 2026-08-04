import Link from "next/link";
import type { Metadata } from "next";

const description =
  "대기업 종합상사의 트레이딩·구매 담당자가 팜유 산지의 작황 변화를 위성 지표로 먼저 확인할 수 있는지를 검증하기 위한 PoC입니다. 제품 정의, 지도 탐색 구조, 서버 인증 경계, 인계받은 백엔드·인프라 점검을 담당했습니다.";

export const metadata: Metadata = {
  title: "대기업 종합상사 대상 팜유 위성 모니터링 PoC",
  description,
  alternates: { canonical: "/projects/palm-monitoring-poc" },
  openGraph: {
    title: "대기업 종합상사 대상 팜유 위성 모니터링 PoC | KOI",
    description,
    url: "https://koi-dev.vercel.app/projects/palm-monitoring-poc",
    type: "article",
  },
};

const heroSummary =
  "대기업 종합상사의 트레이딩·구매 담당자가 팜유 산지의 작황 변화를 위성 지표로 먼저 확인할 수 있는지를 검증하기 위한 PoC입니다. 제품 정의부터 지도 탐색 구조, 서버 인증 경계, 인계받은 백엔드·인프라 점검까지 담당했습니다.";

const background = [
  "종합상사의 트레이딩·구매 담당자가 매일 판단하는 것은 시장 포지션을 유지할지 조정할지입니다. 판단 근거는 대체로 시장 가격과 공식 통계이고, 두 지표는 산지의 작황 변화가 이미 반영된 뒤에 움직입니다.",
  "그래서 위성 지표로 산지 상태를 먼저 관찰할 수 있는지를 확인하기 위한 PoC로 시작했습니다. 다만 프로젝트 초기에는 제품 비전이 팀의 공통 기준으로 정리돼 있지 않아, 사용자와 핵심 지표, MVP 완료 기준을 문서로 확정하는 일부터 진행했습니다.",
  "프론트엔드 구현으로 시작했지만 제품 정의와 우선순위 정리, 외부 요구 조율을 함께 담당했고, 프로젝트 후반에는 이전 담당자가 구축한 백엔드·인프라를 인계받아 점검과 정비를 이어받았습니다.",
];

const problems = [
  "제품 비전이 팀의 공통 기준으로 문서화돼 있지 않아, 사용자와 핵심 지표, MVP 완료 기준을 먼저 확정해야 했습니다.",
  "초기 기획의 중심은 권역 단위 수확량 예측이었지만, 화면에 연결할 수 있는 실데이터는 농장 단위 위성 지표였습니다. 예측 결과는 어느 단위까지 대외에 말할 수 있는지가 정해지기 전이었습니다.",
  "보호된 백엔드 API를 호출해야 했지만, 인증 자격증명과 발급받은 토큰이 브라우저에 남아서는 안 됐습니다.",
  "프로젝트 후반에 인계받은 백엔드·인프라는 운영 절차와 실제 상태가 한곳에 정리돼 있지 않아, 코드·설정·라이브 환경을 다시 대조해야 했습니다.",
];

const roles = [
  {
    title: "제품 정의",
    body: "사용자와 핵심 지표, 모듈 범위, MVP 완료 기준을 문서로 확정하고, 마일스톤으로 구현 순서를 정했습니다.",
  },
  {
    title: "프론트엔드 구현",
    body: "지도 중심 탐색 구조와 농장 상세 화면, 상태 표기와 범례를 구현했습니다.",
  },
  {
    title: "서버 연동 경계",
    body: "브라우저가 동일 출처 경로만 호출하도록 서버 측 인증·프록시 계층을 구현했습니다. 시연 구간의 접근 제한도 같은 계층에 두어 화면과 조회 경로를 한 관문에서 다뤘습니다.",
  },
  {
    title: "데이터 표기 기준",
    body: "실데이터와 아직 검증되지 않은 범위를 화면에서 구분하는 규칙을 정하고 적용했습니다.",
  },
  {
    title: "인계받은 시스템 점검·정비",
    body: "인계받은 백엔드·인프라의 구성과 운영 위험을 문서화하고, 우선순위가 높은 항목을 수정했습니다. 신규 구축이 아니라 인계 이후의 점검과 정비입니다.",
  },
  {
    title: "협업 및 외부 요구 조율",
    body: "회사와 제품 방향·우선순위를 협의하고, AI 연구 담당자와 모델 산출물의 데이터 인터페이스를 조율했습니다. 예측 모델과 위성 영상 처리 구현은 각 담당 영역입니다.",
  },
];

type FlowScope = "external" | "handover" | "direct";

type FlowStep = {
  title: string;
  detail: string;
  scope: FlowScope;
};

const flowSteps: FlowStep[] = [
  {
    title: "위성 데이터 공급원",
    detail: "외부 기관이 공개하는 위성 영상을 원본 데이터로 사용했습니다.",
    scope: "external",
  },
  {
    title: "위성 영상 처리",
    detail:
      "영상에서 식생·수분 지표를 산출하고 농장 단위로 집계하는 처리입니다. 이전 담당자가 구축한 흐름을 인계받아 점검하고 정비했습니다.",
    scope: "handover",
  },
  {
    title: "지표·썸네일 저장소",
    detail:
      "산출 결과와 날짜별 위성 썸네일을 보관합니다. 썸네일은 관리형 오브젝트 스토리지가 발급한 서명된 임시 URL로 브라우저에 직접 전달됩니다.",
    scope: "handover",
  },
  {
    title: "백엔드 API",
    detail:
      "농장 목록과 지표, 시계열, 알림 이력을 조회하는 Spring 기반 API입니다. 인계 이후 구조와 운영 위험을 점검하고 필요한 곳을 수정했습니다.",
    scope: "handover",
  },
  {
    title: "서버 인증·프록시 경계",
    detail:
      "자격증명으로 토큰을 발급·캐싱해 요청에 부착하고, 브라우저에는 동일 출처 경로만 노출했습니다.",
    scope: "direct",
  },
  {
    title: "지도 탐색과 농장 상세",
    detail:
      "국가에서 농장까지 선택 범위를 좁혀 가며 식생·수분 지표와 30일 추이, 날짜별 위성 썸네일, 알림 이력을 확인하는 화면입니다.",
    scope: "direct",
  },
];

const flowScopeMeta: Record<FlowScope, { label: string; className: string }> = {
  external: {
    label: "협업·외부",
    className: "border-dashed border-border",
  },
  handover: {
    label: "인계·운영",
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
    title: "국가에서 농장까지 좁혀 들어가는 지도 탐색",
    steps: [
      {
        label: "문제",
        body: "관찰 대상은 두 나라의 팜유 산지 전체였지만, 담당자가 실제로 판단하는 단위는 개별 농장이었습니다. 한 화면에 전체를 늘어놓으면 어느 농장을 봐야 하는지 알 수 없었습니다.",
      },
      {
        label: "해결",
        body: "지도를 단일 진입점으로 두고, 동남아 전체에서 국가와 권역을 거쳐 농장까지 선택 범위를 단계적으로 좁히는 구조를 택했습니다.",
      },
      {
        label: "구현",
        body: "선택 축 네 개를 하나의 화면 상태로 관리하고, 지도 레이어와 좌측 목록, 상세 패널이 같은 선택 값을 읽도록 구성했습니다. 농장 상세는 식생·수분 지표와 30일 추이, 날짜별 위성 썸네일, 알림 이력을 실제 API로 조회하도록 연결했습니다.",
      },
      {
        label: "결과",
        body: "지도에서 농장을 선택하는 동작 하나로 목록과 상세, 추이가 같은 대상을 가리키게 됐고, 농장 상세의 값이 목업이 아닌 실제 응답으로 표시됐습니다.",
      },
    ],
  },
  {
    title: "브라우저 밖에 둔 백엔드 인증 경계",
    steps: [
      {
        label: "문제",
        body: "보호된 백엔드 API를 호출하려면 자격증명이 필요했지만, 브라우저에서는 비밀 값을 보관할 수 없고 발급받은 토큰이 사용자 환경에 남아서도 안 됐습니다.",
      },
      {
        label: "해결",
        body: "브라우저가 외부 인증 서버와 직접 통신하지 않도록, 화면 프레임워크의 서버 측이 인증과 API 호출을 대신하는 경계를 두었습니다. 브라우저는 동일 출처 경로만 호출하도록 역할을 나눴습니다.",
      },
      {
        label: "구현",
        items: [
          "서버에서 토큰을 발급·캐싱하고 만료 직전에 미리 재발급했으며, 동시에 들어온 요청이 같은 발급 작업을 공유하도록 했습니다.",
          "백엔드가 토큰을 거부하면 캐시를 비우고 한 차례만 재시도했고, 발급 실패와 연결 실패는 하나의 오류 응답으로 통일했습니다.",
          "자격증명은 서버 전용 설정에만 두고 화면 코드로 전달하지 않았습니다.",
        ],
      },
      {
        label: "결과",
        body: "브라우저가 호출하는 경로가 동일 출처로 정리돼 백엔드의 접근 허용 설정을 바꾸지 않고 연동을 마쳤고, 토큰 만료로 화면이 멈추는 경로를 서버 안에서 처리하게 됐습니다.",
      },
    ],
  },
  {
    title: "검증된 데이터와 미검증 데이터의 구분",
    steps: [
      {
        label: "문제",
        body: "화면에는 실제 위성 지표와 아직 검증되지 않은 예측·시장 데이터가 섞여 있었고, 목업 값이 실데이터와 같은 형식으로 표시되고 있었습니다.",
      },
      {
        label: "해결",
        body: "목업을 화면에서 전부 제거하고, 남기는 데이터는 실데이터와 연구가 진행 중인 범위를 표기로 구분하는 기준을 세웠습니다. 값이 없는 상태를 정상값으로 채우지 않는다는 규칙을 함께 정했습니다.",
      },
      {
        label: "구현",
        items: [
          "목업 기반 패널과 목록을 제거하고, 실제 농장 목록과 실데이터가 확보된 국가의 리스크 지표만 남겼습니다.",
          "아직 연구 단계인 국가는 별도 표기로 구분해 확정된 결과처럼 읽히지 않도록 했습니다.",
          "관측 품질이 낮은 시계열 지점은 추세선에서 제외하고 회색으로 표시했고, 식재 연도처럼 값이 비어 있는 항목은 0이 아니라 표시 없음으로 처리했습니다.",
        ],
      },
      {
        label: "결과",
        body: "화면에 남은 데이터가 실데이터와 연구 진행 중인 범위로 구분됐고, 관측이 부족한 구간이 정상 관측과 같은 선으로 이어지지 않게 됐습니다.",
      },
    ],
  },
  {
    title: "인계받은 백엔드·인프라 점검과 우선순위 수정",
    steps: [
      {
        label: "문제",
        body: "인계 전에 백엔드 진척도를 분석하면서 보고 내용과 실제 구현이 어긋나는 지점을 확인했고, 인계 후에는 운영 절차와 접근 권한, 배포·백업 구조가 한곳에 정리돼 있지 않았습니다.",
      },
      {
        label: "해결",
        body: "전면 재구축이 아니라 점검, 문서화, 위험 우선순위화, 필요한 곳만 수정하는 순서를 택했습니다. 기존 설계의 당시 맥락은 유지하고, 외부 시연과 운영 단계에 필요한 기준만 올렸습니다.",
      },
      {
        label: "구현",
        items: [
          "코드와 설정, 배포 환경, 작업 큐, 저장소를 교차 대조해 실제 데이터 흐름과 시스템 의존을 다시 정리했습니다.",
          "접근 권한과 자격증명을 재발급하고 이전 담당자의 접근 경로를 정리했으며, 배포 설정에 남아 있던 이전 환경 값을 찾아 맞췄습니다.",
          "데이터베이스 자동 백업과 보존 기간, 저장 경로 변경을 문서로 남기고 기존 데이터를 옮겼습니다.",
          "사용자 흐름과 운영에 영향을 주던 오류 응답과 공개 설정 노출을 우선 수정하고 재발 확인용 테스트를 추가했습니다.",
        ],
      },
      {
        label: "결과",
        body: "접근 권한·자격증명·백업·저장 경로의 상태를 문서로 정리하고, 우선순위가 높은 운영 위험을 국소적으로 수정해 인계 이후 점검 기준을 남겼습니다.",
      },
    ],
  },
];

const techChoices = [
  {
    title: "MapLibre GL",
    body: "권역 면과 농장 점을 같은 지도에서 다뤄야 해서 벡터 지도 엔진을 썼습니다. 초기 계획은 상용 지도 서비스였지만 지도 호출량에 따라 비용이 발생해, 오픈소스 엔진과 무료 다크 베이스맵으로 바꿨습니다. 매일 반복해서 확인하는 업무 도구라는 전제에서 다크 톤을 유지했습니다.",
  },
  {
    title: "Lightweight Charts",
    body: "초기 계획은 범용 차트 라이브러리였지만, 좁은 패널에서 지표 추이를 읽는 화면이 중심이라 시세 차트용으로 만들어진 라이브러리로 바꿨습니다. 지표별 선 색을 고정하고 보조 정보의 대비를 낮춰, 수치보다 변화 방향이 먼저 보이도록 구성했습니다.",
  },
  {
    title: "Next.js 서버 라우트",
    body: "별도 백엔드를 두지 않고 화면 프레임워크의 서버 라우트에 인증 경계를 만들었습니다. 백엔드에 접근 허용 설정과 인증 방식을 바꿔 달라고 요청하지 않고 프론트엔드 쪽에서 해결할 수 있었습니다.",
  },
  {
    title: "TanStack Query · Zustand",
    body: "조회 데이터의 캐싱과 재요청은 서버 상태 라이브러리에, 지도의 선택 축은 화면 상태 저장소에 두었습니다. 선택이 바뀔 때마다 조회가 다시 일어나는 구조를 한곳에서 관리하기 위해서입니다.",
  },
  {
    title: "리스크 데이터의 빌드 시점 생성",
    body: "권역 리스크 지표는 연구 담당자가 표 파일로 전달했고, 이를 제공하는 API는 없었습니다. 실행 중에 파일을 읽는 대신 빌드 시점에 코드로 변환해, 화면이 조회 실패 상태를 다루지 않아도 되게 했습니다.",
  },
  {
    title: "상태 색 토큰",
    body: "지도 마커와 목록 배지, 알림 표기가 같은 상태 축을 읽도록 경보 색 토큰을 하나로 통일했습니다. 다만 신선도 표시와 알림 이력이 아직 다른 팔레트를 쓰고 있어, 남은 이탈은 감사 문서로 남겼습니다.",
  },
];

const improvements = [
  "권역 단위 예측은 어느 단위까지 검증된 예측으로 말할 수 있는지가 정해지기 전이어서 화면에 연결하지 않았습니다. 표현 기준이 합의되면 연동과 불확실성 표기를 함께 설계할 필요가 있습니다.",
  "시연 구간의 접근 제한은 사용자를 구분하지 않는 공유 방식이므로, 사용자 단위 인증으로 대체할 필요가 있습니다.",
  "위성 영상 처리 산출물이 특정 작업 환경의 로컬 저장소에 남아 있어, 공용 저장소로 옮겨 수집 환경 의존을 줄일 필요가 있습니다.",
  "지도 마커와 권역 색, 신선도 표시가 색만으로 상태를 구분하고 있어, 형태나 라벨을 함께 쓰는 보완이 남아 있습니다.",
  "화면 전반에 색 토큰 체계가 두 갈래로 남아 있어, 하나로 수렴시킬 필요가 있습니다.",
];

const outcome = [
  "국가에서 농장까지 선택 범위를 좁혀 가는 탐색 구조와, 농장 단위 식생·수분 지표, 30일 추이, 날짜별 위성 썸네일, 알림 이력을 실제 API로 조회하는 흐름을 배포 환경에서 동작하는 상태까지 구현했습니다. 인증 자격증명은 서버 인증·프록시 경계 안에 두고, 브라우저는 동일 출처 경로만 호출하도록 정리했습니다.",
  "2026년 7월 고객사 대상 시연을 진행했습니다. 인계받은 백엔드·인프라는 운영 위험을 정리하고 우선순위가 높은 항목을 국소적으로 수정한 상태까지 다뤘습니다.",
];

const retrospective = [
  {
    title: "제품 정의가 없으면 화면 논의가 결정으로 이어지지 않았습니다",
    body: "소규모 팀에서 부족했던 것은 역할의 수가 아니라 같은 문제를 보고 있다는 확인이었습니다. 한 사람은 권역 예측을, 다른 사람은 농장 관찰을 기준으로 이야기하면 구현 속도와 무관하게 결정이 나지 않습니다. 사용자와 핵심 지표, 완료 기준을 문서로 확정한 뒤에야 화면 논의가 결정으로 이어졌습니다.",
  },
  {
    title: "기술적으로 붙일 수 있는 것과 대외에 보여도 되는 것은 달랐습니다",
    body: "권역 단위 예측은 백엔드 조회가 준비돼 있어 연동 자체는 가능했습니다. 그런데 어느 단위까지 검증된 예측으로 말할 수 있는지가 정해지지 않아 화면에 넣지 않았습니다. 연동 가능성과 대외 표현 가능 범위를 따로 판단해야 한다는 것을 이 결정에서 배웠습니다.",
  },
  {
    title: "다시 한다면 — 인계 첫날에 복구 경로부터 확인하겠습니다",
    body: "초기에 속도를 우선해 선택한 구조를 곧바로 잘못이라고 평가하기보다, 당시의 목표와 제약을 먼저 확인해야 했습니다. 다만 다시 진행한다면 순서를 바꾸겠습니다. 시스템 구성과 접근 권한 목록, 배포·복구 절차를 첫날 하나의 문서로 만들고, 실제 복원 테스트를 마친 뒤 기능 파악에 들어가겠습니다.",
  },
];

const sectionClass = "mt-16 border-t border-border pt-16";
const labelClass = "font-mono text-sm tracking-wide text-accent";
const headingClass =
  "mt-3 break-keep text-2xl font-semibold tracking-tight sm:text-3xl";
const bodyClass = "break-keep text-lg leading-relaxed text-muted";
const linkRowClass =
  "group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent";

function FlowDiagram() {
  return (
    <figure className="mt-8 border border-border p-5 sm:p-6">
      <figcaption className="break-keep text-sm leading-relaxed text-muted">
        공개할 수 있는 범위에서 데이터 흐름과 책임 범위만 단순화했습니다. 관리형
        서비스가 수행하는 부분은 각 단계 설명에서 구분했습니다.
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
        {flowSteps.map((step, index) => {
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
              {index < flowSteps.length - 1 ? (
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
            대기업 종합상사 대상 팜유 위성 모니터링 PoC
          </h1>
          <p className="mt-2 break-keep font-mono text-sm tracking-wide text-muted">
            2026.05 – 2026.07 · PoC 구현 · 인계받은 백엔드·인프라 점검
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
          <h2 className={headingClass}>지도 탐색과 데이터 전달 흐름</h2>
          <p className={`mt-8 ${bodyClass}`}>
            위성 영상이 지표로 바뀌어 화면에 닿기까지의 경로와, 각 단계에서 제가
            담당한 범위입니다. 앞 단계는 인계받아 점검·정비한 영역과 다른 담당
            영역이고, 사용자가 실제로 만나는 마지막 두 단계를 직접 구현했습니다.
          </p>
          <FlowDiagram />
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
          {outcome.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 ? "mt-8" : "mt-4"} ${bodyClass}`}
            >
              {paragraph}
            </p>
          ))}
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

        <section className={sectionClass}>
          <h2 className="break-keep text-2xl font-semibold tracking-tight sm:text-3xl">
            관련 블로그
          </h2>
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
