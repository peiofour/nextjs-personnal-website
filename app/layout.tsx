import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContext } from '@/context'
import { Header } from '@/components'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pierre Fournier - Développeur freelance à Toulouse',
	description:
		'Je suis développeur freelance, je vis à Toulouse dans le sud de la France. Ici je publie des articles de blog sur la tech, les startups, la politique, le numérique en France et dans le monde.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fr'>
			<body>
				<Header />
			</body>
		</html>
	)
}
