import { Coins, TrendingDown, TrendingUp, Wallet } from 'lucide-react'
import { useMemo } from 'react'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { cn } from '@/utils/tailwind.utils'

import type { IUserTransactions } from '../../types/transactions.types'

export const TransactionsItems = ({
	transactions,
	currenciesData
}: IUserTransactions) => {
	const last10Transactions = useMemo(() => {
		return [...(transactions || [])]
			.sort(
				(a, b) =>
					new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			)
			.slice(0, 10)
	}, [transactions])

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		if (isNaN(date.getTime())) return 'Invalid date'
		return date.toLocaleString()
	}

	return (
		<>
			{last10Transactions.map(transaction => {
				const currencyInfo = currenciesData?.find(
					c => c.CoinInfo.Name === transaction?.currency_from
				)
				const imageUrl = currencyInfo?.CoinInfo.ImageUrl
					? `${CRYPTO_COMPARE}${currencyInfo.CoinInfo.ImageUrl}`
					: null

				return (
					<div
						key={transaction?._id}
						className='grid w-full grid-cols-1 items-center gap-3 rounded-lg bg-zinc-100 p-4 text-zinc-900 md:grid-cols-12 dark:bg-zinc-900 dark:text-white'
					>
						<div className='flex items-center gap-3 md:col-span-3'>
							{imageUrl ? (
								<img
									src={imageUrl}
									alt={transaction?.currency_from}
									className='h-10 w-10 rounded-full bg-white dark:bg-zinc-800'
									loading='lazy'
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
									{formatDate(transaction?.created_at)}
								</p>
							</div>
						</div>

						<div className='flex items-center gap-2 md:col-span-2'>
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

						<div className='flex items-center gap-2 md:col-span-2'>
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

						<div className='flex items-center gap-2 md:col-span-2'>
							<TrendingUp size={16} className='flex-shrink-0 opacity-70' />
							<div className='flex flex-col'>
								<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>
									Rate
								</span>
								<span className='font-mono text-sm'>
									{transaction?.rate.toFixed(2)} USD
								</span>
							</div>
						</div>

						<div className='flex justify-end md:col-span-3'>
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
