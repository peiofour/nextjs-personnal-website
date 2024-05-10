import { Metadata } from 'next'
import { ProjectCard, IProjectCard } from '../components'
import data from '@/data/projects.json'

export const metadata: Metadata = {
	title: 'Projets - Pierre Fournier',
	description:
		"Les projets sur lesquels j'ai travaillé, mes contributions open-source et mes projets personnels.",
	openGraph: {
		title: 'Projets - Pierre Fournier',
		description:
			"Les projets sur lesquels j'ai travaillé, mes contributions open-source et mes projets personnels.",
		url: 'https://www.pierrefournier.dev/projects',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/f_auto,q_auto/n0crqaaearqdbsafq3jp',
				width: 1200,
				height: 630,
				alt: 'Projets - Pierre Fournier',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@peiofour',
	},
	keywords: [
		'Projets',
		'Développeur front-end',
		'Développeur front-end freelance',
		'Développeur front-end freelance Toulouse',
		'LoungeUp',
		'People Vox',
		'React',
		'React Native',
		'Next.js',
		'Vue',
		'TypeScript',
		'JavaScript',
		'Ruby on Rails',
	],
	robots: 'index, follow',
	creator: 'Pierre Fournier',
}

export default function Page() {
	const projects: IProjectCard[] = data.projects

	return (
		<div className='container pb-10 pt-5'>
			<h1 className='pb-3 text-3xl font-bold'>Projets</h1>
			<h2 className='max-w-xl pb-5 text-lg'>
				Les projets sur lesquels j&apos;ai travaillé, mes contributions
				open-source et mes projets personnels.
			</h2>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	)
}
