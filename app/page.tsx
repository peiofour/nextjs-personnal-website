'use client'

import { About, Collaborate, Companies, Head, Posts, Stack, Testimonials } from './sections'

export default function Page() {
	return (
		<div className='min-h-screen'>
			<Head />
			<About />
			<Stack />
			<Companies />
			<Testimonials />
			<Collaborate />
			<Posts />
		</div>
	)
}
