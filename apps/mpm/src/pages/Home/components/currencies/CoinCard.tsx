import { ArrowDown, ArrowUp, Clock, X } from 'lucide-react'

import { parsePrice } from '@/utils/parsePrice.utils'
import { cn } from '@/utils/tailwind.utils'

import type { ICurrency } from '@/shared/types/currencies.types'

interface ICoinCard {
	coin: ICurrency
	handleClick: (coinId: string | undefined) => void
	activeCoinId: string | null
}

export const CoinCard = ({ coin, handleClick, activeCoinId }: ICoinCard) => {
	const price = parsePrice(coin.DISPLAY?.USD?.PRICE)
	const high = parsePrice(coin.DISPLAY?.USD?.HIGH24HOUR)
	const low = parsePrice(coin.DISPLAY?.USD?.LOW24HOUR)
	const openPrice = parsePrice(coin.DISPLAY?.USD?.OPEN24HOUR)

	return (
		<div
			className={cn(
				'absolute top-0 right-0 bottom-0 left-0 h-full w-full flex-col justify-between rounded-xl bg-zinc-800 p-4',
				activeCoinId === coin?.CoinInfo?.Id ? 'flex' : 'hidden'
			)}
		>
			<div
				className='flex flex-row justify-between'
				onClick={() => handleClick(coin?.CoinInfo?.Id)}
			>
				<span className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
					{coin.CoinInfo.FullName}
				</span>
				<X
					size={16}
					className={
						'cursor-pointer text-teal-400 transition hover:text-teal-300'
					}
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<div className='flex justify-between text-sm'>
					<div className='text-zinc-400'>
						<span>Price</span>
					</div>
					<span className='font-semibold'>
						{!isNaN(price) ? `${price} $` : 'N/A'}
					</span>
				</div>
				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-400'>
						<span>24h High</span>
						<ArrowUp className='h-3 w-3 text-green-500' />
					</div>
					<span className='font-semibold'>
						{!isNaN(high) ? `${high} $` : 'N/A'}
					</span>
				</div>
				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-400'>
						<span>24h Low</span>
						<ArrowDown className='h-3 w-3 text-red-500' />
					</div>
					<span className='font-semibold'>
						{!isNaN(low) ? `${low} $` : 'N/A'}
					</span>
				</div>
				<div className='flex justify-between text-sm'>
					<div className='flex items-center gap-1 text-zinc-400'>
						<span>Opening Price</span>
						<Clock className='h-3 w-3 text-yellow-500' />
					</div>
					<span className='font-semibold'>
						{!isNaN(openPrice) ? `${openPrice} $` : 'N/A'}
					</span>
				</div>
			</div>
		</div>
	)
}
