import { useQuery } from '@tanstack/react-query'

import currencyService from '@/features/home/services/currency.service'
import type { NewsResponse } from '@/shared/types/currencies.types'

export const useNewsData = () => {
	const {
		data: news,
		isLoading,
		isError,
		isSuccess
	} = useQuery<NewsResponse>({
		queryKey: ['news'],
		queryFn: () => currencyService.getNews(),
		staleTime: 30 * 60_000,
		gcTime: 60 * 60_000,
		refetchInterval: 15 * 60_000,
		refetchIntervalInBackground: true
	})

	const newsData = news?.Data

	return {
		newsData,
		isLoading,
		isError,
		isSuccess
	}
}
