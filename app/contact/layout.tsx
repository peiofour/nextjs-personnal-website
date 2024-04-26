import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Contact - Pierre Fournier',
	description:
		'Vous avez une proposition de collaboration, une idée de projet ou une question ? N’hésitez pas à me contacter.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
