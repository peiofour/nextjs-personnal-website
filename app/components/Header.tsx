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
			</NavbarContent>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link href='/projects'>Projets</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/contact'>Contact</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>

		// <header className='py-6 flex-initial'>
		// 	<div className='container flex flex-row justify-between'>
		// 		<div className='flex items-center'>
		// 			<Link href='/'>
		// 				<Logo variant='primary' />
		// 			</Link>
		// 		</div>
		// 		<div className='lg:flex hidden lg:gap-10 gap-3 text-lg font-normal no-underline'>
		// 			<Link href='/projects'>Projets</Link>
		// 			<Link href='/contact'>Contact</Link>
		// 		</div>
		// 	</div>
		// </header>
	)
}
