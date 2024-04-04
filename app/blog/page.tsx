import { CardProps, Card } from '@/app/components'

export default function Page() {
	return (
		<div className='min-h-screen container py-5'>
			<h1 className='text-3xl font-bold pb-3'>Derniers articles</h1>
			<h2 className='text-lg max-w-xl'>
				Je publie sur ce blog des articles sur le web, sur les nouvelles
				technologies, sur les startups et sur l’entreprenariat.
			</h2>
			<div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{testArticles.length > 0 ? (
					testArticles.map((article, index) => (
						<Card key={index} {...article} />
					))
				) : (
					<div className='text-center text-lg font-base col-span-3'>
						Aucun article pour le moment
					</div>
				)}
			</div>
		</div>
	)
}

const testArticles: CardProps[] = [
	{
		title: 'Comment j’ai créé mon entreprise à 22 ans',
		description:
			'Je vous partage mon expérience sur la création de ma première entreprise, à 22 ans, et les difficultés que j’ai rencontrées',
		date: '12 février 2021',
		image: 'https://via.placeholder.com/400x210',
		alt: 'placeholder',
		slug: 'comment-j-ai-cree-mon-entreprise-a-22-ans',
	},
	{
		title: 'Les nouvelles technologies en 2021',
		description:
			'Un article sur les nouvelles technologies qui vont révolutionner le web en 2021',
		date: '12 février 2021',
		image: 'https://via.placeholder.com/400x210',
		alt: 'placeholder',
		slug: 'les-nouvelles-technologies-en-2021',
	},
	{
		title: 'Comment j’ai créé mon entreprise à 22 ans',
		description:
			'Je vous partage mon expérience sur la création de ma première entreprise, à 22 ans, et les difficultés que j’ai rencontrées',
		date: '12 février 2021',
		image: 'https://via.placeholder.com/400x210',
		alt: 'placeholder',
		slug: 'comment-j-ai-cree-mon-entreprise-a-22-ans',
	},
]
