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
				url: 'https://70bprfhdgzifxi22.public.blob.vercel-storage.com/og_image_pierrefournier.png',
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

	return (
		<div className='container pt-5 pb-10'>
			<h1 className='text-3xl font-bold pb-3'>Blog</h1>
			<h2 className='text-lg max-w-xl pb-10 text-gray-500'>
				Des articles sur le développement web, le design et la tech.
			</h2>
			<div className='flex'>
				{/* <div className='hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex'>
					<div className='px-6 py-4'>
						<Link href='/blog'>
							<h3 className='text-lg font-semibold'>Tous les posts</h3>
						</Link>
						<ul>
              {tags.map((tag) => (
                <li key={tag} className='my-3'>
                  <Link href={`/blog/tags/${tag}`} className='px-3 py-2'>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
					</div>
				</div> */}
				<div>
					{allPosts.map((post, index) => (
						<div key={index}>
							<Divider />

							<Link
								href={`/blog/${post.slug}`}
								className='flex gap-10 cursor-pointer py-10'
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
								<div className='flex-1 flex flex-col'>
									<p className='text-sm font-extralight text-gray-500'>
										{new Date(post.date).toLocaleDateString('fr-FR', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</p>
									<h3 className='text-2xl font-bold mb-3'>{post.title}</h3>
									<p className='text-md font-light text-gray-500 mb-5'>
										{post.description}
									</p>
									<div className='flex gap-3'>
										{post.tags.map((tag) => (
											<Chip color='secondary' key={tag}>
												{tag}
											</Chip>
										))}
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
