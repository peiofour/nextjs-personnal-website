import { parseISO, intlFormat } from 'date-fns'

interface Props {
	date: string
}

const DateFormatter = ({ date }: Props) => {
	const ISODate = parseISO(date)
	const frDate = intlFormat(ISODate, { dateStyle: 'full' }, { locale: 'fr-FR' })
	return <time dateTime={date}>{frDate}</time>
}

export default DateFormatter
