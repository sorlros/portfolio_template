import {
  nextjs,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  chatgpt,
  threejs,
  vercel,
  allYouHaveTodo,
  savvyWallet,
  savvyWalletLogo,
  todoLogo,
  typingMagician,
  pickYourMaps,
  pickYourMapsLogo,
  novelaine,
  multiAgentBotWeb,
  wallE,
  detoks,
  novelaineLogo,
  multiAgentLogo,
  walleLogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// 프로젝트별 사용 기술 (각 리포의 소스·의존성 기준)
const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician", "Orbit Agent Web"] },
      { name: "Next.js", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician"] },
      { name: "TypeScript", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician", "Orbit Agent Web", "detoks"] },
      { name: "Tailwind CSS", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician", "Orbit Agent Web"] },
      { name: "Zustand", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician"] },
      { name: "Anime.js", projects: ["typing-magician"] },
    ],
  },
  {
    category: "Backend · DB",
    items: [
      { name: "Node.js · Express", projects: ["pick-your-maps"] },
      { name: "Next.js API · Server Actions", projects: ["SavvyWallet", "All-You-Have-To-Do"] },
      { name: "FastAPI (Python)", projects: ["NovelAIne", "Orbit Agent Web", "WALL-E"] },
      { name: "Prisma", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps"] },
      { name: "MongoDB", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps"] },
      { name: "Supabase (PostgreSQL)", projects: ["NovelAIne", "Orbit Agent Web", "WALL-E"] },
      { name: "next-auth · JWT", projects: ["SavvyWallet", "pick-your-maps"] },
      { name: "Firebase (FCM)", projects: ["All-You-Have-To-Do"] },
      { name: "WebSocket", projects: ["WALL-E"] },
    ],
  },
  {
    category: "AI · ML",
    items: [
      { name: "RAG · pgvector", projects: ["NovelAIne", "Orbit Agent Web"] },
      { name: "LLM API (OpenRouter 등)", projects: ["NovelAIne", "Orbit Agent Web"] },
      { name: "LangGraph", projects: ["Orbit Agent Web"] },
      { name: "Stable Diffusion", projects: ["NovelAIne"] },
      { name: "YOLOv11", projects: ["WALL-E"] },
      { name: "PyTorch (MobileNetV3)", projects: ["WALL-E"] },
      { name: "OpenCV", projects: ["WALL-E"] },
      { name: "llama.cpp", projects: ["detoks"] },
    ],
  },
  {
    category: "App · CLI",
    items: [
      { name: "Flutter", projects: ["NovelAIne", "WALL-E"] },
      { name: "Android", projects: ["WALL-E"] },
      { name: "Riverpod", projects: ["NovelAIne"] },
      { name: "PWA", projects: ["All-You-Have-To-Do"] },
      { name: "Node.js CLI", projects: ["detoks"] },
    ],
  },
  {
    category: "Infra · Tools",
    items: [
      { name: "Vercel", projects: ["SavvyWallet", "All-You-Have-To-Do", "pick-your-maps", "typing-magician", "NovelAIne", "Orbit Agent Web"] },
      { name: "Render", projects: ["pick-your-maps"] },
      { name: "GitHub Actions", projects: ["detoks"] },
      { name: "MediaMTX (RTMP)", projects: ["WALL-E"] },
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "detoks",
    company_name: "4인 팀 · CLI / System Engineer · 2026.04",
    icon: detoks,
    iconBg: "#383E56",
    points: [
      "Codex·Gemini 같은 LLM CLI 앞단에서 입력 정제, 작업 분해, 컨텍스트 압축, 출력 후처리를 거쳐 토큰 사용을 줄이는 래퍼 CLI를 4인 팀으로 만들었습니다.",
      "CLI / System Engineer를 맡아 CLI 진입점과 실행 모드 제어, 외부 CLI 어댑터 경계와 실제 subprocess 실행 경로를 구현하고, 도움말·오류 안내 등 CLI 런타임 사용성을 다듬었습니다.",
      "프로젝트 폴더 구조와 문서 체계, 의존성 관리 방식(TypeScript는 npm, Python은 uv로 루트 한 곳에서 관리), GitHub Actions CI와 PR 템플릿을 구성했습니다.",
      "어댑터 실행 경로를 계약으로 정의하고 실제 실행 요청을 검증하는 테스트와 Gemini 실제 실행 스모크 테스트를 추가했습니다.",
    ],
  },
  {
    title: "Orbit Agent Web (multi-agent-bot-web)",
    company_name: "1인 개발 · 2026.03",
    icon: multiAgentLogo,
    iconBg: "#383E56",
    points: [
      "자연어로 작업을 지시하면 Manager, BackendDev, FrontendDev, Designer, QAEngineer 에이전트가 분업하고 Reporter가 결과를 한국어 보고서로 정리하는 멀티 에이전트 시스템을 웹 클라이언트부터 오케스트레이터까지 혼자 만들었습니다.",
      "프론트엔드는 React·Vite·TailwindCSS, 백엔드는 FastAPI와 LangGraph StateGraph로 구성해 Supervisor가 다음 에이전트를 고르도록 했습니다.",
      "Supabase pgvector로 과거 유사 대화를 찾아 맥락으로 넣고, 메시지가 10개를 넘으면 백그라운드 작업으로 세션을 요약해 컨텍스트를 줄였습니다.",
      "graph.astream과 Supabase Realtime으로 에이전트 진행 단계를 실시간으로 보여 주고, 긴 대화의 JSON 파싱 오류와 백엔드 오류 시 무한 로딩을 막는 방어 로직을 넣었습니다.",
    ],
  },
  {
    title: "WALL-E",
    company_name: "4인 팀 · 팀장 · AI 연동 Android 앱 · 2026.02 (16일)",
    icon: walleLogo,
    iconBg: "#383E56",
    points: [
      "드론 영상에서 건물 외벽 균열을 AI로 실시간 탐지해 보여 주는 Android 앱(Flutter) 팀 프로젝트에서 팀장을 맡아 시스템 아키텍처 설계, 영상 서버, AI 추론 백엔드를 담당했습니다.",
      "드론의 RTMP 영상을 MediaMTX로 받아 FastAPI 서버가 수신·추론·방송 3개 트랙으로 비동기 처리하도록 설계하고, 720p 30fps MJPEG 영상과 WebSocket 탐지 메타데이터를 Android 앱에 나눠 보냈습니다. 앱에서는 실시간 영상 확인, 수동 촬영, 탐지 이력·지도 조회를 할 수 있습니다.",
      "YOLOv11n으로 균열을 탐지하고, 드론 흔들림으로 같은 균열이 여러 번 저장되지 않도록 MobileNetV3 임베딩의 코사인 유사도(임계값 80%)로 중복을 걸렀습니다. 창문 탐지 모델로 건물 내부를 흐림 처리해 거주자 사생활도 보호했습니다.",
      "HLS의 3~5초 지연과 화면·박스 좌표 어긋남은 서버에서 박스를 그려 넣은 MJPEG 전송으로 바꿔 해결했습니다.",
    ],
  },
  {
    title: "NovelAIne",
    company_name: "1인 개발 · 2026.01 ~ 2026.06",
    icon: novelaineLogo,
    iconBg: "#383E56",
    points: [
      "AI와 함께 소설을 이어 쓰고 결정적인 장면에 삽화를 붙여 주는 인터랙티브 스토리텔링 서비스를 기획부터 배포까지 혼자 만들었습니다. 프론트엔드는 Flutter(웹·모바일)와 Riverpod, 백엔드는 FastAPI와 Supabase(PostgreSQL·pgvector)로 구성했습니다.",
      "긴 서사에서 설정이 어긋나지 않도록 세계관과 과거 사건을 pgvector로 검색해 지금 필요한 정보만 프롬프트에 넣는 RAG 기억 구조를 만들고, 최근 대화는 원문으로 오래된 대화는 요약으로 유지하는 Summary Buffer로 토큰 낭비를 줄였습니다.",
      "장면의 감정·중요도 점수가 기준을 넘을 때만 Stable Diffusion을 호출해 삽화를 만들고, LLM 응답은 HTTP 스트리밍으로 받아 만년필 필기 효과로 보여 줍니다.",
      "Drift(WASM) 로컬 캐시와 Isolate 사전 파싱으로 스토리 화면 진입 시 서버 응답을 기다리지 않도록 했습니다.",
    ],
  },
  {
    title: "pick-your-maps",
    company_name: "1인 개발 · 2025.03 ~ 2025.04",
    icon: pickYourMapsLogo,
    iconBg: "#383E56",
    points: [
      "Google Maps API로 원하는 장소에 이미지·메모·평점을 기록하는 지도 기록 웹사이트를 프론트엔드부터 백엔드까지 혼자 만들었습니다.",
      "프론트엔드는 Next.js, 백엔드는 Node.js·Express로 나누고, 회원·메모 REST API와 multer 이미지 업로드를 직접 작성했습니다.",
      "bcrypt와 JWT로 회원가입·로그인을 구현하고, 지도 좌표와 메모 데이터는 Prisma와 MongoDB로 관리했습니다.",
      "백엔드는 Render, 프론트엔드는 Vercel로 나눠 배포하고, 두 도메인 사이의 CORS 설정을 맞췄습니다.",
    ],
  },
  {
    title: "typing-magician",
    company_name: "1인 개발 · 2024.08 ~ 2025.02",
    icon: typingMagician,
    iconBg: "#383E56",
    points: [
      "마법사가 되어 몰려오는 몬스터를 타이핑으로 물리치는, 로그라이크 요소를 결합한 웹 타이핑 게임을 혼자 만들었습니다.",
      "타이핑 정확도, 스테이지, 스킬 지속시간, 캐릭터·몬스터 체력처럼 조건에 따라 바뀌는 게임 상태를 Zustand 스토어 8개로 나눠 관리하고, 상태 변화와 Anime.js 애니메이션이 어긋나지 않도록 연결하는 데 집중했습니다.",
      "많은 게임 이미지를 sharp로 텍스처 아틀라스로 묶는 생성 스크립트를 만들어 에셋 로딩을 줄였고, 배경 음악·효과음과 다국어(i18n) 설정을 넣었습니다.",
      "일반 웹사이트와 달리 유저가 실시간으로 느끼는 반응을 여러 관점에서 살펴야 했고, 유저 경험을 중심에 두는 개발을 익힌 프로젝트입니다.",
    ],
  },
  {
    title: "All-You-Have-To-Do",
    company_name: "1인 개발 · 2024.02 ~ 2024.07 (1차 구현 후 2차 재작성)",
    icon: todoLogo,
    iconBg: "#383E56",
    points: [
      "할 일과 일정을 카테고리별로 관리하고, 지정한 시각에 웹 푸시 알림을 보내는 할 일 관리 웹사이트를 혼자 만들었습니다.",
      "Firebase Cloud Messaging으로 기기 토큰을 등록해 그 기기로 알림을 보내고, node-schedule로 사용자가 지정한 시각에 알림이 전송되게 했습니다. 이 과정에서 서비스워커와 Next.js API Routes를 처음 깊게 다뤘습니다.",
      "Google 로그인과 익명 로그인(일주일 뒤 데이터 만료)을 지원하고, PWA로 기기에 설치해 앱처럼 쓸 수 있게 했습니다.",
      "1차 구현에서는 할 일 데이터를 만들 때 컴포넌트 생명주기와 렌더링 순서 때문에 생긴 오류를 찾아 고쳤고, 이후 Next.js 14 App Router·Zustand·Prisma 구조로 2차 버전을 다시 만들었습니다.",
    ],
  },
  {
    title: "SavvyWallet",
    company_name: "1인 개발 · 2023.12 ~ 2024.02",
    icon: savvyWalletLogo,
    iconBg: "#383E56",
    points: [
      "월별·일별 지출과 카테고리별 비중을 차트와 달력으로 보여 주는 가계부 웹사이트를 혼자 만들었습니다.",
      "chart.js(react-chartjs-2)로 카테고리별 지출을, react-calendar로 날짜별 지출을 시각화하고, 날짜마다 메모를 남길 수 있게 했습니다.",
      "Next.js App Router의 Server Actions로 지출·메모 생성·조회·수정·삭제를 구현하고, 데이터는 Prisma와 MongoDB에 사용자별로 저장했습니다.",
      "next-auth와 bcrypt로 회원가입·로그인을 구현하고, react-hook-form과 zod 스키마로 폼 입력을 검증했습니다.",
    ],
  },
];

const projects = [
  {
    name: "NovelAIne",
    description: "AI와 함께 소설을 이어 쓰는 인터랙티브 스토리텔링 서비스입니다. RAG 기억으로 긴 서사의 설정을 유지하고, 중요한 장면에만 삽화를 자동 생성합니다.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "pgvector",
        color: "pink-text-gradient",
      },
    ],
    image: novelaine,
    source_code_git_link: "https://github.com/sorlros/NovelAIne",
    source_code_vercel_link: "https://novelaine.vercel.app/",
  },
  {
    name: "Orbit Agent Web",
    description: "자연어로 지시하면 역할별 AI 에이전트가 분업해 작업하고 결과를 보고서로 정리하는 LangGraph 멀티 에이전트 웹 시스템입니다.",
    tags: [
      {
        name: "LangGraph",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: multiAgentBotWeb,
    source_code_git_link: "https://github.com/sorlros/multi-agent-bot-web",
    source_code_vercel_link: "https://multi-agent-bot-web.vercel.app/",
  },
  {
    name: "WALL-E",
    description: "AI 추론 서버와 연동된 Android 앱으로, 드론 영상에서 건물 외벽 균열을 실시간으로 탐지하고 같은 균열의 중복 저장을 임베딩 유사도로 막는 4인 팀 프로젝트입니다.",
    tags: [
      {
        name: "YOLOv11",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: wallE,
    source_code_git_link: "https://github.com/sorlros/WALL-E",
  },
  {
    name: "detoks",
    description: "LLM CLI 앞단에서 입력·출력·세션을 정리해 토큰 사용을 줄이는 래퍼 CLI입니다. 4인 팀에서 CLI와 시스템 계층을 맡았습니다.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: detoks,
    source_code_git_link: "https://github.com/sorlros/detoks",
  },
  {
    name: "pick-your-maps",
    description: "Node.js와 express를 활용해 만든 api와 구글 맵 api를 활용한 풀스택 웹사이트입니다. 백엔드 서버의 배포는 Render를 사용했으며 프론트 엔드는 vercel로 배포되었습니다.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: pickYourMaps,
    source_code_git_link: "https://github.com/sorlros/pick-your-maps",
    source_code_vercel_link:
      "https://pick-your-maps.vercel.app/",
  },
  {
    name: "All-You-Have-To-do",
    description: "firebase를 활용한 실시간 알림 기능 웹사이트입니다. 간단한 메모와 함께 알림을 설정 할수있습니다.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: allYouHaveTodo,
    source_code_git_link: "https://github.com/sorlros/all-you-have-to-do-version2",
    source_code_vercel_link:
      "https://all-you-have-to-do-version2.vercel.app/",
  },
  {
    name: "typing-magician",
    description: "로그라이크 게임과 웹타이핑을 결합한 웹사이트입니다. 경쾌한 배경 음악들과 함께 타이핑을 즐겨보세요.",
    tags: [
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: typingMagician,
    source_code_git_link: "https://github.com/sorlros/typing-magician",
    source_code_vercel_link:
      "https://typing-magician.vercel.app/",
  },
  {
    name: "SavvyWallet",
    description: "가계부 웹사이트 SavvyWallet은 개인의 지출을 일일 별 월별 등으로 나누어 그래프와 선으로 시각화해서 유저에게 제공합니다.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: savvyWallet,
    source_code_git_link: "https://github.com/sorlros/savvy-wallet",
    source_code_vercel_link:
      "https://savvy-wallet-mm8n.vercel.app/",
  },
];

export { techStack, technologies, experiences, projects };