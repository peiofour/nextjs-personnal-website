import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from './providers'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
	description:
		'Développeur freelance spécialisé en React, Vue, TypeScript, Next.js, Ruby on Rails, React-Native et Node.js, je transforme vos projets en solutions performantes et innovantes.',
	openGraph: {
		title: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
		description:
			'Développeur freelance spécialisé en React, Vue, TypeScript, Next.js, Ruby on Rails, React-Native et Node.js, je transforme vos projets en solutions performantes et innovantes.',
		url: 'https://www.pierrefournier.dev',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/f_auto,q_auto/n0crqaaearqdbsafq3jp',
				width: 1200,
				height: 630,
				alt: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@peiofour',
	},
	keywords: [
		'Développeur front-end',
		'Développeur fullstack',
		'Développeur fullstack freelance',
		'Développeur fullstack freelance Toulouse',
		'Développeur front-end freelance',
		'Développeur front-end freelance Toulouse',
		'Développeur web freelance',
		'Développeur web freelance Toulouse',
		'Développeur freelance Toulouse',
		'Développeur React Toulouse',
		'Développeur Next.js Toulouse',
		'Développeur Vue Toulouse',
		'Développeur React',
		'Développeur React Native',
		'Développeur Next.js',
		'Développeur Vue',
		'Développeur TypeScript',
		'Développeur Javascript',
		'Développeur Ruby on Rails',
		'Développeur Node.js',
		'Développeur Tailwind CSS',
		'Développeur web',
		'Développeur mobile',
		'Développeur freelance',
	],
	creator: 'Pierre Fournier',
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='fr'>
			<body className={poppins.className}>
				<Providers>
					<div className='flex min-h-screen flex-col'>
						<Header />
						<main className='flex-1'>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</main>
						<Footer />
					</div>
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
