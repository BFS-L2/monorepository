import { useQuery } from '@tanstack/react-query'

import { useAuth } from '../auth/useAuth'

import { transactionsService } from '@/features/transactions'

export const useTransactions = (limit: number) => {
	const { isAuthenticated } = useAuth()

	const {
		data: transactions,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['transactions'],
		queryFn: () => transactionsService.getTransactions(limit),
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
