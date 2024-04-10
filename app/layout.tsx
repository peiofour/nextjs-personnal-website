import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
	description:
		"Expert Frontend avec 6 ans d'expérience, spécialisé dans les technologies web modernes et innovantes. J'ai une solide expertise en React, Next.js, Vue, TypeScript, Ruby on Rails et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
	openGraph: {
		title: 'Pierre Fournier - Développeur front-end freelance à Toulouse',
		description:
			"Expert Frontend avec 6 ans d'expérience, spécialisé dans les technologies web modernes et innovantes. J'ai une solide expertise en React, Next.js, Vue, TypeScript, Ruby on Rails et Node.js, ce qui me permet d'accompagner mes clients dans la concrétisation de leurs projets et de leur apporter des solutions efficaces et performantes. Je peux aussi intervenir dans un cadre moins technique, pour conseiller sur l'ergonomie et la conception de sites et d'applications.",
		url: 'https://www.pierrefournier.dev',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://70bprfhdgzifxi22.public.blob.vercel-storage.com/og_image_pierrefournier.png',
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
		'Freelance',
		'React',
		'Next.js',
		'Vue',
		'TypeScript',
		'JavaScript',
		'Ruby on Rails',
		'Node.js',
		'Tailwind CSS',
		'Toulouse',
		'Occitanie',
		'France',
		'Front-end',
		'Développeur',
		'Développeur web',
		'Développeur front-end',
		'Développeur frontend',
		'Développeur mobile',
		'Développeur React',
		'Développeur Next.js',
		'Développeur Vue',
		'Développeur Ruby on Rails',
		'Développeur Node.js',
		'Développeur web Toulouse',
		'Développeur mobile Toulouse',
		'Développeur React Toulouse',
		'Développeur Next.js Toulouse',
		'Développeur Vue Toulouse',
		'Développeur Ruby on Rails Toulouse',
		'Développeur Node.js Toulouse',
		'Développeur freelance',
		'Développeur freelance Toulouse',
		'Développeur front-end freelance',
		'Développeur front-end freelance Toulouse',
		'Développeur web freelance',
		'Développeur web freelance Toulouse',
		'Développeur mobile freelance',
		'Développeur mobile freelance Toulouse',
		'Développeur React freelance',
		'Développeur React freelance Toulouse',
		'Développeur Next.js freelance',
		'Développeur Next.js freelance Toulouse',
		'Développeur Vue freelance',
		'Développeur Vue freelance Toulouse',
		'Développeur Ruby on Rails freelance',
		'Développeur Ruby on Rails freelance Toulouse',
		'Développeur Node.js freelance',
		'Développeur Node.js freelance Toulouse',
		'Développeur web freelance Occitanie',
	],
	creator: 'Pierre Fournier',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='fr'>
			<body className={`${poppins.className} min-h-screen flex flex-col`}>
				<Header />
				<main className='flex-1'>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
