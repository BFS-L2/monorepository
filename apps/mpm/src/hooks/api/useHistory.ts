import { useQuery } from '@tanstack/react-query'

import currencyService from '@/services/currency.service'

export const useHistoryData = (coin: string) => {
	const {
		data: history,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['history', coin],
		queryFn: () => currencyService.getHistory(coin),
		staleTime: 60 * 60 * 1000
	})

	const historyData = history?.Data

	return {
		historyData,
		isLoading,
		isError,
		isSuccess
	}
}
