import { ArrowBigDown, ArrowBigUp, Clock, X } from 'lucide-react'

import { cn } from '@/utils/cn'
import { parsePrice } from '@/utils/parsePrice'

import type { CurrencyData } from '@/shared/types/currencies.types'

export interface ICoinCard {
	coin: CurrencyData | undefined
	onInfoClick: (coinId: string | undefined) => void
	activeCoinId: string | null
}

export const CoinCard = ({ coin, onInfoClick, activeCoinId }: ICoinCard) => {
	const price = parsePrice(coin?.DISPLAY?.USD?.PRICE)
	const high = parsePrice(coin?.DISPLAY?.USD?.HIGH24HOUR)
	const low = parsePrice(coin?.DISPLAY?.USD?.LOW24HOUR)
	const openPrice = parsePrice(coin?.DISPLAY?.USD?.OPEN24HOUR)

	const handleCloseClick = (): void => {
		onInfoClick(coin?.CoinInfo?.Id)
	}

	return (
		<div
			className={cn(
				'absolute top-0 right-0 bottom-0 left-0 h-full w-full flex-col justify-between rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800',
				activeCoinId === coin?.CoinInfo?.Id ? 'flex' : 'hidden'
			)}
		>
			<div className='flex flex-row justify-between'>
				<span className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
					{coin?.CoinInfo.FullName}
				</span>
				<X
					onClick={handleCloseClick}
					size={26}
					className='cursor-pointer rounded-sm bg-zinc-100 p-1 text-teal-400 transition-colors duration-300 hover:bg-zinc-200/50 hover:text-teal-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<div className='flex justify-between text-sm'>
					<div className='text-zinc-500 dark:text-zinc-400'>
						<span>Price</span>
					</div>
					<span className='font-semibold'>{!isNaN(price) ? `${price} $` : 'N/A'}</span>
				</div>

				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-500 dark:text-zinc-400'>
						<span>24h High</span>
						<ArrowBigUp size={16} className='text-green-500' />
					</div>
					<span className='font-semibold'>{!isNaN(high) ? `${high} $` : 'N/A'}</span>
				</div>

				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-500 dark:text-zinc-400'>
						<span>24h Low</span>
						<ArrowBigDown size={16} className='text-red-500' />
					</div>
					<span className='font-semibold'>{!isNaN(low) ? `${low} $` : 'N/A'}</span>
				</div>

				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-500 dark:text-zinc-400'>
						<span>Opening Price</span>
						<Clock size={12} className='text-yellow-500' />
					</div>
					<span className='font-semibold'>{!isNaN(openPrice) ? `${openPrice} $` : 'N/A'}</span>
				</div>
			</div>
		</div>
	)
}
