import NextImage from 'next/image'
import Link from 'next/link'
import { Divider, Image } from '@nextui-org/react'
import { allPosts } from '@/.contentlayer/generated'

export default function Page() {
	return (
		<div className='container pt-5 pb-10'>
			<h1 className='text-3xl font-bold pb-3'>Blog</h1>
			<h2 className='text-lg max-w-xl pb-10'>
				Des articles sur le développement web, le design et la tech.
			</h2>
			<div className='gap-5'>
				{allPosts.map((post, index) => (
					<div key={index}>
						<Divider />

						<Link
							href={`/blog/${post.slug}`}
							className='flex gap-10 cursor-pointer py-10'
						>
							<div className=''>
								<Image
									as={NextImage}
									src={post.image}
									alt={post.alt}
									width={300}
									height={100}
									className='rounded-lg'
								/>
							</div>
							<div className='flex-1 flex flex-col gap-3'>
								<h3 className='text-2xl font-bold'>{post.title}</h3>
								<p className='text-md'>{post.description}</p>
								<p className='text-sm'>
									{new Date(post.date).toLocaleDateString('fr-FR', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
