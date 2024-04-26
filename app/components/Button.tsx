'use client'

import { useRouter } from 'next/navigation'

interface Props {
	link: string
	text: string
	variant?: 'secondary' | 'white'
}

export function Button({ link, text, variant = 'secondary' }: Props) {
	const router = useRouter()
	return (
		<button
			className={`border-2 border-secondary text-lg hover:bg-secondary text-${variant} rounded-full px-6 py-2 font-medium transition-all duration-200 ease-in-out hover:text-white`}
			onClick={() => router.push(link)}
		>
			{text}
		</button>
	)
}
