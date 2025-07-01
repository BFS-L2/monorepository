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
		staleTime: 60 * 60 * 1000
	})

	const newsData = news?.Data

	return {
		newsData,
		isLoading,
		isError,
		isSuccess
	}
}
