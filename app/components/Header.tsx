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
		<Navbar maxWidth='2xl'>
			<NavbarContent justify='start'>
				<NavbarBrand>
					<Link href='/'>
						<Logo variant='primary' />
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className='hidden gap-4 sm:flex' justify='end'>
				<NavbarItem>
					<Link href='/services'>Services</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/projets'>Portfolio</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/blog'>Blog</Link>
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
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link href='/services'>Services</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/projets'>Projets</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/blog'>Blog</Link>
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
					>
						<FaGithub
							className='transition-colors duration-300 hover:text-secondary'
							size={20}
						/>
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	)
}
