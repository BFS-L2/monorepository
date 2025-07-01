import { useMemo } from 'react'

import type { TransactionsResponse } from '../types'

export const useSortTransactions = ({
	transactions
}: {
	transactions: TransactionsResponse | undefined
}) => {
	const TransactionsSorted = useMemo(() => {
		const txs = Array.isArray(transactions) ? transactions : []

		return [...txs]
	}, [transactions])

	return { TransactionsSorted }
}
