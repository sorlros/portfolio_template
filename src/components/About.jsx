import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { techStack } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const StackRow = ({ index, category, items }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-6 border-t border-[#2a2448]"
  >
    <h3 className="text-white text-[18px] font-bold">{category}</h3>
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.name}
          title={item.projects.join(", ")}
          className="flex items-center gap-2 bg-tertiary rounded-full pl-4 pr-2 py-1.5 text-[14px] text-white-100"
        >
          {item.name}
          <span className="min-w-[22px] h-[22px] px-1.5 rounded-full green-pink-gradient text-[12px] font-bold text-white flex items-center justify-center">
            {item.projects.length}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-3"
        style={{ wordBreak: "keep-all" }}
      >
        <p>
          웹 서비스에서 AI 서비스, Android 앱, CLI 도구까지 프로젝트마다 처음 보는 문제를 만났습니다.
          그때마다 무엇이 문제인지 먼저 정의하고, 확인할 수 있는 작은 단위로 나눈 뒤, 하나씩 해결해 왔습니다.
        </p>
        <p>
          최근에는 AI 에이전트와 분업해 구현 속도를 높이되, 무엇을 만들지와 맞게 만들었는지는 직접 판단합니다.
          아래 기술들은 그렇게 문제를 풀면서 필요에 따라 익히고 실제 프로젝트에 쓴 것들입니다.
        </p>
      </motion.div>

      <div className="mt-14">
        <p className="mb-4 text-secondary text-[13px]">숫자는 그 기술을 사용한 프로젝트 수입니다.</p>
        {techStack.map((group, index) => (
          <StackRow key={group.category} index={index} {...group} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
