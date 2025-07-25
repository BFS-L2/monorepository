import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { parsePrice } from '@/utils/parsePrice.utils'
import { cn } from '@/utils/tailwind.utils'

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
	const FullName = coin?.CoinInfo?.FullName
	const Name = coin?.CoinInfo?.Name
	const ImageUrl = coin?.CoinInfo?.ImageUrl

	const price = parsePrice(coin?.DISPLAY?.USD?.PRICE)
	const change = parsePrice(coin?.DISPLAY?.USD?.CHANGE24HOUR)
	const isPositive = change >= 0

	const changeFormatted = ((change / price) * 100).toFixed(2)

	return (
		<div
			className={cn(
				'group flex cursor-pointer items-center gap-2 rounded-lg border border-transparent bg-zinc-800 p-3 transition-all duration-300',
				{
					'hover:border-zinc-600 hover:bg-zinc-700': true,
					'border-zinc-600 bg-zinc-700': selectedCoin === Name
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
					<p className='font-mono text-zinc-100'>{price} $</p>
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
