import { Button } from '@/app/components'

export function Collaborate() {
	return (
		<div className='bg-primary'>
			<div className='container text-center text-white py-10 flex flex-col gap-8 max-w-3xl'>
				<h2 className='font-bold text-2xl lg:text-3xl'>Collaborer avec moi</h2>
				<p className='text-lg lg:text-xl'>
					Vous avez un projet à développer ? Des fonctionnalités à ajouter dans
					votre application ? Des corrections à effectuer sur votre site ?<br />
					Discutons-en ensemble.
				</p>
				<div>
					<Button link='/contact' text='Démarrer' variant='white' />
				</div>
			</div>
		</div>
	)
}
