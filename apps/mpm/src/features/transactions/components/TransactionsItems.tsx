import { useTransactions } from '@/hooks/api/useTransactions'

import { useSortTransactions } from '../hooks/useSortTransactions'

import { TransactionSkeletonList } from './TransactionSkeletonList'
import { TransactionsItem } from './TransactionsItem'
import type { CurrencyData } from '@/shared/types/currencies.types'

export const TransactionsItems = ({
	currenciesData
}: {
	currenciesData: CurrencyData[] | undefined
}) => {
	const { transactions, isLoading } = useTransactions(12)

	const { TransactionsSorted } = useSortTransactions({ transactions })

	return (
		<>
			{isLoading && <TransactionSkeletonList />}

			{!isLoading &&
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
