import {
  mobile,
  nextjs,
  web,
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
  twitterclone,
  allYouHaveTodo,
  savvyWallet,
  savvyWalletLogo,
  twitterLogo,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Nodejs Developer",
    icon: nodejs,
  },
  {
    title: "Nextjs Developer",
    icon: nextjs,
  },
  {
    title: "React Developer",
    icon: reactjs,
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
    company_name: "4인 팀 · 팀장 · 2026.02 (16일)",
    icon: walleLogo,
    iconBg: "#383E56",
    points: [
      "드론 영상으로 건물 외벽 균열을 실시간 탐지하는 팀 프로젝트에서 팀장을 맡아 시스템 아키텍처 설계, 영상 서버, AI 추론 백엔드를 담당했습니다.",
      "드론의 RTMP 영상을 MediaMTX로 받아 FastAPI 서버가 수신·추론·방송 3개 트랙으로 비동기 처리하도록 설계하고, 720p 30fps MJPEG 영상과 WebSocket 탐지 메타데이터를 Flutter 앱에 나눠 보냈습니다.",
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
    title: "Twitter-clone",
    company_name: "Twitter",
    icon: twitterLogo,
    iconBg: "#383E56",
    points: [
      "프론트 엔드 영역에서 React와 Next.js를 통해 라우팅과 서버 사이드랜더링을 구현하고 Tailwincss로 CSS를 구현한 풀스택 Twitter 클론 웹사이트입니다. 백엔드 영역에서의 데이터 관리를 위해 Prisma와 MongoDB를 사용했습니다. 유저 인증 기능과 이미지 업로드, 전체적인 알림 기능을 위해 next-auth를 사용했으며 이 사이트는 Full responsive를 염두해 만들어졌으며 Typescript를 통해 타입 관리를 했습니다. 유저가 트윗을 수신하거나 회신 받을수있으며 다른 유저를 follow하거나 트윗에 좋아요 버튼이 눌렸을때 이를 알림 받을수있는 기능을 구현했습니다.",
    ],
  },
  
  {
    title: "SavvyWallet",
    company_name: "sorlros",
    icon: savvyWalletLogo,
    iconBg: "#383E56",
    points: [
      "사용자의 월 별 지출 내역 및 카테고리별 지출을 시각적으로 표현하기 위해 차트를 chart.js와 react-calendar 라이브러리를 사용했으며 메모를 남길수 있는 기능을 포함했습니다. 해당 데이터들은 각 사용자별로 mongoDB와 prisma를 통해 저장되며 실시간으로 데이터들을 저장 및 불러올수있습니다.",
    ],
  },
  {
    title: "All-You-Have-To-Do",
    company_name: "sorlros",
    icon: todoLogo,
    iconBg: "#383E56",
    points: [
      "이 웹사이트를 만들게 된 동기는 사용자에게 알림을 보낼수있는 웹사이트를 제작해보고싶어 정보를 찾던 중 Firebase를 통해 해당 기능을 구현할수있음을 찾게되고 해당 기능을 사용해보았습니다. token값을 통해 사용자의 기기정보를 등록하고 해당 기기로 알림을 보내는 과정들을 알게되었고 예약 알림 기능 구현을 위해 node-schedule 라이브러리를 통해 사용자가 지정한 시간에 알림이 전송되게끔 코드를 작성했습니다. 이 프로젝트를 통해 서비스워커에 대한 이해도와 Next.js의 Api routes 기능을 경험했습니다. 주로 겪은 오류들은 Todo 데이터들을 생성하는 과정에서 컴포넌트 생명주기와 관련된 렌더링 과정에서 오류를 겪어 해당 문제에 대해 인지하고 수정하는 과정들이 있었으며 Firebase의 기능을 처음 사용하다보니 적지 않은 문제들에 마주하게됬었습니다. Web Push Notification 기능에 대해 많은 자료를 접하고 직접 구현해볼수있어 개인적으로는 그동안의 프로젝트중 가장 기억에 남았습니다."
    ],
  },
  {
    title: "pick-your-maps",
    company_name: "sorlros",
    icon: pickYourMapsLogo,
    iconBg: "#383E56",
    points: [
      "구글 맵 api를 활용한 웹사이트로 프론트엔드는 next.js 백엔드는 node.js와 express로 제작되었습니다. 유저가 원하는 장소에 이미지와 간단한 메모, 평점등을 기록할수있으며 다양한 백엔드 api들로 기능들을 만들었습니다. 지도의 좌표 데이터로 위치를 기록하고 간단한 로그인 및 회원가입 기능이 포함되어 있습니다. DB는 mongoDB를 활용했으며 prisma를 통해 관리합니다."
    ],
  },
  {
    title: "typing-magician",
    company_name: "sorlros",
    icon: typingMagician,
    iconBg: "#383E56",
    points: [
      "타이핑과 게임을 결합한 웹사이트를 개발하면서  조건에 따라 상태값을 관리하는 기능 구현에 특히 중점을 두었습니다. 기존의 일반적인 웹사이트와는 달리 유저가 실시간으로 경험하는 요소들을 다양한 관점에서 세심하게 고려해야 했기 때문에 색다른 개발 경험을 쌓을 수 있었습니다. 특히 유저의 상호작용에 따라 변화하는 상태와 애니메이션을 조화롭게 연결하며 몰입감을 높이는 데 주력했습니다. 이러한 과정에서 유저 경험을 중심으로 한 웹사이트 개발에 대한 깊은 이해를 더할 수 있었습니다."
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
    description: "드론 영상에서 건물 외벽 균열을 실시간으로 탐지하고, 같은 균열의 중복 저장을 임베딩 유사도로 막는 4인 팀 프로젝트입니다.",
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
        name: "Flutter",
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
  {
    name: "Twitter-clone-site",
    description: "실시간 소식 공유, 팔로워 및 팔로잉 기능 구현",
    tags: [
      {
        name: "swr",
        color: "red-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
    ],
    image: twitterclone,
    source_code_git_link: "https://github.com/sorlros/clone-zwitter",
    source_code_vercel_link: "https://clone-zwitter.vercel.app/",
  },
];

export { services, technologies, experiences, projects };