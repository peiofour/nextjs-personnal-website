'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faCloud } from '@fortawesome/free-solid-svg-icons'

export function Stack() {
	return (
		<div className='container -mt-16 mb-10 px-3'>
			<div className='rounded-xl shadow-card bg-white flex flex-col mx-auto max-w-xl lg:max-w-none lg:flex-row text-center divide-stroke divide-y lg:divide-y-0 lg:divide-x'>
				<div className='flex-1 flex flex-col gap-8 py-10 '>
					<span className='rounded-full size-20 bg-secondary text-white mx-auto flex items-center'>
						<FontAwesomeIcon icon={faCode} size='xl' className='mx-auto' />
					</span>
					<h2 className='font-bold text-2xl'>Développeur front-end</h2>
					<div className='text-lg grow flex flex-col gap-4 px-10'>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Framework :</h3>
							<p>React, Vue, Next.js, React-Native, Ionic</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Testing :</h3>
							<p>Cypress, Jest, React Testing Library</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Style :</h3>
							<p>CSS3, Tailwind CSS, Sass, styled-components</p>
						</div>
					</div>
				</div>
				<div className='flex-1 flex flex-col gap-8 py-10'>
					<span className='rounded-full size-20 bg-secondary text-white mx-auto flex items-center'>
						<FontAwesomeIcon icon={faServer} size='xl' className='mx-auto' />
					</span>
					<h2 className='font-bold text-2xl'>Développeur back-end</h2>
					<div className='text-lg grow flex flex-col gap-4 px-10'>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Framework :</h3>
							<p>Ruby on Rails, Node.js, Express, Nest.js, Parse Server</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Langages :</h3>
							<p>JavaScript, TypeScript, Ruby, Python</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Base de données :</h3>
							<p>MongoDB, PostgreSQL, MySQL, Supabase, Firebase</p>
						</div>
					</div>
				</div>
				<div className='flex-1 flex flex-col gap-8 py-10'>
					<span className='rounded-full size-20 bg-secondary text-white mx-auto flex items-center'>
						<FontAwesomeIcon icon={faCloud} size='xl' className='mx-auto' />
					</span>
					<h2 className='font-bold text-2xl'>DevOps / Cloud</h2>
					<div className='text-lg grow flex flex-col gap-4 px-10'>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>DevOps :</h3>
							<p>
								Docker, Terraform, Travis CI, GitHub Actions, GitLab CI, Circle
								CI
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>Cloud provider :</h3>
							<p>AWS, Google Cloud, Azure, OVH, Scaleway</p>
						</div>
						<div className='flex-1'>
							<h3 className='text-primary font-semibold'>PaaS :</h3>
							<p>Heroku, Vercel, Netlify, Scalingo, DigitalOcean</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
