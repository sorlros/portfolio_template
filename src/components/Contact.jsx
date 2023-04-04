import { motion } from "framer-motion"
import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		emailjs
			.send(
				"service_b9npo7r",
				"template_nw0jjaa",
				{
					from_name: form.name,
					to_name: "sorlros",
					from_email: form.email,
					to_email: "sorlros2047@gmail.com",
					message: form.message,
				},
				"ArppqI0T8kjKTO_9E"
			)
			.then(
				() => {
					setLoading(false)
					alert("감사합니다. 최대한 빠른 시일내에 연락드리겠습니다.")

					setForm({
						name: "",
						email: "",
						message: "",
					})
				},
				(error) => {
					setLoading(false)
					console.log(error)
					alert("에러가 발생했습니다.")
				}
			)
	}

	return (
		<div
			className="
  xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-2 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">이름</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="귀하의 이름을 써주세요."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						></input>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">이메일</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="귀하의 이메일을 적어주세요."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						></input>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">메세지</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="메세지와 연락처를 남겨주세요."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						></textarea>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending.." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, "contact")
