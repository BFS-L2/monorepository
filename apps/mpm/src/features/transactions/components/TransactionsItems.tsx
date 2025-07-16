import { useTransactions } from '@/hooks/api/useTransactions'

import { useSortTransactions } from '../hooks/useSortTransactions'
import type { ITransactionsItems } from '../types'

import { TransactionSkeletonList } from './TransactionSkeletonList'
import { TransactionsItem } from './TransactionsItem'

export const TransactionsItems = ({ currenciesData, isCriticalLoading }: ITransactionsItems) => {
	const { transactions, isLoading: isTransactionsLoading } = useTransactions(12)

	const { TransactionsSorted } = useSortTransactions({ transactions })

	const isMainTransactionsLoading = isTransactionsLoading || isCriticalLoading

	return (
		<>
			{isMainTransactionsLoading && <TransactionSkeletonList />}

			{!transactions && !isMainTransactionsLoading && <div>Transactions not found</div>}

			{!isMainTransactionsLoading &&
				TransactionsSorted.map(transaction => (
					<TransactionsItem
						key={transaction?.id}
						currenciesData={currenciesData}
						transaction={transaction}
					/>
				))}
		</>
	)
}
