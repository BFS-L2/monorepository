import { parsePrice } from '@/utils/parsePrice.utils'

import type { CurrencyData } from '@/shared/types/currencies.types'

export const CurrencyDetails = ({ coin }: { coin: CurrencyData }) => {
	return (
		<div className='flex w-full flex-col gap-1'>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Price</span>
				<span className='font-semibold'>{parsePrice(coin.DISPLAY?.USD?.PRICE)} $</span>
			</div>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Market Cap</span>
				<span className='font-semibold'>{coin.DISPLAY?.USD?.MKTCAP}</span>
			</div>
			<div className='flex justify-between text-sm'>
				<span className='text-zinc-500 dark:text-zinc-400'>Weiss Rating</span>
				<span className='font-semibold'>{coin?.CoinInfo?.Rating?.Weiss?.Rating || 'N/A'}</span>
			</div>
		</div>
	)
}
