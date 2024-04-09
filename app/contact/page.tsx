import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur freelance à Toulouse - Contact',
	description:
		'Vous avez une proposition de collaboration, une idée de projet ou une question ? N’hésitez pas à me contacter.',
}

export default function Page() {
	return (
		<div className='container py-5'>
			<h1 className='text-3xl font-bold pb-3'>Contact</h1>
			<h2 className='text-lg max-w-xl pb-5'>
				Vous avez une proposition de collaboration, une idée de projet ou une
				question ? N’hésitez pas à me contacter.
			</h2>

			<div className='flex flex-col gap-3'>
				<h3 className='text-xl font-medium pb-3'>
					Email :{' '}
					<Link
						href='mailto:contact@pierrefournier.dev'
						className='text-blue-500'
					>
						contact@pierrefournier.dev
					</Link>
				</h3>
				<h3 className='text-xl font-medium pb-3'>
					<Link
						href='https://www.github.com/peiofour'
						target='_blank'
						rel='noreferrer'
						className='text-blue-500'
					>
						GitHub
					</Link>
				</h3>
				<h3 className='text-xl font-medium pb-3'>
					<Link
						href='https://www.linkedin.com/in/pierrefournier1'
						target='_blank'
						rel='noreferrer'
						className='text-blue-500'
					>
						LinkedIn
					</Link>
				</h3>
				<h3 className='text-xl font-medium pb-3'>
					<Link
						href='https://www.malt.fr/profile/pierrefournier2'
						target='_blank'
						rel='noreferrer'
						className='text-blue-500'
					>
						Malt
					</Link>
				</h3>
			</div>
		</div>
	)
}
