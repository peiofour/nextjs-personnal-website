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
			<h1 className='text-3xl font-bold pb-3'>Contact</h1>
			<h2 className='text-lg max-w-xl pb-5'>
				Vous avez une proposition de collaboration, une idée de projet ou une
				question ?
			</h2>

			<form onSubmit={handleSubmit}>
				<div className='flex flex-col space-y-4 max-w-2xl'>
					<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
						<div className='flex flex-col w-full'>
							<label htmlFor='name' className='text-sm font-semibold'>
								Nom
							</label>
							<input
								id='name'
								name='name'
								type='text'
								className='border border-gray-300 rounded-md p-2'
								required
							/>
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='email' className='text-sm font-semibold'>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								className='border border-gray-300 rounded-md p-2'
								required
							/>
						</div>
					</div>
					<div className='flex flex-col w-full'>
						<label htmlFor='message' className='text-sm font-semibold'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='border border-gray-300 rounded-md p-2'
							required
						/>
					</div>
					<Button
						className='bg-secondary text-white font-semibold text-sm'
						type='submit'
						disableAnimation
						isLoading={isLoading}
					>
						Envoyer
					</Button>
				</div>
			</form>
			{isSuccess && (
				<div className='text-green-500 mt-3'>
					Votre message a été envoyé avec succès.
				</div>
			)}
		</div>
	)
}
