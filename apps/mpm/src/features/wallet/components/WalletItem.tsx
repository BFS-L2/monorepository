import { CRYPTO_COMPARE } from '@/constants/api.constants'

interface WalletItemProps {
	symbol: string
	amount: number
	imageUrl?: string
	fullName: string
	numericPrice: number
	isStablecoin: boolean
	totalUsd: string
}

export const WalletItem = ({
	numericPrice,
	amount,
	imageUrl,
	fullName,
	totalUsd,
	isStablecoin,
	symbol
}: WalletItemProps) => {
	return (
		<div
			key={symbol}
			className='flex items-center justify-between rounded-lg border-1 border-zinc-200 bg-white p-2 dark:border-none dark:bg-zinc-900'
		>
			<div className='flex items-center gap-2'>
				{imageUrl && (
					<img
						src={`${CRYPTO_COMPARE}${imageUrl}`}
						alt={symbol}
						className='h-10 w-10 rounded-full'
					/>
				)}

				{!imageUrl && (
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 font-semibold dark:bg-zinc-700/50'>
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
}
