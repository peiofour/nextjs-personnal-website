'use client'

import Link from 'next/link'

// Use Migra Font for the logo

interface Props {
	variant: 'primary' | 'secondary'
}

export function Logo({ variant }: Props) {
	return (
		<Link href="/" className="text-4xl font-extrabold no-underline z-20">
			<span>Pierre Fournier</span>
		</Link>
	)
}