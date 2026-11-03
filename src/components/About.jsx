import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { techStack } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// 사용한 프로젝트 수로 3단계: 5개 이상 / 2~4개 / 1개
const tierClass = (count) =>
  count >= 5
    ? "bg-[#915eff] text-white font-semibold"
    : count >= 2
    ? "bg-tertiary text-white-100 border border-[#915eff]"
    : "text-secondary border border-[#2a2448]";

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
          tabIndex={0}
          aria-label={`${item.name}: ${item.projects.join(", ")}`}
          className={`group relative flex items-center gap-2 rounded-full pl-4 pr-2 py-1.5 text-[14px] cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white ${tierClass(item.projects.length)}`}
        >
          {item.name}
          <span className="min-w-[22px] h-[22px] px-1.5 rounded-full bg-black-100/60 text-[12px] font-bold flex items-center justify-center">
            {item.projects.length}
          </span>
          {/* 마우스를 올리거나 탭(포커스)하면 사용한 프로젝트 목록 표시 */}
          <span className="hidden group-hover:block group-focus:block absolute left-0 bottom-full mb-2 z-20 w-max max-w-[260px] rounded-lg bg-black-100 border border-[#915eff] px-3 py-2 text-[12px] font-normal text-white-100 leading-[20px] shadow-card">
            {item.projects.join(" · ")}
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
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-secondary text-[13px]">
          <span>숫자 = 그 기술을 사용한 프로젝트 수 · 마우스를 올리면 프로젝트 이름</span>
          <span className="flex items-center gap-2">
            <i className="w-3 h-3 rounded-full bg-[#915eff]" /> 5개 이상
          </span>
          <span className="flex items-center gap-2">
            <i className="w-3 h-3 rounded-full bg-tertiary border border-[#915eff]" /> 2~4개
          </span>
          <span className="flex items-center gap-2">
            <i className="w-3 h-3 rounded-full border border-[#2a2448]" /> 1개
          </span>
        </div>
        {techStack.map((group, index) => (
          <StackRow key={group.category} index={index} {...group} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
