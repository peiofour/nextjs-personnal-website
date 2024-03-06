'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoBlue from '@/public/logo_pierre_blue.svg'
import logoWhite from '@/public/logo_pierre_white.svg'

interface Props {
	variant: 'primary' | 'white',
	size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant, size }: Props) {
	return (
		<Link href="/" className="text-4xl font-extrabold no-underline z-20">
			<Image
				src={variant === 'primary' ? logoBlue : logoWhite}
				alt="Logo de Pierre Fournier"
				width={size === 'sm' ? 100 : size === 'md' ? 150 : 200}
			/>
		</Link>
	)
}