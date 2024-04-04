import Link from 'next/link'
import { Logo } from './Logo'

export function Header() {
	return (
		<header className='py-6'>
			<div className='container flex flex-row justify-between'>
				<div className='flex items-center'>
					<Link href='/'>
						<Logo variant='primary' />
					</Link>
				</div>
				<div className='lg:flex hidden lg:gap-10 gap-3 text-lg font-normal no-underline'>
					<Link href='/blog'>Blog</Link>
					<Link href='/contact'>Contact</Link>
				</div>
			</div>
		</header>
	)
}
