'use client'

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks'

export function Head() {
	const [count, setCount] = useState(0)
	const [subtitle,] = useState([
		'Je développe des applications web performantes avec Next.js',
		'Je conçois des interfaces modernes avec React',
		'Je crée des architectures robustes et scalables avec Ruby on Rails',
		'Je convertis des maquettes Figma en UI moderne',
		'Je conçois des interfaces utilisateur réactives avec Vue.js',
		'Je développe des applications mobile avec React Native',
		'Je crée des API RESTful et GraphQL avec Node.js',
	])

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1)
			if (count === subtitle.length - 1) {
				setCount(0)
			}
		}, 1800)
		return () => clearInterval(interval)
	}, [count, subtitle])

	const isMobile = useIsMobile()

	return (
		<div className='container flex flex-col items-center justify-between py-20 lg:p-24'>
			<div className='container lg:max-w-4xl text-center space-y-6'>
				<h1 className='text-3xl lg:text-5xl lg:leading-[72px] font-bold'>
					<span className='text-primary'>Pierre</span>, un développeur
					logiciel freelance <span className='text-secondary'>passionné</span>
				</h1>
				<h2 className='text-lg lg:text-xl relative overflow-hidden h-[56px] lg:h-[28px]'>
					<span
						className='absolute flex flex-col transition-all duration-500 ease-in-expo left-0 right-0'
						style={{ top: `-${count * (isMobile ? 56 : 28)}px` }}
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
	const rest = element.split(' ').slice(2).join(' ')

	return (
		<span>
			{firstWord} {secondWord} {rest}
		</span>
	)
}
