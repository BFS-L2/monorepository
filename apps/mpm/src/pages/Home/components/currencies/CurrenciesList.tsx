import { Title } from '@/components/ui/title/Title'

import { CurrencyCard } from './CurrencyCard'
import { useActiveCoinId } from './useActiveCoinId'
import type { ICurrency } from '@/shared/types/currencies.types'

export const Currencies = ({
	currenciesData
}: {
	currenciesData: ICurrency[] | undefined
}) => {
	const { activeCoinId, handleClick } = useActiveCoinId()

	return (
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
	)
}
