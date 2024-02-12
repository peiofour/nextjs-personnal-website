'use client'

import { ThemeProvider } from 'next-themes'

export function ThemeContext({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
