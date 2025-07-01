import { Title } from '@/components/ui/title/Title'

import { TransactionsItems } from './TransactionsItems'
import type { CurrencyData } from '@/shared/types/currencies.types'

export const TransactionsSection = ({
	currenciesData,
	isCriticalLoading
}: {
	currenciesData: CurrencyData[] | undefined
	isCriticalLoading: boolean
}) => {
	return (
		<div className='mt-4 flex w-full flex-col items-start gap-1 rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<Title type='h3' className='mb-2 text-xl font-bold text-teal-400 dark:text-teal-400'>
				Transactions
			</Title>
			<TransactionsItems currenciesData={currenciesData} isCriticalLoading={isCriticalLoading} />
		</div>
	)
}
