import {
	About,
	Collaborate,
	Companies,
	Head,
	Projects,
	Stack,
	Testimonials,
} from './sections'

export default function Page() {
	return (
		<>
			<Head />
			<About />
			<Stack />
			<Companies />
			<Testimonials />
			<Collaborate />
			<Projects />
		</>
	)
}
