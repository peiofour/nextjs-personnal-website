'use client'

import Image from 'next/image'
import undraw from '@/public/undraw_feeling_proud.svg'

export function About() {
	return (
		<>
			<Image
				src={undraw}
				alt="Illustration d'un homme fier"
				width={500}
				className='px-10 lg:px-0 mx-auto -mb-32'
			/>
			<div className='bg-primary py-28'>
				<div className='container max-w-4xl text-white text-center flex flex-col gap-5'>
					<h2 className='font-bold text-3xl'>Bonjour,</h2>
					<div className='text-lg lg:text-xl font-normal flex flex-col gap-4'>
						{text.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

const text = [
	"Je m’appelle Pierre Fournier. Je suis un développeur frond-end en freelance basé à Toulouse avec plus de 6 ans d'expérience, spécialisé dans les technologies web modernes et innovantes.",
	"Je suis passionné par le développement web et mobile, et je mets à profit mes compétences pour aider mes clients à concrétiser leurs projets et à atteindre leurs objectifs.",
	"J'ai une solide expertise en React, Next.js, Vue, TypeScript, Ruby on Rails, React-native et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
]
