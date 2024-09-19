import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'
import { Suspense, ReactNode } from 'react'
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
	title: 'Pierre Fournier - Développeur fullstack freelance à Toulouse',
	description:
		'Développeur fullstack freelance à Toulouse, spécialisé en React, Vue, Node.js, Next.js, je vous accompagne dans la réalisation de votre projet web ou mobile, de la conception à la mise en ligne.',
	openGraph: {
		title: 'Pierre Fournier - Développeur fullstack freelance à Toulouse',
		description:
			'Développeur fullstack freelance à Toulouse, spécialisé en React, Vue, Node.js, Next.js, je vous accompagne dans la réalisation de votre projet web ou mobile, de la conception à la mise en ligne.',
		url: 'https://www.pierrefournier.dev',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/f_auto,q_auto/n0crqaaearqdbsafq3jp',
				width: 1200,
				height: 630,
				alt: 'Pierre Fournier - Développeur fullstack freelance à Toulouse',
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
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='fr'>
			<body className={poppins.className}>
				<Providers>
					<Header />
					<Suspense fallback={<Loading />}>
						<main className='min-h-screen py-5 lg:py-10'>
              {children}
            </main>
					</Suspense>
					<Footer />
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
