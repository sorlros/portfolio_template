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
  lolInfo,
  typingMagician
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
    title: "lol-info",
    company_name: "sorlros",
    icon: lolInfo,
    iconBg: "#383E56",
    points: [
      "lol-info 웹사이트는 리그오브레전드 유저들의 이전 게임 정보들을 나타내는 op.gg와 같은 사이트들의 기능을 만들고 open api를 통해 얻은 데이터들을 용도에 맞게 코드로 분류하고 사용해보기 위해 만들어진 웹사이트입니다. 해당 사이트를 만들게 된 계기는 restful api을 활용한 웹사이트를 만들어보고싶었고 고민 하던 중 적절한 데이터들이 이미 충분한 lol을 활용했습니다. 해당 웹사이트에는 타입스크립트, 리액트 리덕스가 사용되었으며 UI를 위해 tailwindcss와 shadcn-ui가 사용되었습니다. 유저의 인게임 닉네임과 태그넘버를 통해 특정 유저의 이전 플레이했던 게임들의 정보를 불러올수있으며 개인 환경에서의 제한된 성능으로 인해 최근 20게임동안 사용한 챔피언 목록만 나타나게끔 만들어졌습니다."
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
    description: "로그라이크 게임과 웹타이핑을 결합한 웹사이트입니다. 타이핑시 재생되는 경쾌한 첼로음들과 어울리는 배경음악들을 조합해보았습니다.",
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
  {
    name: "lol-info",
    description: "리그오브레전드 유저의 정보를 게임 정보를 데이터화한 사이트입니다.",
    tags: [
      {
        name: "react-redux",
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
    image: lolInfo,
    source_code_git_link: "https://github.com/sorlros/lol-info",
    source_code_vercel_link:
      "https://lol-info-teal.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
