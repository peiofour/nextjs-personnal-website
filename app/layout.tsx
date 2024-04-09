import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import { ThemeContext } from '@/context'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'
import { Suspense } from 'react'
import Loading from './loading'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur freelance à Toulouse',
	description:
		"Pierre Fournier, développeur freelance basé à Toulouse avec plus de 6 ans d'expérience dans la création d'applications web et mobiles sur mesure. J'ai une solide expertise en React, Next.js, Vue, Ruby on Rails et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
	openGraph: {
		title: 'Pierre Fournier - Développeur freelance à Toulouse',
		description:
			"Pierre Fournier, développeur freelance basé à Toulouse avec plus de 6 ans d'expérience dans la création d'applications web et mobiles sur mesure. J'ai une solide expertise en React, Next.js, Vue, Ruby on Rails et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
		url: 'https://pierrefournier.dev',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://70bprfhdgzifxi22.public.blob.vercel-storage.com/og_image_pierrefournier.png',
				width: 1200,
				height: 630,
				alt: 'Pierre Fournier - Développeur freelance à Toulouse',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@peiofour',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='fr'>
			<body className={poppins.className}>
				<ThemeContext>
					<main className='min-h-screen flex flex-col'>
						<Header />
						<div className='flex-1'>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</div>
						<Footer />
					</main>
				</ThemeContext>
			</body>
		</html>
	)
}
