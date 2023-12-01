import {
  mobile,
  nextjs,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
