'use client'

import { Logo } from './Logo'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-primary h-72 py-20'>
			<div className='container flex flex-col gap-8'>
				<div className='mx-auto'>
					<Logo variant='white' size='lg' />
				</div>
				<div className='flex gap-3 mx-auto'>
					<Link
						href={'mailto:contact@pierrefournier.dev'}
						target='_blank'
						rel='noreferrer'
					>
						<MdEmail
							className='text-white hover:text-secondary transition-colors duration-300'
							size={25}
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/pierrefournier1/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedinIn
							className='text-white hover:text-secondary transition-colors duration-300'
							size={25}
						/>
					</Link>

					<Link
						href='https://www.github.com/peiofour'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub
							className='text-white hover:text-secondary transition-colors duration-300'
							size={25}
						/>
					</Link>
				</div>
				<div className='text-white text-center'>
					<p>&copy; {year} Pierre Fournier</p>
				</div>
			</div>
		</footer>
	)
}
