export const FormatDate = (dateString: string) => {
	const date = new Date(dateString)
	const time = date.getTime()

	if (!isNaN(time)) {
		return date.toLocaleString()
	} else {
		return 'Invalid date'
	}
}
