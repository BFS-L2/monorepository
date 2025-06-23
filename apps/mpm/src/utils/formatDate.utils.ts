export const FormatDate = (dateString: string) => {
	const date = new Date(dateString)
	if (isNaN(date.getTime())) return 'Invalid date'
	return date.toLocaleString()
}
