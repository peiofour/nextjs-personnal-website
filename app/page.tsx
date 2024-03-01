'use client'

import { About, Head, Stack } from './sections'

export default function Page() {
	return (
		<div className="min-h-screen">
			<Head />
			<About />
			<Stack />
		</div>
	)
}
