import { allPosts } from '@/.contentlayer/generated'
import type { Post } from '@/.contentlayer/generated'
import { Image } from '@nextui-org/react'
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
			siteName:
				'Pierre Fournier - Développeur front-end React & Vue freelance à Toulouse',
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
		<div className='mt-20 max-w-5xl pb-10 md:container'>
			<Image
				as={NextImage}
				src={post.image}
				alt={post.alt}
				width={750}
				height={0}
				className='mb-2 w-full rounded-none md:rounded-lg'
			/>
			<em className='px-3 text-gray-500 md:px-0'>{post.alt}</em>
			<p className=' mt-10 px-3 pb-3 text-gray-500 md:px-0'>
				{new Date(post.date).toLocaleDateString('fr-FR', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
			<h1 className='mb-5 px-3 text-2xl font-bold md:px-0 lg:text-4xl'>
				{post.title}
			</h1>
			<p className='px-3 pb-10 text-medium leading-relaxed md:px-0 lg:text-lg'>
				{post.description}
			</p>

			<article className='prose prose-gray max-w-5xl lg:prose-lg prose-headings:px-3 prose-p:px-3 prose-em:text-medium prose-em:text-gray-500 prose-img:mb-2 prose-img:-ml-3 prose-img:w-full prose-img:max-w-7xl prose-img:w-svw md:prose-headings:px-0 md:prose-p:px-0 md:prose-img:max-w-[750px] md:prose-img:rounded-lg'>
				<div dangerouslySetInnerHTML={{ __html: post.body.html }} />
			</article>
		</div>
	)
}
