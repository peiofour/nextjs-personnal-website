'use client'

import Image from 'next/image'
import undraw from '@/public/undraw_feeling_proud.svg'

export function About() {
	return (
		<div>
			<Image
				src={undraw}
				alt="Illustration d'un homme fier"
				width={500}
				className='px-10 lg:px-0 mx-auto -mb-32'
			/>
			<div className='bg-primary py-28'>
				<div className='container max-w-4xl text-white text-center flex flex-col gap-5'>
					<h1 className='font-bold text-3xl'>Bonjour,</h1>
					<div className='text-lg lg:text-xl font-normal flex flex-col gap-4'>
						{text.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const text = [
	"Je m’appelle Pierre. Je suis un développeur basé à Toulouse avec plus de 6 ans d'expérience dans la création d'applications web et mobiles sur mesure. Je suis diplômé de l’école YNOV Campus en développement logiciel et mobile.",
	'J’ai commencé mon aventure en tant que freelance il y a 3 ans. Je développe des applications web et mobile pour des startups, des PME et des agences.',
	"J'ai une solide expertise en React, Vue, Next.js et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
]
