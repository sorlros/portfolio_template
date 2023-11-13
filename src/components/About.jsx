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
        제가 처음 코딩을 접하게 된 건 수원에 위치한 연세직업학교에서 웹퍼블리셔
        UI/UX 국비과정을 수료하며 코딩에 입문하고 매력을 느끼게 되었으며 이후
        서울에서 다른 국비과정을 통해 자바를 배우며 CRUD 구조와 백엔드 부분에서
        다루는 점들을 익혔었습니다. 해당 과정을 수료 후 프론트 엔드에서 더 큰
        매력을 느껴 독학으로 패스트 캠퍼스라는 웹 코딩 교육 사이트를 통해
        프론트엔드 과정을 구매해 타입스크립트와 React.js와 Next.js를 공부했으며
        유튜브를 통해 여러 유명 사이트들을 클론 코딩하거나 새로운 라이브러리들을
        익혀왔었습니다. 자바를 공부할 때 팀 프로젝트로 키오스크를 만드는 작업을
        했었는데 코딩에서 중요한 점은 전체적인 청사진을 계획하고 구현할 여러
        기능들과 해당 작업물이 실제 환경에서 소비자들에게 닿게 되었을 때 야기될
        문제점들을 미리 예측하고 이를 예방해야 한다는 점들을 느꼈으며 여러 클론
        사이트들을 만들며 전체적인 프로젝트의 구조에 대해 익숙해질 수
        있었습니다. 제가 이 직업을 선택한 가장 큰 이유는 코딩을 통해 느낄 수
        있는 문제점에 봉착했을 때 이를 해결하는 과정에서 얻을 수 있는 성취감과
        재미가 가장 큰 부분이었으며 프론트엔드 영역에서 더 큰 매력을 느껴 이
        직업을 선택했었습니다.
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
