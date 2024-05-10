'use client'

import React from 'react'
import { sendEmail } from './action'
import { Button } from '@nextui-org/react'

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
			<h1 className='pb-3 text-3xl font-bold'>Contact</h1>
			<h2 className='max-w-xl pb-10 text-lg text-gray-500'>
				Vous avez une proposition de collaboration, une idée de projet ou une
				question ?
			</h2>

			<form onSubmit={handleSubmit}>
				<div className='flex max-w-2xl flex-col space-y-4'>
					<div className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
						<div className='flex w-full flex-col'>
							<label htmlFor='name' className='text-sm font-semibold'>
								Nom
							</label>
							<input
								id='name'
								name='name'
								type='text'
								className='rounded-md border border-gray-300 p-2'
								required
							/>
						</div>
						<div className='flex w-full flex-col'>
							<label htmlFor='email' className='text-sm font-semibold'>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								className='rounded-md border border-gray-300 p-2'
								required
							/>
						</div>
					</div>
					<div className='flex w-full flex-col'>
						<label htmlFor='message' className='text-sm font-semibold'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='rounded-md border border-gray-300 p-2'
							required
						/>
					</div>
					<Button
						className='rounded-md bg-secondary text-sm font-semibold text-white'
						type='submit'
						disableAnimation
						isLoading={isLoading}
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
