import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { useActiveCoinId } from '../../hooks/useActiveCoinId'

import { CurrencyCard } from './CurrencyCard'
import type { ICurrency } from '@/shared/types/currencies.types'

export const Currencies = () => {
	const { currenciesData, isLoading } = useCurrenciesData()

	const { activeCoinId, handleClick } = useActiveCoinId()

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
					<ul className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{currenciesData?.map(
							(coin: ICurrency) =>
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
