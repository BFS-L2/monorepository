import { Title } from '@/components/ui/title/Title'

import type { IWalletSection } from '../../types/wallet.types'

import { WalletItems } from './WalletItems'

export const WalletSection = ({ currenciesData, wallet }: IWalletSection) => {
	return (
		<>
			{!currenciesData ||
				(currenciesData.length === 0 && (
					<div className='flex items-center justify-center pt-5 text-lg text-teal-400'>
						No currency data available.
					</div>
				))}
			{currenciesData && (
				<div className='rounded-xl bg-white p-4 dark:bg-zinc-800 dark:text-white'>
					<div className='flex flex-col items-start justify-between gap-1'>
						<Title
							type='h2'
							className='text-xl font-bold text-teal-400 dark:text-teal-400'
						>
							Your assets
						</Title>
						<span className='text-2xl font-extrabold text-zinc-900 dark:text-white'>
							{wallet?.usdBalance?.toFixed(2)} USD
						</span>
					</div>
					<WalletItems currenciesData={currenciesData} wallet={wallet} />
				</div>
			)}
		</>
	)
}
