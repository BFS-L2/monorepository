import type { IWalletSection } from '../../types/wallet.types'

import { WalletItems } from './WalletItems'

export const WalletSection = ({ currenciesData, wallet }: IWalletSection) => {
	if (!currenciesData || currenciesData.length === 0) {
		return (
			<div className='rounded-xl bg-white p-4 dark:bg-zinc-800 dark:text-white'>
				<p className='text-center text-sm text-zinc-500'>
					No currency data available.
				</p>
			</div>
		)
	}

	return (
		<div className='rounded-xl bg-white p-4 dark:bg-zinc-800 dark:text-white'>
			<div className='flex flex-col items-start justify-between gap-1'>
				<h2 className='flex items-center bg-clip-text text-xl font-extrabold text-teal-400'>
					Your assets
				</h2>
				<span className='text-2xl font-extrabold text-zinc-900 dark:text-white'>
					{wallet?.usdBalance?.toFixed(2)} USD
				</span>
			</div>
			<WalletItems currenciesData={currenciesData} wallet={wallet} />
		</div>
	)
}
