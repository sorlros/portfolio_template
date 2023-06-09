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
		name: "chat-with-chatgpt",
		description: "실시간 채팅 웹사이트 및 ChatGPT적용",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "openai",
				color: "green-text-gradient",
			},
			{
				name: "backend",
				color: "pink-text-gradient",
			},
			{
				name: "@reduxjs/toolkit",
				color: "orange-text-gradient",
			},
		],
		image: chatgpt,
		source_code_link: "https://github.com/sorlros/chat-with-chatgpt",
	},
	{
		name: "3D-animate-web",
		description: "Next.js, three, gsap등을 활용한 3D웹사이트",
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
		source_code_link: "https://github.com/sorlros/animate-web",
	},
	{
		name: "Netflix 클론 사이트",
		description: "mongodb, prismadb를 활용한 풀스택 넷플릭스 클론 사이트입니다.",
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
		source_code_link: "https://github.com/sorlros/netflix-clone",
	},
];

export { services, technologies, experiences, projects };
