import { Button } from '@nextui-org/react'
import Link from 'next/link'

export function Collaborate() {
	return (
		<div className='bg-primary'>
			<div className='container flex max-w-3xl flex-col gap-8 py-10 text-center text-white'>
				<h2 className='text-2xl font-bold lg:text-3xl'>Collaborer avec moi</h2>
				<p className='text-lg lg:text-xl'>
					Vous avez un projet à développer ? Des fonctionnalités à ajouter dans
					votre application ? Des corrections à effectuer sur votre site ?<br />
					Discutons-en ensemble.
				</p>
				<Link href='/contact'>
          <Button
            color='secondary'
            radius='md'
            size='lg'
          >
            Contactez-moi
          </Button>
        </Link>
			</div>
		</div>
	)
}
