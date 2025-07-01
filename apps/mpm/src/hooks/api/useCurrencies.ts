import { useQuery } from '@tanstack/react-query'

import currencyService from '@/features/home/services/currency.service'

export const useCurrenciesData = () => {
	const {
		data: currencies,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['currencies'],
		queryFn: () => currencyService.getCurrencies(),
		staleTime: 10 * 60 * 1000,
		refetchInterval: 60 * 1000,
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
