import Image from 'next/image'
import logoBlue from '@/public/logo_pierre_blue.svg'
import logoWhite from '@/public/logo_pierre_white.svg'

interface Props {
	variant: 'primary' | 'white',
	size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant, size }: Props) {
	return (
			<Image
				src={variant === 'primary' ? logoBlue : logoWhite}
				alt="Logo de Pierre Fournier"
				width={size === 'sm' ? 100 : size === 'md' ? 150 : 200}
        height={size === 'sm' ? 100 : size === 'md' ? 150 : 200}
        loading='eager'
			/>
	)
}