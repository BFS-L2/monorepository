import { useTransactions } from '@/hooks/api/useTransactions'

import { useSortTransactions } from '../hooks/useSortTransactions'

import { TransactionSkeletonList } from './TransactionSkeletonList'
import { TransactionsItem } from './TransactionsItem'
import type { CurrencyData } from '@/shared/types/currencies.types'

export const TransactionsItems = ({
	currenciesData,
	isCriticalLoading
}: {
	currenciesData: CurrencyData[] | undefined
	isCriticalLoading: boolean
}) => {
	const { transactions, isLoading: isTransactionsLoading } = useTransactions(12)

	const { TransactionsSorted } = useSortTransactions({ transactions })

	const isMainTransactionsLoading = isTransactionsLoading || isCriticalLoading

	return (
		<>
			{isMainTransactionsLoading && <TransactionSkeletonList />}

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
