import { Button, Card, CardProps } from '@/app/components'

export function Projects() {
	return (
		<div className='container py-14 flex flex-col gap-10'>
			<div className='max-w-3xl text-center mx-auto'>
				<h1 className='text-3xl font-bold pb-3'>
					{"Les projets sur lesquels j'ai travaillé"}
				</h1>
				<h2 className='text-lg'>
          {"Je travaille sur des projets personnels et professionnels. Voici quelques exemples de projets sur lesquels j'ai travaillé."}
        </h2>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'></div>
			<div className='mx-auto'>
				<Button link='/blog' text="Voir plus" />
			</div>
		</div>
	)
}
