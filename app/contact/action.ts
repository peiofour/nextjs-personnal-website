import { IContactForm } from './page'

export async function sendEmail(formData: FormData) {
	const data: IContactForm = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		message: formData.get('message') as string,
	}

	const response = await fetch('/api/email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.error)
	}
}
