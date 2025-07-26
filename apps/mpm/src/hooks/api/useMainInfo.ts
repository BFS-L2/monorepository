import { useQuery } from '@tanstack/react-query'

import type { MainInfo } from '@/features/home'
import currencyService from '@/features/home/services/currency.service'

export const useMainInfoData = () => {
	const {
		data: mainInfo,
		isLoading,
		isError,
		isSuccess
	} = useQuery<MainInfo[]>({
		queryKey: ['mainInfo'],
		queryFn: () => currencyService.getMainInfo(),
		staleTime: 60 * 60 * 1000
	})

	const mainData = mainInfo?.[0]

	return {
		mainData,
		isLoading,
		isError,
		isSuccess
	}
}
