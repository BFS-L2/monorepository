import { Coins, TrendingDown, TrendingUp, Wallet } from 'lucide-react'

import { Loader } from '@/components/ui/loader/Loader'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { useTransactions } from '@/hooks/api/useTransactions'

import { FormatDate } from '@/utils/formatDate.utils'
import { cn } from '@/utils/tailwind.utils'

import { useSortTransactions } from '../../hooks/useSortTransactions'

import type { ICurrency } from '@/shared/types/currencies.types'

export const TransactionsItems = ({
	currenciesData
}: {
	currenciesData: ICurrency[] | undefined
}) => {
	const { transactions, isLoading } = useTransactions()

	const { TransactionsSorted } = useSortTransactions({
		transactions,
		quantity: 10
	})

	return (
		<>
			{isLoading && (
				<div className='flex items-center justify-center py-5'>
					<Loader />
				</div>
			)}

			{!isLoading &&
				TransactionsSorted.map(transaction => {
					const currencyInfo = currenciesData?.find(
						c => c.CoinInfo.Name === transaction?.currency_from
					)
					const imageUrl = currencyInfo?.CoinInfo.ImageUrl
						? `${CRYPTO_COMPARE}${currencyInfo.CoinInfo.ImageUrl}`
						: null

					return (
						<div
							key={transaction?._id}
							className='grid w-full grid-cols-2 items-center gap-3 rounded-lg bg-zinc-100 p-4 text-zinc-900 md:grid-cols-12 dark:bg-zinc-900 dark:text-white'
						>
							<div className='col-span-2 flex items-center gap-3 md:col-span-3'>
								{imageUrl ? (
									<img
										src={imageUrl}
										alt={transaction?.currency_from}
										loading='lazy'
										className='h-10 w-10 rounded-full bg-white dark:bg-zinc-800'
									/>
								) : (
									<div className='flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold dark:bg-zinc-800'>
										{transaction?.currency_from[0]}
									</div>
								)}
								<div>
									<p className='text-sm font-bold text-teal-400'>
										{transaction?.currency_from}
										<span className='mx-1 text-zinc-500 dark:text-zinc-400'>
											→
										</span>
										{transaction?.currency_to}
									</p>
									<p className='text-xs text-zinc-500 dark:text-zinc-400'>
										{FormatDate(transaction?.created_at)}
									</p>
								</div>
							</div>

							<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
								<Wallet size={16} className='flex-shrink-0 opacity-70' />
								<div className='flex flex-col'>
									<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>
										Sum
									</span>
									<span className='font-mono text-sm'>
										{transaction?.type === 'buy'
											? `$${transaction?.amount_from.toFixed(2)}`
											: transaction?.amount_from.toFixed(6)}
									</span>
								</div>
							</div>

							<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
								<Coins size={16} className='flex-shrink-0 opacity-70' />
								<div className='flex flex-col'>
									<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>
										Received
									</span>
									<span className='font-mono text-sm'>
										{transaction?.type === 'buy'
											? transaction?.amount_to.toFixed(6)
											: `$${transaction?.amount_to.toFixed(2)}`}
									</span>
								</div>
							</div>

							<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
								<TrendingUp size={16} className='flex-shrink-0 opacity-70' />
								<div className='flex flex-col'>
									<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>
										Rate
									</span>
									<span className='font-mono text-sm'>
										${transaction?.rate.toFixed(2)}
									</span>
								</div>
							</div>

							<div className='col-span-1 flex md:col-span-3 md:justify-end'>
								<span
									className={cn(
										'flex items-center rounded-md px-3 py-1.5 text-sm font-medium',
										transaction?.type === 'buy'
											? 'bg-green-500/10 text-green-500'
											: 'bg-red-500/10 text-red-500'
									)}
								>
									{transaction?.type === 'buy' ? (
										<TrendingUp size={16} className='mr-1.5' />
									) : (
										<TrendingDown size={16} className='mr-1.5' />
									)}
									{transaction?.type === 'buy' ? 'Buy' : 'Sell'}
								</span>
							</div>
						</div>
					)
				})}
		</>
	)
}
