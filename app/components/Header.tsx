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
		<Navbar maxWidth='xl'>
			<NavbarContent justify='start'>
				<NavbarBrand>
					<Link href='/'>
						<Logo variant='primary' />
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className='hidden sm:flex gap-4' justify='end'>
				<NavbarItem>
					<Link href='/projects'>Projets</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/contact'>Contact</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						href='https://www.linkedin.com/in/pierrefournier1/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedinIn
							className='hover:text-secondary transition-colors duration-300'
							size={20}
						/>
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						href='https://www.github.com/peiofour'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub
							className='hover:text-secondary transition-colors duration-300'
							size={20}
						/>
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link href='/projects'>Projets</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/contact'>Contact</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						href='https://www.linkedin.com/in/pierrefournier1/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedinIn
							className='hover:text-secondary transition-colors duration-300'
							size={20}
						/>
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						href='https://www.github.com/peiofour'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub
							className='hover:text-secondary transition-colors duration-300'
							size={20}
						/>
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	)
}
