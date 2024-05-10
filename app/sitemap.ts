import { allPosts } from '@/.contentlayer/generated'

const URL = 'https://www.pierrefournier.dev'

export default async function sitemap() {
	const routes = [
		{
			url: `${URL}/`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
			priority: 1.0,
		},
		{
			url: `${URL}/blog`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${URL}/projets`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `${URL}/contact`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	]

	const posts = allPosts.map((post) => ({
		url: `${URL}/blog/${post.slug}`,
		lastModified: new Date(post.date).toISOString(),
		changeFrequency: 'monthly',
		priority: 0.7,
	}))

	return routes.concat(posts)
}
