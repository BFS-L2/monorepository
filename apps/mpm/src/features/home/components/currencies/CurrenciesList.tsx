import { memo } from 'react'

import { Button } from '@/components/ui/button/Button'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { cn } from '@/utils/cn'

import { useActiveCoinId } from '../../hooks/useActiveCoinId'
import { useSortedCurrencies } from '../../hooks/useSortedCurrencies'
import { IntersectionSectionTitle } from '../IntersectionSectionTitle'

import { CurrencyCard } from './CurrencyCard'
import type { CurrencyData } from '@/shared/types/currencies.types'

export const Currencies = memo(
	({ sectionKey, sectionsValue }: { sectionKey: string; sectionsValue: string }) => {
		const { currenciesData } = useCurrenciesData()
		const { activeCoinId, handleClick } = useActiveCoinId()
		const { sortedCurrencies, setSort, sort } = useSortedCurrencies(currenciesData)

		return (
			<section className='container mx-auto px-2 pb-10 md:pb-20'>
				<IntersectionSectionTitle sectionKey={sectionKey} sectionsValue={sectionsValue} />
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
							sort === 'marketCap' && 'from-red-500 to-red-600 hover:from-red-400 hover:to-red-500'
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
		)
	}
)
