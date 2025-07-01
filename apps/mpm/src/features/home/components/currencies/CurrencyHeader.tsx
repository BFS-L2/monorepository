import { Info } from 'lucide-react'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import type { CurrencyData } from '@/shared/types/currencies.types'

export const CurrencyHeader = ({
	coin,
	onInfoClick
}: {
	coin: CurrencyData
	onInfoClick: (coinId: string | undefined) => void
}) => {
	return (
		<div className='flex w-full justify-between'>
			<div className='mb-4 flex items-center gap-2'>
				<img
					src={`${CRYPTO_COMPARE}${coin?.CoinInfo?.ImageUrl}`}
					alt={coin?.CoinInfo?.FullName}
					width={48}
					height={48}
					loading='lazy'
					className='rounded-full bg-zinc-100'
				/>

				<div>
					<div className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
						{coin.CoinInfo.FullName}
					</div>
					<span className='text-xs text-zinc-500 dark:text-zinc-400'>{coin.CoinInfo.Name}</span>
				</div>
			</div>

			<Info
				onClick={() => onInfoClick(coin?.CoinInfo?.Id)}
				size={16}
				className={'cursor-pointer text-teal-400 transition hover:text-teal-300'}
			/>
		</div>
	)
}
