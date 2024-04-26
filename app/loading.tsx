import React from 'react'
import '@/styles/loading.css' // Import the CSS file for the loading animation

const Loading: React.FC = () => {
	return (
		<div className='flex h-96 items-center justify-center gap-4'>
			<div className='loading-circle'></div>
			<h2 className='text-xl'>Chargement</h2>
		</div>
	)
}

export default Loading
