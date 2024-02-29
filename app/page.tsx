'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Page() {
	const [count, setCount] = useState(0)
	const [subtitle] = useState([
		'Je développe des applications avec Next.js',
		'Je convertis des maquettes en UI moderne',
		'Je construis des interfaces modernes avec React',
		'Je développe des sites en Vue.js',
		'Je construis des applications mobile avec React Native',
	])
	const subtitleRef = useRef<HTMLHeadingElement>(null)
	const isInView = useInView(subtitleRef, { once: true })

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1)
			if (count === 3) {
				setCount(0)
			}
		}, 2000)
		return () => clearInterval(interval)
	}, [count])

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="max-w-3xl text-center space-y-6">
				<h1 className="text-5xl leading-[72px] font-bold">
					Je suis <span className="text-primary">Pierre</span>, un développeur logiciel
					freelance <span className="text-secondary">passionné</span>
				</h1>
				<h2
					ref={subtitleRef}
					className="text-2xl relative overflow-hidden h-[32px]"
				>
					<span
						className="absolute flex flex-col transition-all duration-500 ease-in-expo left-0 right-0"
						style={{
							top:
								count === 0
									? '0'
									: count === 1
										? '-32px'
										: count === 2
											? '-64px'
											: count === 3
												? '-96px'
												: '0',
						}}
					>
						{subtitle.map((element, index) => (
							<TextElement key={index} element={element} />
						))}
					</span>
				</h2>
			</div>
		</div>
	)
}

function TextElement({ element }: Readonly<{ element: string }>) {
	const firstWord = element.split(' ').at(0)
	const secondWord = <b>{element.split(' ').at(1)}</b>
	const rest = element.split(' ').slice(1).join(' ')
	const ref = useRef<HTMLSpanElement>(null)
	// const isInView = useInView(ref, { once: true })

	return (
		<span
			tabIndex={0}
			ref={ref}
		>
			{firstWord} {secondWord} {rest}
		</span>
	)
}