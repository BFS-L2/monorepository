export const parsePrice = (value?: string) => {
	return value ? parseFloat(value?.replace(/[^0-9.]/g, '')) : NaN
}
