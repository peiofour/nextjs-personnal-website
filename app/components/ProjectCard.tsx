import NextImage from 'next/image'
import {
	Card,
	Image,
	CardHeader,
	CardBody,
	CardFooter,
	Chip,
} from '@nextui-org/react'

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
		<Card className='max-w-[400px] p-3'>
			<CardHeader>
				<Image
					as={NextImage}
					src={images[0]}
					alt={alt}
					width={400}
					height={300}
					className='h-[250px] object-cover'
					shadow='md'
				/>
			</CardHeader>
			<CardBody>
				<h3 className='mb-4 text-xl font-semibold'>{title}</h3>
				<p className='text-gray-500'>{description}</p>
			</CardBody>
			<CardFooter className='flex flex-col gap-3'>
				<div className='flex flex-wrap gap-3'>
					{tags.map((tag) => (
						<Chip size='sm' color='default' key={tag}>
							{tag}
						</Chip>
					))}
				</div>
			</CardFooter>
		</Card>
	)
}
