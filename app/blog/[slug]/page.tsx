import { allPosts } from '@/.contentlayer/generated'
import type { Post } from '@/.contentlayer/generated'
import { Chip, Image } from '@nextui-org/react'
import NextImage from 'next/image'

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const slug = params.slug
	const post = allPosts.find((p) => p.slug === slug) as Post

	return {
		title: `${post.title} - Pierre Fournier`,
		description: post.description,
		openGraph: {
			title: `${post.title} - Pierre Fournier`,
			siteName: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
			description: post.description,
			url: `https://www.pierrefournier.dev/blog/${post.slug}`,
			type: 'article',
			publishedTime: post.date,
			modifiedTime: post.date,
			locale: 'fr_FR',
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
					alt: post.alt,
				},
			],
			authors: [post.author],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@peiofour',
		},
		keywords: post.keywords,
		creator: 'Pierre Fournier',
		robots: 'index, follow',
	}
}

export const generateStaticParams = async () => {
	const path = allPosts.map((p) => ({ slug: p.slug }))
	return path
}

export default async function Page({ params }: { params: { slug: string } }) {
	const slug = params.slug
	const post = allPosts.find((p) => p.slug === slug) as Post

	return (
		<article>
			<div className='flex max-w-5xl flex-col gap-5 md:container'>
				<Image
					as={NextImage}
					src={post.image}
					alt={post.alt}
					width={1200}
					height={630}
					className='w-full rounded-none md:rounded-lg'
				/>

				<div className='flex flex-col gap-3 px-3 md:px-0'>
					<div className='flex flex-wrap gap-3'>
						{post.tags.map((tag) => (
							<Chip color='secondary' key={tag}>
								#{tag}
							</Chip>
						))}
					</div>
					<p className='text-gray-500'>
						Posté le{' '}
						{new Date(post.date).toLocaleDateString('fr-FR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}{' '}
						par {post.author}
					</p>
					<h1 className='text-2xl font-bold lg:text-4xl'>{post.title}</h1>
					<p className='text-medium leading-relaxed lg:text-lg'>
						{post.description}
					</p>
				</div>

				<div className='prose-code:wh prose prose-gray max-w-5xl lg:prose-lg prose-headings:px-3 prose-p:px-3 prose-em:text-medium prose-em:text-gray-500 prose-img:-ml-3 prose-img:mb-2 prose-img:w-svw prose-img:max-w-7xl md:prose-headings:px-0 md:prose-p:px-0 md:prose-img:max-w-[750px] md:prose-img:rounded-lg'>
					<div dangerouslySetInnerHTML={{ __html: post.body.html }} />
				</div>
			</div>
		</article>
	)
}
