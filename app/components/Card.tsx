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
			className='flex flex-col gap-4 h-[450px] max-w-[400px] shadow-card rounded-lg
			bg-white cursor-pointer transition-all duration-200 ease-in-out
			hover:shadow-card-hover'
			onClick={() => router.push(`/blog/${slug}`)}
		>
			<div className='relative h-[210px] w-full bg-gray-300 rounded-t-lg overflow-hidden'>
				<Image width={400} height={210} src={image} alt={alt}/>
			</div>
			<div className='pl-4 pr-8'>
				<h3 className='text-xl font-bold pb-1'>{title}</h3>
				<h4 className='font-medium text-sm pb-3'>{date}</h4>
				<p className='font-normal text-base'>{description}</p>
			</div>
		</div>
	)
}
