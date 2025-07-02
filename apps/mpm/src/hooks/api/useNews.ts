import { useQuery } from '@tanstack/react-query'

import currencyService from '@/features/home/services/currency.service'

export const useNewsData = () => {
	const {
		data: news,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['news'],
		queryFn: () => currencyService.getNews(),
		staleTime: 30 * 60 * 1000,
		refetchInterval: 10 * 60 * 1000,
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
