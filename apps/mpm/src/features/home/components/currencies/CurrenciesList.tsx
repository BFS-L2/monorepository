import { Button } from '@/components/ui/button/Button'
import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { cn } from '@/utils/tailwind.utils'

import { useActiveCoinId } from '../../hooks/useActiveCoinId'
import { useSortedCurrencies } from '../../hooks/useSortedCurrencies'

import { CurrencyCard } from './CurrencyCard'
import type { CurrencyData } from '@/shared/types/currencies.types'

export const Currencies = () => {
	const { currenciesData, isLoading } = useCurrenciesData()

	const { activeCoinId, handleClick } = useActiveCoinId()

	const { sortedCurrencies, setSort, sort } = useSortedCurrencies(currenciesData)

	return (
		<>
			{isLoading && (
				<div className='flex items-center justify-center py-5'>
					<Loader />
				</div>
			)}

			{!isLoading && currenciesData && (
				<section className='pb-10 md:pb-20'>
					<Title className='mb-4' type='h2'>
						Current coins
					</Title>

					<div className='flex flex-wrap gap-2'>
						<Button
							onClick={() => setSort('price')}
							className={cn(
								'w-40',
								sort === 'price' && 'from-red-500 to-red-600 hover:from-red-400 hover:to-red-500'
							)}
						>
							Sort by Price
						</Button>
						<Button
							onClick={() => setSort('marketCap')}
							className={cn(
								'w-40',
								sort === 'marketCap' &&
									'from-red-500 to-red-600 hover:from-red-400 hover:to-red-500'
							)}
						>
							Sort by Market Cap
						</Button>
					</div>

					<ul className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{sortedCurrencies?.map(
							(coin: CurrencyData) =>
								coin?.DISPLAY?.USD?.PRICE !== null &&
								coin?.DISPLAY?.USD?.PRICE !== undefined && (
									<CurrencyCard
										key={coin?.CoinInfo?.Id}
										coin={coin}
										activeCoinId={activeCoinId}
										onInfoClick={handleClick}
									/>
								)
						)}
					</ul>
				</section>
			)}
		</>
	)
}
