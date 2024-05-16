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
  todoLogo
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
    title: "All-You-Have-To-Do",
    company_name: "sorlros",
    icon: todoLogo,
    iconBg: "#383E56",
    points: [
      "이 웹사이트를 만들게 된 동기는 사용자에게 알림을 보낼수있는 웹사이트를 제작해보고싶어 정보를 찾던 중 Firebase를 통해 해당 기능을 구현할수있음을 찾게되고 해당 기능을 사용해보았습니다. token값을 통해 사용자의 기기정보를 등록하고 해당 기기로 알림을 보내는 과정들을 알게되었고 예약 알림 기능 구현을 위해 node-schedule 라이브러리를 통해 사용자가 지정한 시간에 알림이 전송되게끔 코드를 작성했습니다. 이 프로젝트를 통해 서비스워커에 대한 이해도와 Next.js의 Api routes 기능을 경험했습니다. 주로 겪은 오류들은 Todo 데이터들을 생성하는 과정에서 컴포넌트 생명주기와 관련된 렌더링 과정에서 오류를 겪어 해당 문제에 대해 인지하고 수정하는 과정들이 있었으며 Firebase의 기능을 처음 사용하다보니 적지 않은 문제들에 마주하게됬었습니다. Web Push Notification 기능에 대해 많은 자료를 접하고 직접 구현해볼수있어 개인적으로는 그동안의 프로젝트중 가장 기억에 남았습니다."
    ],
  },
];

const projects = [
  {
    name: "All-You-Have-To-do",
    description: "Next.js, Firebase, prismadb를 사용한 Todo 알림 서비스 웹사이트입니다. 익명 로그인시 현재 Todo관련 기능들이 구현되어있지 않습니다.(구글 로그인시에만 기능사용 가능)",
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
    image: allYouHaveTodo,
    source_code_git_link: "https://github.com/sorlros/all-you-have-to-do-version2",
    source_code_vercel_link:
      "https://all-you-have-to-do-version2.vercel.app/",
  },
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
    name: "SavvyWallet",
    description: "Next.js, mongodb, prismadb, zustand를 사용한 가계부 웹사이트입니다.",
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
    image: savvyWallet,
    source_code_git_link: "https://github.com/sorlros/savvy-wallet",
    source_code_vercel_link:
      "https://savvy-wallet-mm8n.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
