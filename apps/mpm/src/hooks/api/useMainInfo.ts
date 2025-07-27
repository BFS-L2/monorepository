import { useQuery } from '@tanstack/react-query'

import type { MainInfoResponse } from '@/features/home'
import currencyService from '@/features/home/services/currency.service'

export const useMainInfoData = () => {
	const {
		data: mainInfo,
		isLoading,
		isError,
		isSuccess
	} = useQuery<MainInfoResponse>({
		queryKey: ['mainInfo'],
		queryFn: () => currencyService.getMainInfo(),
		staleTime: 60 * 60_000,
		gcTime: 120 * 60_000
	})

	const mainData = mainInfo?.[0]

	return {
		mainData,
		isLoading,
		isError,
		isSuccess
	}
}
