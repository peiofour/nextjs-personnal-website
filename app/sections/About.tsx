import Image from 'next/image'
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
			<div className='bg-primary py-28'>
				<div className='container flex max-w-4xl flex-col gap-5 text-center text-white'>
					<h2 className='text-3xl font-bold'>Bonjour,</h2>
					<div className='flex flex-col gap-4 text-lg font-normal lg:text-xl'>
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
	"Je m’appelle Pierre Fournier. Je suis un développeur freelance basé à Toulouse avec plus de 6 ans d'expérience, spécialisé dans les technologies web modernes et innovantes.",
	'Je suis passionné par le développement web et mobile, et je mets à profit mes compétences pour aider mes clients à concrétiser leurs projets et à atteindre leurs objectifs.',
	"J'ai une solide expertise en React, Vue, Javascript, TypeScript, Next.js, Ruby on Rails, React-native et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
]
