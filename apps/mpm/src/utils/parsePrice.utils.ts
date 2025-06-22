export const parsePrice = (value?: string): number => {
	return value ? parseFloat(value?.replace(/[^0-9.]/g, '')) : NaN
}
