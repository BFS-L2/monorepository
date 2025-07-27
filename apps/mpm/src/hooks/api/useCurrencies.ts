import { useQuery } from '@tanstack/react-query'

import currencyService from '@/features/home/services/currency.service'
import type { CurrencyResponse } from '@/shared/types/currencies.types'

export const useCurrenciesData = () => {
	const {
		data: currencies,
		isLoading,
		isError,
		isSuccess
	} = useQuery<CurrencyResponse>({
		queryKey: ['currencies'],
		queryFn: () => currencyService.getCurrencies(),
		staleTime: 10 * 60_000,
		gcTime: 20 * 60_000,
		refetchInterval: 3 * 60_000,
		refetchIntervalInBackground: true
	})

	const currenciesData = currencies?.Data

	return {
		currenciesData,
		isLoading,
		isError,
		isSuccess
	}
}
