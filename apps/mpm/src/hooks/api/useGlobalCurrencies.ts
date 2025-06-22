import { useQuery } from '@tanstack/react-query'

import currencyService from '@/services/currency.service'

export const useGlobalCurrenciesData = () => {
	const {
		data: globalCurrencies,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['globalCurrencies'],
		queryFn: () => currencyService.getGlobalCurrencies(),
		staleTime: 10 * 60 * 1000
	})

	const globalCurrenciesData = globalCurrencies?.Data

	return {
		globalCurrenciesData,
		isLoading,
		isError,
		isSuccess
	}
}
