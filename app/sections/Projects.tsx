import { Button, ProjectCard, IProjectCard } from '@/app/components'
import data from '@/data/projects.json'

export function Projects() {
	const projects: IProjectCard[] = data.projects.slice(-3) // Keep only the last 3 projects

	return (
		<div className='container flex flex-col gap-10 py-14'>
			<div className='mx-auto max-w-3xl text-center'>
				<h2 className='pb-3 text-3xl font-bold'>
					{"Les projets sur lesquels j'ai travaillé"}
				</h2>
				<h3 className='text-lg text-gray-500'>
					{
						"Je travaille sur des projets personnels et professionnels. Voici quelques exemples de projets sur lesquels j'ai travaillé."
					}
				</h3>
			</div>
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
			<div className='mx-auto'>
				<Button link='/projets' text='Voir plus' />
			</div>
		</div>
	)
}
