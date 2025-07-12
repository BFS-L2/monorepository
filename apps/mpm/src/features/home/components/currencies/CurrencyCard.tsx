import { CoinCard, type ICoinCard } from './CoinCard'
import { CurrencyDetails } from './CurrencyDetails'
import { CurrencyHeader } from './CurrencyHeader'

export const CurrencyCard = ({ coin, activeCoinId, onInfoClick }: ICoinCard) => {
	return (
		<li
			key={coin?.CoinInfo?.Id}
			className='relative flex flex-col items-center rounded-lg border-1 border-zinc-200 bg-zinc-50 p-4 text-teal-400 dark:border-none dark:bg-zinc-800'
		>
			<CurrencyHeader coin={coin} onInfoClick={onInfoClick} />
			<CurrencyDetails coin={coin} />

			<CoinCard onInfoClick={onInfoClick} coin={coin} activeCoinId={activeCoinId} />
		</li>
	)
}
