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
		<div className='container flex flex-col gap-10 pb-20 pt-10'>
			<div className='flex flex-col gap-3 text-center'>
				<h2 className='text-2xl font-bold lg:text-3xl'>{texts[0]}</h2>
				<h3 className='text-lg text-gray-500'>{texts[1]}</h3>
			</div>
			<div className='flex flex-wrap gap-10 lg:gap-20'>
				<CompanyIcon src={grandlitier} alt='Logo Grand Litier' />
				<CompanyIcon src={grandsespaces} alt='Logo Grand Espaces' width={180} />
				<CompanyIcon src={peoplevox} alt='Logo People Vox' />
				<CompanyIcon src={loungeup} alt='Logo LoungeUp' />
				<CompanyIcon src={w2p} alt='Logo W2P Digital' />
				<CompanyIcon src={feel} alt='Logo Feel app' width={100} />
				<CompanyIcon src={edtake} alt='Logo edtake' width={180} />
				<CompanyIcon src={safary} alt='Logo Safary club' />
				<CompanyIcon src={henritrip} alt='Logo Henri Trip' />
			</div>
		</div>
	)
}

const texts = ["Ils m'ont fait confiance", "Les entreprises avec lesquelles j'ai collaboré"]

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
				className='scale-100 transform transition-transform duration-300 hover:scale-110'
			/>
		</div>
	)
}
