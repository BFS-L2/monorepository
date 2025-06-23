import { useMemo } from 'react'

import type { IUserTransactionDto } from '@/shared/types/user.types'

export const useSortTransactions = ({
	transactions,
	quantity
}: {
	transactions: IUserTransactionDto | undefined
	quantity: number
}) => {
	const TransactionsSorted = useMemo(() => {
		const txs = Array.isArray(transactions) ? transactions : []

		return [...txs]
			.sort(
				(a, b) =>
					new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			)
			.slice(0, quantity)
	}, [transactions])

	return { TransactionsSorted }
}
