import { parsePrice } from '@/utils/parsePrice.utils'

import type { IWalletSection } from '../types'

import { WalletItem } from './WalletItem'

export const WalletItems = ({ currenciesData, wallet }: IWalletSection) => {
	const balance = Object.entries(wallet?.cryptoBalances || {})

	return (
		<div className='mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{balance?.map(([symbol, amount]) => {
				if (typeof amount !== 'number' || amount <= 0) return null

				const currency = currenciesData?.find(c => c.CoinInfo.Name === symbol)
				const imageUrl = currency?.CoinInfo.ImageUrl
				const fullName = currency?.CoinInfo.FullName || symbol
				const priceStr = currency?.DISPLAY?.USD?.PRICE || ''
				const numericPrice = parsePrice(priceStr) || 0
				const totalUsd = (numericPrice * amount).toFixed(2)
				const isStablecoin = ['USDT', 'USDC', 'DAI', 'TUSD', 'BUSD'].includes(symbol)

				return (
					<WalletItem
						key={symbol}
						amount={amount}
						numericPrice={numericPrice}
						imageUrl={imageUrl}
						fullName={fullName}
						totalUsd={totalUsd}
						isStablecoin={isStablecoin}
						symbol={symbol}
					/>
				)
			})}
		</div>
	)
}
