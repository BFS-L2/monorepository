import { useQuery } from '@tanstack/react-query'

import { useAuth } from '../auth/useAuth'

import { type TransactionsResponse, transactionsService } from '@/features/transactions'

export const useTransactions = (limit: number) => {
	const { isAuthenticated } = useAuth()

	const {
		data: transactions,
		isLoading,
		isError,
		isSuccess
	} = useQuery<TransactionsResponse>({
		queryKey: ['transactions'],
		queryFn: () => transactionsService.getTransactions(limit),
		staleTime: 60 * 60 * 1000,
		gcTime: 120 * 60_000,
		enabled: isAuthenticated
	})

	return {
		transactions,
		isLoading,
		isError,
		isSuccess
	}
}
