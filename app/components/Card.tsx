'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export interface CardProps {
	title: string
	description: string
	image: string
	alt: string
	slug: string
	date: string
}

export function Card({
	title,
	description,
	alt,
	image,
	slug,
	date,
}: CardProps) {
	const router = useRouter()
	return (
		<div
			className='flex h-[450px] max-w-[400px] cursor-pointer flex-col gap-4 rounded-lg
			bg-white shadow-card transition-all duration-200 ease-in-out
			hover:shadow-card-hover'
			onClick={() => router.push(`/blog/${slug}`)}
		>
			<div className='relative h-[210px] w-full overflow-hidden rounded-t-lg bg-gray-300'>
				<Image width={400} height={210} src={image} alt={alt} />
			</div>
			<div className='pl-4 pr-8'>
				<h3 className='pb-1 text-xl font-bold'>{title}</h3>
				<h4 className='pb-3 text-sm font-medium'>{date}</h4>
				<p className='text-base font-normal'>{description}</p>
			</div>
		</div>
	)
}
