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
  animate,
  chatgpt,
  threejs,
  netflixclone,
  vercel,
  spotifyclone,
  twitterclone,
  airbnbclone,
  notionclone,
  trelloclone,
  netflixclone,
  notionLogo,
  spotifyLogo,
  trelloLogo,
  twitterLogo,
  airbnbLogo,
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
    title: "Full Stack Developer",
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
    title: "Twitter-clone",
    company_name: "Twitter",
    icon: twitterLogo,
    iconBg: "#383E56",
    date: "Jul 31 - Sep 5",
    points: [
      "프론트 엔드 영역에서 React와 Next.js를 통해 라우팅과 서버 사이드랜더링을 구현하고 Tailwincss로 CSS를 구현한 풀스택 Twitter 클론 웹사이트입니다. 백엔드 영역에서의 데이터 관리를 위해 Prisma와 MongoDB를 사용했습니다. 유저 인증 기능과 이미지 업로드, 전체적인 알림 기능을 위해 next-auth를 사용했으며 이 사이트는 Full responsive를 염두해 만들어졌으며 Typescript를 통해 타입 관리를 했습니다. 유저가 트윗을 수신하거나 회신 받을수있으며 다른 유저를 follow하거나 트윗에 좋아요 버튼이 눌렸을때 이를 알림 받을수있는 기능을 구현했습니다.",
    ],
  },
  {
    title: "Netflix-clone",
    company_name: "Netflix",
    icon: netflixLogo,
    iconBg: "#E6DEDD",
    date: "Apr 24 - May 3",
    points: [
      "React와 Next.js를 통해 서버사이드 렌더링을 구현하고 Tailwindcss, Prisma, MongoDB를 사용했으며 유저 인증기능과  데이터베이스를 통해 최신 트렌드 영상들을 업로드하고 넷플릭스와 같은 유저 인터페이스 효과를 만들었습니다. 유저의 favorites 기능, 영상을 클릭시 해당 영상의 재생과 정보를 나타내는 모델을 만들고 Full-responsive를 염두해 각 종 크기의 기기들에서 유저 친화적인 UI/UX를 만들었습니다.",
    ],
  },
  {
    title: "Spotify-clone",
    company_name: "Spotify",
    icon: spotifyLogo,
    iconBg: "#383E56",
    date: "Aug 21 - Aug 31",
    points: [
      "Next 13의 새로운 app라우터 방식을 사용했으며 효과적인 다이내믹 페이지 랜더링을 사용했습니다. 효율적인 코딩을 위해 재사용 가능한 컴포넌트들로 사이트의 기본 뼈대를 구축하고 반응형 유저 인터페이스 디자인을 위해 Tailwindcss와 radix-ui를 사용했습니다. 데이터 베이스는 supabase와 PostgreSQL을 통해 확장 가능한 데이터 솔루션을 설계하고 MP3파일과 이미지를 업로드 할 수 있는 기능을 구현했습니다.",
    ],
  },
  {
    title: "Airbnb-clone",
    company_name: "Airbnb",
    icon: airbnbLogo,
    iconBg: "#E6DEDD",
    date: "Sep 18 - Oct 23",
    points: [
      "Next 13의 앱 디렉토리 기능을 통해 빠르게 로드하고 쉽게 유저가 원하는 정보를 찾을수있게 최적화 된 웹 어플리케이션입니다. Prisma와 MongoDB를 통해 데이터베이스에서 즉각적인 데이터 fetch를 위해 서버 컴포넌트 기능을 활용해 원활한 유저 experience를 구축했습니다. 추가적으로 안전하고 부드러우며 반응형 UI 디자인을 위해 클라이언트 컴포넌트 기능을 사용했습니다. cloudinary CDN로 이미지 업로드 기능을 사용하며 toast를 통해 서버 에러를 다뤘습니다. Airbnb의 날짜 예약 시스템 기능을 만들었으며 게스트와 호스트 사이의 예약 혹은 예약 취소 기능과 다양한 지역 프로퍼티들을 만들어 유저의 사용성을 높였습니다. 유저가 선택하는 일자에 따라 가격 계산과 필터 기능을 통한 효과적인 검색 알고리즘으로 유저가 원하는 데이터에 접근 할 수 있도록 접근성을 갖춘 앱입니다.",
    ],
  },
  {
    title: "Notion-clone",
    company_name: "Notion",
    icon: notionLogo,
    iconBg: "#E6DEDD",
    date: "Oct 24 - Nov 9",
    points: [
      "사용자의 시스템 설정에 따른 다크모드 기능이 포함되어 있으며 실시간으로 사이드바에서 데이터를 생성 혹은 삭제함에 따라 유저의 의도에 따라 사용성을 높이고 메모 기능 또한 실시간으로 변경할 수 있는 웹 어플리케이션입니다. 각각의 메모에 유저가 이미지를 업로드 할 수 있도록 Edge store, Unsplash API를 활용했습니다. Notion 스타일의 에디터를 만들기 위해 blocknote 라이브러리를 사용했으며 노트들을 부모 자식 관계로 생성 및 제거하고 삭제된 메모 데이터를 복구할 수있는 구조로 이를 위한 로직이 이 웹어플리케이션의 가장 주요한 기능입니다.",
    ],
  },
  {
    title: "Trello-clone",
    company_name: "Trello",
    icon: trelloLogo,
    iconBg: "#E6DEDD",
    date: "Nov 15 - Dec 1",
    points: [
      "TODO 리스트 데이터들을 드래그 앤 드롭 기능을 통해 상호작용하는 디자인을 만들고 Stripe를 통해 유료 모델 기능을 구현했습니다. 유저가 생성, 삭제 혹은 변경을 하는 행동에 따라 즉각적인 알림을 생성하며 각 각의 기능들을 위해 세분화된 action 코드들로 기능들을 조정하는것이 이 웹에플리케이션을 구성하는 주요한 점이며 모든 기능은 데이터 베이스와 실시간으로 연동되어 유저에게 즉각적인 경험을 가능하게 합니다.",
    ],
  },
];

