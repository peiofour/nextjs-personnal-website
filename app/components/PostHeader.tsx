import Head from 'next/head'
import DateFormatter from '@/app/components/DateFormatter'
import Image from 'next/image'

interface Props {
	title: string
	description: string
	date: string
	coverImage: string
}

const PostHeader = ({ title, description, date, coverImage }: Props) => {
	return (
		<div className='mb-8 md:mb-16 sm:mx-0'>
			<h1 className='font-bold text-3xl md:text-5xl tracking-tighter leading-tight md:pr-8'>
				{title}
			</h1>
			<div className='text-lg md:text-2xl mt-2'>
				<DateFormatter date={date} />
			</div>
			<div className='text-lg md:text-2xl mt-2'>{description}</div>
			<div className='mt-10 md:mt-16'>
				<Image
					src={coverImage}
					alt={title}
					layout='responsive'
					width={1240}
					height={640}
				/>
			</div>
		</div>
	)
}
