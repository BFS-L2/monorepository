import { useMemo, useState } from 'react'

import { parsePrice } from '@/utils/parsePrice'

import type { CurrencyData } from '@/shared/types/currencies.types'

export const useSortedCurrencies = (currenciesData: CurrencyData[] | undefined) => {
	const [sort, setSort] = useState<'none' | 'price' | 'marketCap'>('none')

	const sortedCurrencies = useMemo(() => {
		if (!currenciesData) return []

		const copy = [...currenciesData]

		if (sort === 'price') {
			return copy?.sort((a, b) => {
				const priceA = parsePrice(a?.DISPLAY?.USD?.PRICE) || 0
				const priceB = parsePrice(b?.DISPLAY?.USD?.PRICE) || 0
				return priceB - priceA
			})
		} else if (sort === 'marketCap') {
			return copy.sort((a, b) => {
				const marketCapA = parsePrice(a?.DISPLAY?.USD?.MKTCAP) || 0
				const marketCapB = parsePrice(b?.DISPLAY?.USD?.MKTCAP) || 0

				return marketCapA + marketCapB
			})
		} else {
			return copy
		}
	}, [sort, currenciesData])

	return { sortedCurrencies, setSort, sort }
}
