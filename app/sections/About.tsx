import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import undraw from '@/public/undraw_feeling_proud.svg'

export function About() {
	return (
		<>
			<Image
				src={undraw}
				alt="Illustration d'un homme fier"
				width={500}
				height={500}
				className='mx-auto -mb-32 px-10 lg:px-0'
			/>
			<div className='bg-primary py-32'>
				<div className='container flex max-w-4xl flex-col gap-5 text-center text-white'>
					<h2 className='text-3xl font-bold'>
						🚀 +8 clients accompagnés en 1 an
					</h2>
					<div className='flex flex-col gap-4 text-lg font-normal lg:text-xl'>
						{text.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					<h3 className='text-2xl font-semibold'>
						👇 Discutons de votre projet
					</h3>
					<div>
						<Link href='/contact'>
							<Button color='secondary' size='lg'>
								Me contacter
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

const text = [
	'Vous souhaitez développer une application web, une application mobile, une interface utilisateurs ou créer un SaaS de A à Z ?',
	"Je m'appelle Pierre et je suis développeur fullstack en freelance basé à Toulouse.",
	"Avec plus de 6 ans d'expérience dans le développement web, je vous accompagne dans la réalisation de vos projets, de la conception à la mise en ligne.",
]
