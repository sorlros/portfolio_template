import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						안녕하세요, 저는 <span className="text-[#915eff]">최규철</span> 입니다.
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ wordBreak: "keep-all" }}>
						<span className="block text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-secondary">
							웹 서비스, AI, Android 앱, CLI 도구.
							<br className="sm:block hidden" /> 주제는 매번 달랐고, 정의하고 나누고 해결하는 방식은 같았습니다.
						</span>
						<span className="block mt-3">문제를 푸는 방법을 아는 풀스택 개발자입니다.</span>
					</p>
				</div>

				<ComputersCanvas className="flex flex-row justify-center" />

				<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
					<a href="#about">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-secondary mb-1"
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
