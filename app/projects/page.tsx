import { Metadata } from 'next'
import { ProjectCard, IProjectCard } from '../components'
import data from '@/data/projects.json'

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur freelance à Toulouse - Projets',
	description:
		"Les projets sur lesquels j'ai travaillé, mes contributions open-source et mes projets personnels.",
}

export default function Page() {
	const projects: IProjectCard[] = data.projects

	function projectByTag(tag: string) {
		return projects.filter((project) => project.tags.includes(tag))
	}

	return (
		<div className='container pt-5 pb-10'>
			<h1 className='text-3xl font-bold pb-10'>Projets</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	)
}
