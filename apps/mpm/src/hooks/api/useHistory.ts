import { useQuery } from '@tanstack/react-query'

import currencyService from '@/features/home/services/currency.service'

export const useHistoryData = (coin: string, limit: number) => {
	const {
		data: history,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['history', coin, limit],
		queryFn: () => currencyService.getHistory(coin, limit),
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
