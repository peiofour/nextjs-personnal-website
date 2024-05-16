'use client'

import React from 'react'
import { sendEmail } from './action'
import { Button, Input, Textarea } from '@nextui-org/react'

export interface IContactForm {
	name: string
	email: string
	message: string
}

export default function Page() {
	const [isLoading, setIsLoading] = React.useState(false)
	const [isSuccess, setIsSuccess] = React.useState(false)

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)
		const formData = new FormData(e.currentTarget)

		try {
			await sendEmail(formData)
			setIsSuccess(true)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='container py-5'>
			<h1 className='pb-3 text-3xl font-bold'>Gardons contact</h1>
			<h2 className='max-w-xl pb-10 text-lg text-gray-500'>
				Vous avez une proposition de collaboration, une idée de projet ou une
				question ?
			</h2>

			<form onSubmit={handleSubmit}>
				<div className='flex max-w-2xl flex-col space-y-4'>
					<div className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
						<div className='flex w-full flex-col'>
							<Input
								id='name'
								label='Nom'
								name='name'
								type='text'
								variant='bordered'
								isRequired
							/>
						</div>
						<div className='flex w-full flex-col'>
							<Input
								id='email'
								label='Email'
								name='email'
								type='email'
								variant='bordered'
								isRequired
							/>
						</div>
					</div>
					<div className='flex w-full flex-col'>
						<Textarea
							id='message'
							label='Message'
							name='message'
							placeholder='Entrer votre message ici'
              labelPlacement='outside'
							isRequired
							variant='bordered'
              minRows={5}
						/>
					</div>
					<Button
						type='submit'
						disableAnimation
						isLoading={isLoading}
						radius='md'
            size='lg'
            color='secondary'
					>
						Envoyer
					</Button>
				</div>
			</form>
			{isSuccess && (
				<div className='mt-3 text-green-500'>
					Votre message a été envoyé avec succès.
				</div>
			)}
		</div>
	)
}
