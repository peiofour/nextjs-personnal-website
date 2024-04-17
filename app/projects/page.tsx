import { Metadata } from 'next'
import { ProjectCard, IProjectCard } from '../components'
import data from '@/data/projects.json'

export const metadata: Metadata = {
	title: 'Pierre Fournier - Projets',
	description:
		"Les projets sur lesquels j'ai travaillé, mes contributions open-source et mes projets personnels.",
	openGraph: {
		title: 'Pierre Fournier - Projets',
		description:
			"Les projets sur lesquels j'ai travaillé, mes contributions open-source et mes projets personnels.",
		url: 'https://www.pierrefournier.dev/projects',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://70bprfhdgzifxi22.public.blob.vercel-storage.com/og_image_pierrefournier.png',
				width: 1200,
				height: 630,
				alt: 'Pierre Fournier - Projets',
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
		<div className='container pt-5 pb-10'>
			<h1 className='text-3xl font-bold pb-3'>Projets</h1>
			<h2 className='text-lg max-w-xl pb-5'>
				Les projets sur lesquels j&apos;ai travaillé, mes contributions
				open-source et mes projets personnels.
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	)
}
