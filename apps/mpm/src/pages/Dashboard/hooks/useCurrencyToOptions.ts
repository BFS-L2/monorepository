import { useMemo } from 'react'

import type { ICurrency } from '@/shared/types/currencies.types'

export const useCurrencyOptions = (currenciesData: ICurrency[] | undefined) => {
	return useMemo(() => {
		return currenciesData
			?.filter(
				currency =>
					currency.DISPLAY?.USD?.PRICE !== null &&
					currency.DISPLAY?.USD?.PRICE !== undefined
			)
			?.map(currency => ({
				label: currency?.CoinInfo?.Name,
				value: currency.DISPLAY?.USD?.PRICE
			}))
	}, [currenciesData])
}
