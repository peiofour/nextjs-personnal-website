'use client'

import Image from 'next/image'
import peoplevoxicon from '@/public/companies/peoplevox.svg'

export function Testimonials() {
	return (
		<div className='bg-tertiary'>
			<div className='container flex flex-col py-20 text-center'>
				<h1 className='font-bold text-3xl'>Témoignages</h1>
			</div>
			<div>
				<CarousselItem
					src={peoplevoxicon}
					alt='People Vox'
					text='test'
					name='Antoine Cormouls'
					job='CTO - People Vox'
				/>
			</div>
		</div>
	)
}

function CarousselItem({
	src,
	alt,
	text,
	name,
	job,
}: Readonly<{
	src: string
	alt: string
	text: string
	name: string
	job: string
}>) {
	return (
		<div className='flex flex-col text-center'>
			<div className='mx-auto my-auto'>
				<Image loading='lazy' src={src} alt={alt} width={180} />
			</div>
			<p>{text}</p>
			<div>
				<h1 className='font-bold'>{name}</h1>
				<h2>{job}</h2>
			</div>
		</div>
	)
}
