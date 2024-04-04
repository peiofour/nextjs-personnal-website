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
			className={`border-2 border-secondary hover:bg-secondary text-lg text-${variant} hover:text-white transition-all duration-200 ease-in-out rounded-full px-6 py-2 font-medium`}
			onClick={() => router.push(link)}
		>
			{text}
		</button>
	)
}
