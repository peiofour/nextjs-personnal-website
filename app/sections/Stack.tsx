import { FaCode, FaServer, FaCloud } from 'react-icons/fa6'

export function Stack() {
	return (
		<div className='container -mt-16 mb-10 px-3'>
			<div className='mx-auto flex max-w-xl flex-col divide-y divide-stroke rounded-xl bg-white text-center shadow-card lg:max-w-none lg:flex-row lg:divide-x lg:divide-y-0'>
				<div className='flex flex-1 flex-col gap-8 py-10 '>
					<span className='mx-auto flex size-20 items-center rounded-full bg-secondary text-white'>
						<FaCode size='2em' className='mx-auto' />
					</span>
					<h2 className='text-2xl font-bold'>Développeur front-end</h2>
					<div className='flex grow flex-col gap-4 px-10 text-lg'>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Framework :</h3>
							<p>React, Vue, Next.js, React-Native, Ionic</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Testing :</h3>
							<p>Cypress, Jest, React Testing Library</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Style :</h3>
							<p>CSS3, Tailwind CSS, Sass, styled-components</p>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-col gap-8 py-10'>
					<span className='mx-auto flex size-20 items-center rounded-full bg-secondary text-white'>
						<FaServer size='2em' className='mx-auto' />
					</span>
					<h2 className='text-2xl font-bold'>Développeur back-end</h2>
					<div className='flex grow flex-col gap-4 px-10 text-lg'>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Framework :</h3>
							<p>Ruby on Rails, Node.js, Express, Nest.js, Parse Server</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Langages :</h3>
							<p>JavaScript, TypeScript, Ruby, Python</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Base de données :</h3>
							<p>MongoDB, PostgreSQL, MySQL, Supabase, Firebase</p>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-col gap-8 py-10'>
					<span className='mx-auto flex size-20 items-center rounded-full bg-secondary text-white'>
						<FaCloud size='2em' className='mx-auto' />
					</span>
					<h2 className='text-2xl font-bold'>DevOps / Cloud</h2>
					<div className='flex grow flex-col gap-4 px-10 text-lg'>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>DevOps :</h3>
							<p>
								Docker, Terraform, Travis CI, GitHub Actions, GitLab CI, Circle
								CI
							</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>Cloud provider :</h3>
							<p>AWS, Google Cloud, Azure, OVH, Scaleway</p>
						</div>
						<div className='flex-1'>
							<h3 className='font-semibold text-primary'>PaaS :</h3>
							<p>Heroku, Vercel, Netlify, Scalingo, DigitalOcean</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
