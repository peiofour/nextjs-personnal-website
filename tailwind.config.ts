import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#335AB5',
				secondary: '#F85188',
				'secondary-hover': '#f477a1',
				tertiary: '#F5F5F5',
				stroke: '#E6E6E6',
			},
			boxShadow: {
				card: '0 18px 17px 0 rgba(0, 0, 0, 0.07)',
				'card-hover': '0 18px 17px 0 rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [nextui(), require('@tailwindcss/typography')],
}
export default config
