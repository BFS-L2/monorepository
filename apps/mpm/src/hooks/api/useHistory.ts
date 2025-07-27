import { useQuery } from '@tanstack/react-query'

import type { HistoricalChartResponse } from '@/features/home'
import currencyService from '@/features/home/services/currency.service'

export const useHistoryData = (coin: string, limit: number) => {
	const {
		data: history,
		isLoading,
		isError,
		isSuccess
	} = useQuery<HistoricalChartResponse>({
		queryKey: ['history', coin, limit],
		queryFn: () => currencyService.getHistory(coin, limit),
		staleTime: 60 * 60_000,
		gcTime: 120 * 60_000
	})

	const historyData = history?.Data

	return {
		historyData,
		isLoading,
		isError,
		isSuccess
	}
}
