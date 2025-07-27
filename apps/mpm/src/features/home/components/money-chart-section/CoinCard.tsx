import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { cn } from '@/utils/cn'
import { parsePrice } from '@/utils/parsePrice'

import type { CurrencyData } from '@/shared/types/currencies.types'

export const CoinCard = ({
	coin,
	setCoin,
	selectedCoin
}: {
	coin: CurrencyData
	setCoin: (coin: string) => void
	selectedCoin: string
}) => {
	const FullName = coin?.CoinInfo?.Name
	const Name = coin?.CoinInfo?.Name
	const ImageUrl = coin?.CoinInfo?.ImageUrl

	const price = parsePrice(coin?.DISPLAY?.USD?.PRICE)
	const change = parsePrice(coin?.DISPLAY?.USD?.CHANGE24HOUR)
	const isPositive = change >= 0

	const changeFormatted = ((change / price) * 100).toFixed(2)

	return (
		<div
			className={cn(
				'group flex cursor-pointer items-center gap-2 rounded-lg border-1 border-zinc-200 bg-white p-3 transition-all duration-300 dark:border-transparent dark:bg-zinc-800',
				{
					'dark:hover:border-zinc-600 dark:hover:bg-zinc-700': true,
					'border-teal-400 dark:border-transparent dark:bg-zinc-700': selectedCoin === Name
				}
			)}
			onClick={() => setCoin(Name)}
		>
			<img
				src={`${CRYPTO_COMPARE}${ImageUrl}`}
				alt={FullName}
				width={48}
				height={48}
				className='rounded-full bg-zinc-100 dark:bg-zinc-700/50'
			/>
			<div className='flex flex-col gap-0.5'>
				<p className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
					{FullName}
				</p>
				<span className='flex flex-col gap-0 md:flex-row md:gap-3'>
					<p className='font-mono text-zinc-800 dark:text-white'>{price} $</p>
					<p className='font-mono text-base text-zinc-900 dark:text-white'>
						<span className={`ml-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
							{isPositive ? '+' : ''}
							{changeFormatted}%
						</span>
					</p>
				</span>
			</div>
		</div>
	)
}
