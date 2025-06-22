import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { parsePrice } from '@/utils/parsePrice.utils'

import type { IWalletSection } from '../../types/wallet.types'

export const WalletItems = ({ currenciesData, wallet }: IWalletSection) => {
	const arrayCryptoBalances = Object.entries(wallet?.cryptoBalances || {})

	return (
		<div className='mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{arrayCryptoBalances.map(([symbol, amount]) => {
				if (amount <= 0) return null

				const currency = currenciesData?.find(c => c.CoinInfo.Name === symbol)
				const imageUrl = currency?.CoinInfo.ImageUrl
				const fullName = currency?.CoinInfo.FullName || symbol
				const priceStr = currency?.DISPLAY?.USD?.PRICE || ''
				const numericPrice = parsePrice(priceStr) || 0
				const totalUsd = (numericPrice * amount).toFixed(2)
				const isStablecoin = ['USDT', 'USDC', 'DAI', 'TUSD', 'BUSD'].includes(
					symbol
				)

				return (
					<div
						key={symbol}
						className='flex items-center justify-between rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'
					>
						<div className='flex items-center gap-2'>
							{imageUrl ? (
								<img
									src={`${CRYPTO_COMPARE}${imageUrl}`}
									alt={symbol}
									className='h-10 w-10 rounded-full'
								/>
							) : (
								<div className='flex h-10 w-10 items-center justify-center rounded-full bg-white font-semibold dark:bg-zinc-800'>
									{symbol[0]}
								</div>
							)}
							<div>
								<p className='text-base font-bold text-teal-400'>{symbol}</p>
								<p className='text-xs text-zinc-400'>{fullName}</p>
							</div>
						</div>

						<div className='text-right'>
							<p className='font-mono text-base font-semibold text-teal-400'>
								{isStablecoin ? amount.toFixed(2) : amount.toFixed(8)}
							</p>
							<p className='font-mono text-xs text-zinc-400'>
								{numericPrice > 0 ? `≈ ${totalUsd} USD` : 'No data available'}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
