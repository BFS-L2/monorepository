import { useQuery } from '@tanstack/react-query'

import currencyService from '@/services/currency.service'

export const useCurrenciesData = () => {
	const {
		data: currencies,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['currencies'],
		queryFn: () => currencyService.getCurrencies(),
		staleTime: 10 * 60 * 1000
	})

	const currenciesData = currencies?.Data

	return {
		currenciesData,
		isLoading,
		isError,
		isSuccess
	}
}
