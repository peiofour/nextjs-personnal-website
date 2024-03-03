'use client'

import { About, Companies, Head, Stack } from './sections'

export default function Page() {
	return (
		<div className="min-h-screen">
			<Head />
			<About />
			<Stack />
			<Companies />
		</div>
	)
}
