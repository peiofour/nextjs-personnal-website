import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Providers } from './providers'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur front-end React & Vue freelance à Toulouse',
	description:
		"Développeur front-end senior à Toulouse avec 6 ans d'expérience. Spécialisé en React, Next.js, Vue, TypeScript, Ruby on Rails, React-Native et Node.js, je transforme vos projets en solutions performantes et innovantes.",
	openGraph: {
		title: 'Pierre Fournier - Développeur front-end React & Vue freelance à Toulouse',
		description:
			"Développeur front-end senior à Toulouse avec 6 ans d'expérience. Spécialisé en React, Next.js, Vue, TypeScript, Ruby on Rails, React-Native et Node.js, je transforme vos projets en solutions performantes et innovantes.",
		url: 'https://www.pierrefournier.dev',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://70bprfhdgzifxi22.public.blob.vercel-storage.com/og_image_pierrefournier.png',
				width: 1200,
				height: 630,
				alt: 'Pierre Fournier - Développeur front-end React & Vue freelance à Toulouse',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@peiofour',
	},
	keywords: [
		'Développeur front-end',
    'Développeur front-end freelance',
    'Développeur front-end freelance Toulouse',
    'Développeur React Toulouse',
    'Développeur Next.js Toulouse',
    'Développeur Vue Toulouse',
		'React',
    'React Native',
		'Next.js',
		'Vue',
		'TypeScript',
		'JavaScript',
		'Ruby on Rails',
		'Node.js',
		'Tailwind CSS',
		'Développeur web',
		'Développeur mobile',
		'Développeur freelance',
		'Toulouse',
		'Occitanie',
	],
	creator: 'Pierre Fournier',
  robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID || ''

	return (
		<html lang='fr'>
			<body className={poppins.className}>
				<Providers>
					<div className='min-h-screen flex flex-col'>
						<Header />
						<main className='flex-1'>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</main>
						<Footer />
					</div>
					<Analytics />
				</Providers>
			</body>
			<GoogleAnalytics gaId={googleAnalyticsId} />
		</html>
	)
}
