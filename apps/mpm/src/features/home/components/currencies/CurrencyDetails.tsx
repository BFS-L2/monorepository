import { ArrowBigDown, ArrowBigUp } from 'lucide-react'

import { cn } from '@/utils/cn'
import { parsePrice } from '@/utils/parsePrice'

import { usePriceDirection } from '../../hooks/usePriceDirection'

import type { CurrencyData } from '@/shared/types/currencies.types'

interface ICurrencyDetails {
	coin: CurrencyData | undefined
}

export const CurrencyDetails = ({ coin }: ICurrencyDetails) => {
	const price = parsePrice(coin?.DISPLAY?.USD?.PRICE)
	const marketCapitalization = coin?.DISPLAY?.USD?.MKTCAP
	const rating = coin?.CoinInfo?.Rating?.Weiss?.Rating || 'N/A'

	const changeDirection = usePriceDirection(price)

	return (
		<div className='flex w-full flex-col gap-1'>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Price</span>
				<div className='relative flex items-center'>
					<ArrowBigUp
						className={cn(
							'absolute text-green-500 opacity-0 transition-opacity duration-300',
							changeDirection === 'up' && 'opacity-100'
						)}
						size={16}
					/>
					<ArrowBigDown
						className={cn(
							'text-red-500 opacity-0 transition-opacity duration-300',
							changeDirection === 'down' && 'opacity-100'
						)}
						size={16}
					/>
					<span className='font-semibold'>{price} $</span>
				</div>
			</div>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Market Cap</span>
				<span className='font-semibold'>{marketCapitalization}</span>
			</div>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Weiss Rating</span>
				<span className='font-semibold'>{rating}</span>
			</div>
		</div>
	)
}
