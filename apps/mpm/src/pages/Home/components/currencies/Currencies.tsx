import { Info } from 'lucide-react'
import { useState } from 'react'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { parsePrice } from '@/utils/parsePrice.utils'

import { CoinCard } from './CoinCard'
import type { ICurrency } from '@/shared/types/currencies.types'

export const Currencies = ({
	currenciesData
}: {
	currenciesData: ICurrency[] | undefined
}) => {
	const [activeCoinId, setActiveCoinId] = useState<string | null>(null)

	const handleClick = (coinId: string | undefined) => {
		if (!coinId) return
		setActiveCoinId(prevId => (prevId === coinId ? null : coinId))
	}

	return (
		<ul className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{currenciesData?.map(
				(coin: ICurrency) =>
					coin?.DISPLAY?.USD?.PRICE !== null &&
					coin?.DISPLAY?.USD?.PRICE !== undefined && (
						<li
							key={coin?.CoinInfo?.Id}
							className='relative flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-teal-400 shadow'
						>
							<CoinCard
								handleClick={handleClick}
								coin={coin}
								activeCoinId={activeCoinId}
							/>
							<div className='flex w-full justify-between'>
								<div className='mb-4 flex items-center gap-2'>
									<img
										src={`${CRYPTO_COMPARE}${coin?.CoinInfo?.ImageUrl}`}
										alt={coin?.CoinInfo?.FullName}
										width={48}
										height={48}
										className='rounded-full bg-zinc-100'
									/>

									<div>
										<div className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
											{coin.CoinInfo.FullName}
										</div>
										<div className='text-xs text-zinc-400'>
											{coin.CoinInfo.Name}
										</div>
									</div>
								</div>
								<div>
									<Info
										onClick={() => handleClick(coin?.CoinInfo?.Id)}
										size={16}
										className={
											'cursor-pointer text-teal-400 transition hover:text-teal-300'
										}
									/>
								</div>
							</div>

							<div className='flex w-full flex-col gap-1'>
								<div className='flex justify-between text-sm'>
									<span className='text-zinc-400'>Price</span>
									<span className='font-semibold'>
										{parsePrice(coin.DISPLAY?.USD?.PRICE)} $
									</span>
								</div>
								<div className='flex justify-between text-sm'>
									<span className='text-zinc-400'>Market Cap</span>
									<span className='font-semibold'>
										{coin.DISPLAY?.USD?.MKTCAP}
									</span>
								</div>
								<div className='flex justify-between text-sm'>
									<span className='text-zinc-400'>Weiss Rating</span>
									<span className='font-semibold'>
										{coin?.CoinInfo?.Rating?.Weiss?.Rating || 'N/A'}
									</span>
								</div>
							</div>
						</li>
					)
			)}
		</ul>
	)
}
