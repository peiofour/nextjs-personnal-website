import { Button, ProjectCard, IProjectCard } from '@/app/components'
import data from '@/data/projects.json'

export function Projects() {
  const projects: IProjectCard[] = data.projects.slice(-3) // Keep only the last 3 projects

  return (
    <div className='container py-14 flex flex-col gap-10'>
      <div className='max-w-3xl text-center mx-auto'>
        <h2 className='text-3xl font-bold pb-3'>
          {"Les projets sur lesquels j'ai travaillé"}
        </h2>
        <h3 className='text-lg'>
          {
            "Je travaille sur des projets personnels et professionnels. Voici quelques exemples de projets sur lesquels j'ai travaillé."
          }
        </h3>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className='mx-auto'>
        <Button link='/projects' text='Voir plus' />
      </div>
    </div>
  )
}
