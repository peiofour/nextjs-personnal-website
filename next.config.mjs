/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
	images: {
		domains: [
			'via.placeholder.com',
			'res.cloudinary.com',
			'70bprfhdgzifxi22.public.blob.vercel-storage.com',
		],
	},
}

export default withContentlayer(nextConfig)
