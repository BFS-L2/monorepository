import { Coins, TrendingDown, TrendingUp, Wallet } from 'lucide-react'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { FormatDate } from '@/utils/formatDate.utils'
import { cn } from '@/utils/tailwind.utils'

import type { ITransactionsItem } from '../types'

export const TransactionsItem = ({ transaction, currenciesData }: ITransactionsItem) => {
	const getCurrencyImageUrl = (currencyName: string): string | null => {
		const info = currenciesData?.find(c => c.CoinInfo.Name === currencyName)
		return info?.CoinInfo.ImageUrl ? `${CRYPTO_COMPARE}${info.CoinInfo.ImageUrl}` : null
	}

	const imageUrl = getCurrencyImageUrl(transaction.currency_from)

	return (
		<div className='grid w-full grid-cols-2 items-center gap-3 rounded-lg border-1 border-zinc-200 bg-white p-4 text-zinc-900 md:grid-cols-12 dark:border-none dark:bg-zinc-900 dark:text-white'>
			<div className='col-span-2 flex items-center gap-3 md:col-span-3'>
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={transaction?.currency_from}
						loading='lazy'
						className='h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800'
					/>
				) : (
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-bold dark:bg-zinc-700/50'>
						{transaction?.currency_from[0]}
					</div>
				)}
				<div>
					<p className='text-sm font-bold text-teal-400'>
						{transaction?.currency_from}
						<span className='mx-1 text-zinc-500 dark:text-zinc-400'>→</span>
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
					<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>Sum</span>
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
					<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>Received</span>
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
					<span className='text-xs text-zinc-500 md:hidden dark:text-zinc-400'>Rate</span>
					<span className='font-mono text-sm'>${transaction?.rate.toFixed(2)}</span>
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
}
