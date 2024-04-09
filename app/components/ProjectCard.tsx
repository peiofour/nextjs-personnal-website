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
			className='flex flex-col gap-4 h-[780px] max-w-[400px] shadow-card rounded-lg
      bg-white transition-all duration-200 ease-in-out
      hover:shadow-card-hover'
		>
			<div className='relative h-[300px] w-full bg-gray-300 rounded-t-lg overflow-hidden'>
				<Image
					fill
					style={{
						objectFit: 'cover',
					}}
					src={images[0]}
					alt={alt}
				/>
			</div>
			<div className='pl-4 pr-8 flex-[2] flex flex-col pb-4 text-center'>
				<div className='flex-1'>
					<h3 className='text-xl font-bold pb-1'>{title}</h3>
					<p className='font-light text-base pb-3 leading-normal'>
						{description}
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='flex items-center justify-center flex-wrap gap-3'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='text-sm bg-gray-200 px-2 py-1 rounded-lg'
								tabIndex={0}
							>
								{tag}
							</span>
						))}
					</div>
					<div className='flex items-center justify-center gap-2 pt-3'>
						{website && (
							<Link
								className='text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors duration-300 ease-in-out'
								href={website}
								target='_blank'
							>
								Site web
							</Link>
						)}
						{source && (
							<Link
								className='text-blue-500 hover:text-blue-700  hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors duration-300 ease-in-out'
								href={source}
								target='_blank'
							>
								Source
							</Link>
						)}
						{demo && (
							<Link
								className='text-blue-500 hover:text-blue-700  hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors duration-300 ease-in-out'
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
