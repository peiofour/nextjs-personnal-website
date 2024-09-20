'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react'
import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<header className='sticky top-0 z-50'>
			<Navbar
				maxWidth='2xl'
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
			>
				<NavbarBrand>
					<Link href='/'>
						<Logo variant='primary' />
					</Link>
				</NavbarBrand>
				<NavbarContent className='hidden gap-4 sm:flex' justify='end'>
					<NavbarItem>
						<Link href='/projets'>Portfolio</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href='/blog'>Blog</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href='mailto:hello@pierrefournier.dev'>Contact</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href='https://www.linkedin.com/in/pierrefournier1/'
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'
						>
							<FaLinkedinIn
								className='transition-colors duration-300 hover:text-secondary'
								size={20}
							/>
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href='https://www.github.com/peiofour'
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'
						>
							<FaGithub
								className='transition-colors duration-300 hover:text-secondary'
								size={20}
							/>
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarMenu>
					<NavbarMenuItem>
						<Link href='/projets' onClick={() => setIsMenuOpen(false)}>
							Projets
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href='/blog' onClick={() => setIsMenuOpen(false)}>
							Blog
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							href='mailto:hello@pierrefournier.dev'
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							href='https://www.linkedin.com/in/pierrefournier1/'
							target='_blank'
							rel='noreferrer'
							onClick={() => setIsMenuOpen(false)}
						>
							<FaLinkedinIn
								className='transition-colors duration-300 hover:text-secondary'
								size={20}
							/>
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							href='https://www.github.com/peiofour'
							target='_blank'
							rel='noreferrer'
							onClick={() => setIsMenuOpen(false)}
						>
							<FaGithub
								className='transition-colors duration-300 hover:text-secondary'
								size={20}
							/>
						</Link>
					</NavbarMenuItem>
				</NavbarMenu>
			</Navbar>
		</header>
	)
}
