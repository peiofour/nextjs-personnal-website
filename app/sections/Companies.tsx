'use client'

import Image from 'next/image'
import loungeup from '@/public/companies/loungeup.svg'
import peoplevox from '@/public/companies/peoplevox.svg'
import w2p from '@/public/companies/w2pdigital.svg'
import edtake from '@/public/companies/edtake.svg'
import feel from '@/public/companies/feel.svg'
import henritrip from '@/public/companies/henritrip.svg'
import safary from '@/public/companies/safary.svg'
import grandlitier from '@/public/companies/grandlitier.svg'
import grandsespaces from '@/public/companies/grandsespaces.svg'
import { useIsMobile } from '@/hooks'

export function Companies() {
	return (
		<div className='container flex flex-col gap-10 pt-10 pb-20'>
			<div className='text-center flex flex-col gap-3'>
				<h1 className='font-bold text-2xl lg:text-3xl'>{texts[0]}</h1>
				<h2 className='text-lg'>{texts[1]}</h2>
			</div>
			<div className='flex flex-wrap gap-10 lg:gap-20'>
				<CompanyIcon src={loungeup} alt='LoungeUp' />
				<CompanyIcon src={peoplevox} alt='PeopleVox' />
				<CompanyIcon src={feel} alt='Feel' width={100} />
				<CompanyIcon src={w2p} alt='W2P Digital' />
				<CompanyIcon src={edtake} alt='Edtake' width={180} />
				<CompanyIcon src={henritrip} alt='Henri Trip' />
				<CompanyIcon src={safary} alt='Safary' />
				<CompanyIcon src={grandlitier} alt='Grand Litier' />
				<CompanyIcon src={grandsespaces} alt='Grand Espaces' width={180} />
			</div>
		</div>
	)
}

const texts = [
	"Ils m'ont fait confiance",
	"Je suis fier d'avoir collaborer avec ces entreprises",
]

function CompanyIcon({
	src,
	alt,
	width = 200,
}: Readonly<{ src: string; alt: string; width?: number }>) {
	const isMobile = useIsMobile()
	return (
		<div className='mx-auto my-auto'>
			<Image
				src={src}
				alt={alt}
				width={isMobile ? width / 1.5 : width}
				height={isMobile ? width / 1.5 : width}
			/>
		</div>
	)
}
