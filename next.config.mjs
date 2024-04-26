/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: '70bprfhdgzifxi22.public.blob.vercel-storage.com',
				pathname: '**',
			},
		],
	},
}

export default withContentlayer(nextConfig)
