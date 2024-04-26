import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.pierrefournier.dev/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1.0,
		},
		{
			url: 'https://www.pierrefournier.dev/projects',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://www.pierrefournier.dev/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7,
		},
	]
}
