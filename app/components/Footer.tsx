import Link from 'next/link'
import { Logo } from './Logo'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export function Footer() {
	return (
		<footer className='h-72 bg-primary py-20'>
			<div className='container flex flex-col gap-8'>
				<div className='mx-auto'>
					<Link href='/'>
						<Logo variant='white' size='lg' />
					</Link>
				</div>
				<div className='mx-auto flex gap-3'>
					<Link
						href={'mailto:contact@pierrefournier.dev'}
						target='_blank'
						rel='noreferrer'
					>
						<MdEmail
							className='text-white transition-colors duration-300 hover:text-secondary'
							size={25}
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/pierrefournier1/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedinIn
							className='text-white transition-colors duration-300 hover:text-secondary'
							size={25}
						/>
					</Link>

					<Link
						href='https://www.github.com/peiofour'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub
							className='text-white transition-colors duration-300 hover:text-secondary'
							size={25}
						/>
					</Link>
				</div>
				<div className='text-center text-white'>
					<p>&copy; 2024 Pierre Fournier</p>
				</div>
			</div>
		</footer>
	)
}
