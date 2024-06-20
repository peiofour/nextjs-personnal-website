'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import peoplevoxicon from '@/public/companies/peoplevox.svg'
import loungeupicon from '@/public/companies/loungeup.svg'
import w2pdigitalicon from '@/public/companies/w2pdigital.svg'
import { useIsMobile } from '@/hooks'

export function Testimonials() {
	const [caroussel, setCaroussel] = useState(0)

	return (
		<div className='bg-tertiary py-14'>
			<div className='container relative flex max-w-4xl flex-col gap-8 lg:gap-10'>
				<div className='flex flex-col text-center'>
					<h2 className='text-2xl font-bold lg:text-3xl'>Témoignages</h2>
				</div>
				<div className='overflow-hidden'>
					<div
						className='flex w-[200%] transition-all duration-500 ease-in-out'
						style={{ transform: `translateX(-${caroussel * 50}%)` }}
					>
						{testimonials.map((testimonial, index) => (
							<CarousselItem
								key={index}
								src={testimonial.src}
								alt={testimonial.alt}
								text={testimonial.text}
								name={testimonial.name}
								job={testimonial.job}
							/>
						))}
					</div>
				</div>
				<div className='flex justify-center gap-4'>
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCaroussel(index)}
							className={`h-4 w-4 rounded-full ${
								caroussel === index ? 'bg-secondary' : 'border-2 bg-white'
							}`}
						></button>
					))}
				</div>
			</div>
		</div>
	)
}

interface CarousselItemProps {
	src: string
	alt: string
	text: string
	name: string
	job: string
}

function CarousselItem(testimonial: CarousselItemProps) {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
	const isMobileFromHook = useIsMobile()

	useEffect(() => {
		setIsMobile(isMobileFromHook)
	}, [isMobileFromHook])

	return (
		<div className='float-left flex w-[50%] flex-col items-center gap-6 text-center lg:mx-5 lg:gap-10'>
			<Image
				loading='lazy'
				src={testimonial.src}
				alt={testimonial.alt}
				width={isMobile ? 200 : 230}
			/>
			<p className='h-full text-lg font-normal lg:text-xl'>
				{testimonial.text}
			</p>
			<div>
				<h3 className='font-bold'>{testimonial.name}</h3>
				<h4>{testimonial.job}</h4>
			</div>
		</div>
	)
}

const testimonials: Array<CarousselItemProps> = [
	{
		src: peoplevoxicon,
		alt: 'People Vox',
		text: `« Pierre est arrivé en renfort pour nous aider à délivrer plusieurs sujets importants.
		Il a su s'imprégner et apprendre les nombreux concepts et technologies que nous utilisons.
		Que ce soit sur nos tests suite ou implémentations, tout s'est déroulé correctement.
		Pierre sait évoluer dans une environnement fullstack en passant du frontend au backend et même de l'IAS ( infra as code ).
		Pierre a entièrement rempli ses fonctions de fullstack et peut aider vos équipes à délivrer vos prochaines features ! »`,
		name: 'Antoine Cormouls',
		job: 'CTO - People Vox',
	},
	{
		src: loungeupicon,
		alt: 'Lounge Up',
		text: `« Je recommande de faire appel à Pierre pour vos projets front-end autour de la stack React. 
		Pierre a mené à bien plusieurs développements pour notre Société, dans le respect des cahiers des charges et des délais.
		Pierre a été force de proposition autour de sujets comme : migration JS->TS ou mise en place de Storybook. »`,
		name: 'Lionel Tressens',
		job: 'CTO - Lounge Up',
	},
  {
    src: w2pdigitalicon,
    alt: 'W2P Digital',
    text: `« Pour une cette mission avec Pierre tout s'est bien passé : - Qualité des échanges - Respect des délais - Qualité du livrable final. Je recommande ! »`,
    name: 'Hugo Carrière',
    job: 'Chef de projet - W2P Digital',
  },
]
