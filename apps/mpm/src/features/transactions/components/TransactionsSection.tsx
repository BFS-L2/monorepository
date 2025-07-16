import { Title } from '@/components/ui/title/Title'

import type { ITransactionsItems } from '../types'

import { TransactionsItems } from './TransactionsItems'

export const TransactionsSection = ({ currenciesData, isCriticalLoading }: ITransactionsItems) => {
	return (
		<div className='mt-4 flex w-full flex-col items-start gap-2 rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<Title type='h3' className='mb-2 text-xl font-bold text-teal-400 dark:text-teal-400'>
				Transactions
			</Title>
			<TransactionsItems currenciesData={currenciesData} isCriticalLoading={isCriticalLoading} />
		</div>
	)
}
