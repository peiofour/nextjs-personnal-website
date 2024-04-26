import Image from 'next/image'
import Link from 'next/link'

export interface IProjectCard {
	title: string
	description: string
	images: string[]
	alt: string
	tags: string[]
	website?: string
	source?: string
	demo?: string
}

export function ProjectCard({
	title,
	description,
	alt,
	images,
	tags,
	website,
	source,
	demo,
}: IProjectCard) {
	return (
		<div
			className='flex h-[780px] max-w-[400px] flex-col gap-4 rounded-lg bg-white
      shadow-card transition-all duration-200 ease-in-out
      hover:shadow-card-hover'
		>
			<div className='relative h-[300px] w-full overflow-hidden rounded-t-lg bg-gray-300'>
				<Image
					fill
					style={{
						objectFit: 'cover',
					}}
					src={images[0]}
					alt={alt}
				/>
			</div>
			<div className='flex flex-[2] flex-col pb-4 pl-4 pr-8 text-center'>
				<div className='flex-1'>
					<h3 className='pb-1 text-xl font-bold'>{title}</h3>
					<p className='pb-3 text-base font-light leading-normal'>
						{description}
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='flex flex-wrap items-center justify-center gap-3'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='rounded-lg bg-gray-200 px-2 py-1 text-sm'
								tabIndex={0}
							>
								{tag}
							</span>
						))}
					</div>
					<div className='flex items-center justify-center gap-2 pt-3'>
						{website && (
							<Link
								className='rounded-lg px-2 py-1 text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-700'
								href={website}
								target='_blank'
							>
								Site web
							</Link>
						)}
						{source && (
							<Link
								className='rounded-lg px-2  py-1 text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-700'
								href={source}
								target='_blank'
							>
								Source
							</Link>
						)}
						{demo && (
							<Link
								className='rounded-lg px-2  py-1 text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-700'
								href={demo}
								target='_blank'
							>
								Démo
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
