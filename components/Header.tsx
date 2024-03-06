'use client'

import Link from 'next/link'
import { Logo } from './Logo'

export function Header() {
	return (
		<header className="py-6">
			<div className="container flex items-center justify-between">
				<Link href="/" className="text-4xl font-bold no-underline z-20 text-[#335AB5]">
					<Logo variant="primary" />
				</Link>
				<div className="hidden lg:flex gap-3 lg:gap-10 text-lg font-normal no-underline">
					<Link href="/blog">
						Blog
					</Link>
					<Link href="/contact">
						Contact
					</Link>
				</div>
			</div>
		</header>
	)
}