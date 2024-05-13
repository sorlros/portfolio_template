import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        안녕하세요! 저는 React와 Next.js를 사용하는 프론트엔드 개발자 최규철입니다. 이 자기소개서를 통해 제 프로필과 경험을 소개해 드리고 싶습니다. 저는 웹 개발을 공부하는 기간에 React와 Next.js를 사용하여 다양한 프로젝트를 만들어왔으며 이를 통해 클라이언트의 입장에서 어떤 웹사이트가 더 좋은 웹사이트일지 고민하며 코딩해 왔습니다. 제가 주로 사용하는 기술 스택들은 Next.js, Typescript, Tailwindcss였습니다. 제가 개발자로서 가진 강점은 새로운 경험(기술)에 대해 개방적이며 난관에 봉착하고 그 난관을 해결하기 위해 고민하는 과정들을 좋아합니다. 이런 점들이 제가 개발자를 직업으로서 선택한 동기였습니다. 해당 회사에서 일하게 된다면 다양한 분들과 함께 프로젝트를 완성해가는 과정들을 경험하고싶습니다.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
