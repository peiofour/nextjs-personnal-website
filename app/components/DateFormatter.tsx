import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface Props {
	date: string
}

const DateFormatter = ({ date }: Props) => {
	const frDate = format(date, 'dd MMMM yyyy', { locale: fr })
	return <time dateTime={date}>{frDate}</time>
}

export default DateFormatter
