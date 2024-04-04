import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import { ThemeContext } from '@/context'
import { Footer, Header } from '@/app/components'
import '@/styles/globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur freelance à Toulouse',
	description:
		'Je suis développeur freelance, je vis à Toulouse dans le sud de la France. Ici je publie des articles de blog sur la tech, les startups, la politique, le numérique en France et dans le monde.',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='fr'>
			<body className={poppins.className}>
				<ThemeContext>
					<Header />
					{children}
					<Footer />
				</ThemeContext>
			</body>
		</html>
	)
}
