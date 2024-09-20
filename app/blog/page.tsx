import NextImage from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Divider, Image, Chip } from '@nextui-org/react'
import { allPosts } from '@/.contentlayer/generated'

export const metadata: Metadata = {
	title: 'Blog - Pierre Fournier',
	description:
		'Des articles sur le développement web, le design et la tech. Découvrez les dernières tendances et les meilleures pratiques pour améliorer vos compétences en développement.',
	openGraph: {
		title: 'Blog - Pierre Fournier',
		description:
			'Des articles sur le développement web, le design et la tech. Découvrez les dernières tendances et les meilleures pratiques pour améliorer vos compétences en développement.',
		url: 'https://www.pierrefournier.dev/blog',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/f_auto,q_auto/n0crqaaearqdbsafq3jp',
				width: 1200,
				height: 630,
				alt: 'Blog - Pierre Fournier',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@peiofour',
	},
	keywords: [
		'Blog',
		'Blog tech',
		'Tutoriels développement',
		'Tutoriels React',
		'Tutoriels Javascript',
		'React',
		'React Native',
		'Next.js',
		'Vue',
		'TypeScript',
		'JavaScript',
		'Ruby on Rails',
		'Node.js',
		'Tailwind CSS',
		'Développement web',
		'Développement mobile',
		'Développement front-end',
		'Développement back-end',
	],
	creator: 'Pierre Fournier',
	robots: 'index, follow',
}

export default function Page() {
	// const tags = allPosts.map((post) => post.tags).flat()

	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	)

	return (
		<div className='container'>
			<h1 className='pb-3 text-3xl font-bold'>Blog</h1>
			<h2 className='max-w-xl pb-10 text-lg text-gray-500'>
				Des articles sur le développement web, le design et la tech.
			</h2>
			<section>
				{sortedPosts.map((post, index) => (
					<div key={index}>
						<Divider />

						<Link
							href={`/blog/${post.slug}`}
							className='flex cursor-pointer gap-10 py-10'
						>
							<div className='hidden md:block'>
								<Image
									as={NextImage}
									src={post.image}
									alt={post.alt}
									width={300}
									height={100}
									className='rounded-lg'
								/>
							</div>
							<div className='flex flex-1 flex-col'>
								<p className='text-sm font-extralight text-gray-500'>
									{new Date(post.date).toLocaleDateString('fr-FR', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</p>
								<h3 className='mb-3 text-xl font-bold md:text-2xl'>
									{post.title}
								</h3>
								<p className='text-md mb-5 font-light text-gray-500'>
									{post.description}
								</p>
								<div className='flex flex-wrap gap-3'>
									{post.tags.map((tag) => (
										<Chip color='secondary' key={tag}>
											#{tag}
										</Chip>
									))}
								</div>
							</div>
						</Link>
					</div>
				))}
			</section>
		</div>
	)
}
