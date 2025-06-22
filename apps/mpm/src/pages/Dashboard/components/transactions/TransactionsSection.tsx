import type { IUserTransactions } from '../../types/transactions.types'

import { TransactionsItems } from './TransactionsItems'

export const TransactionsSection = ({
	transactions,
	currenciesData
}: IUserTransactions) => {
	return (
		<div className='mt-4 flex w-full flex-col items-start gap-1 rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<h2 className='mb-2 bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-xl font-bold text-transparent'>
				Transactions
			</h2>
			<TransactionsItems
				transactions={transactions}
				currenciesData={currenciesData}
			/>
		</div>
	)
}
