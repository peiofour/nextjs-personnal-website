'use client'

interface Props {
	error: Error
	reset: () => void
}

export default function Error({ error, reset }: Props) {
	return (
		<div className='flex-center h-full w-full flex-col gap-5'>
			<p className='text-3xl text-red-500'>Something went wrong! </p>
			<p className='text-red-500'>{error.toString()}</p>
			<button className='btn' onClick={() => reset()}>
				Retry
			</button>
		</div>
	)
}
