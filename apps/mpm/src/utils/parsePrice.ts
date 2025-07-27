const priceCache = new Map<string, number>()

export const parsePrice = (value?: string): number => {
	if (!value) return NaN

	if (priceCache.has(value)) {
		return priceCache.get(value)!
	}

	const result = parseFloat(value.replace(/[^0-9.-]/g, ''))

	if (!isNaN(result)) {
		priceCache.set(value, result)
	}

	return result
}

export const clearPriceCache = () => {
	priceCache.clear()
}