const projects = [
  {
    name: "Twitter-clone-site",
    description: "swr, typescript, tailwindcss, zustand 활용",
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
  {
    name: "3D-animate-web",
    description: "Next.js, three, gsap등을 활용한 3D웹사이트 미완성",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: animate,
    source_code_git_link: "https://github.com/sorlros/animate-web",
    source_code_vercel_link: "https://animate-web.vercel.app/",
  },
  {
    name: "Netflix 클론 사이트",
    description: "mongodb, prismadb를 활용한 넷플릭스 클론 사이트입니다.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "PrismaDB",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: netflixclone,
    source_code_git_link: "https://github.com/sorlros/netflix-clone",
    source_code_vercel_link:
      "https://netfliss-clone-n5jnz95ub-sorlros.vercel.app/auth",
  },
  {
    name: "Spotify 클론 사이트",
    description:
      "typescript, supabase, tailwincss를 활용했으며 웹과 모바일 환경을 모두 고려하여 만든 웹사이트입니다.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyclone,
    source_code_git_link:
      "https://github.com/sorlros/clone-spotify-interactive-app",
    source_code_vercel_link:
      "https://clone-spotify-interactive-app.vercel.app/",
  },
  {
    name: "Air-bnb 클론 사이트",
    description: "Airbnb 사이트를 클론 코딩한 사이트입니다.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "PrismaDB",
        color: "purple-text-gradient",
      },
    ],
    image: airbnbclone,
    source_code_git_link: "https://github.com/sorlros/airbnb-clone",
    source_code_vercel_link:
      "https://aircnb-clone-gyxzbcy3g-sorlros.vercel.app/",
  },
  {
    name: "Notion 클론 사이트",
    description: "텍스트와 이미지등을 메모하고 퍼블리싱하는 웹 어플리케이션",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Convex",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "purple-text-gradient",
      },
    ],
    image: notionclone,
    source_code_git_link: "https://github.com/sorlros/notion-clone",
    source_code_vercel_link: "https://sotion-clone.vercel.app/",
  },
  {
    name: "Trello 클론 사이트",
    description:
      "Next.js와 Typescript로 만든 웹기반 프로젝트 관리 소프트웨어입니다. zustand와 zod를 사용해서 스키마 선언 및 유효성검사를 했으며 zustand, clerk로 로그인 및 유저정보를 다루고 stripe로 유료 기능을 사용할수있습니다.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
      },
    ],
    image: trelloclone,
    source_code_git_link: "https://github.com/sorlros/trello-clone",
    source_code_vercel_link: "https://trello-clone-lac-pi.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
