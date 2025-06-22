import { useQuery } from '@tanstack/react-query'

import { useAuth } from '../auth/useAuth'

import { walletService } from '@/services/wallet.service'

export const useTransactions = () => {
	const { isAuthenticated } = useAuth()

	const {
		data: transactions,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['transactions'],
		queryFn: () => walletService.getTransactions(),
		staleTime: 30 * 60 * 1000,
		enabled: isAuthenticated
	})

	return {
		transactions,
		isLoading,
		isError,
		isSuccess
	}
}
