import { BarChart2, ClipboardList, DollarSign, Star, TrendingUp } from 'lucide-react'

import { Title } from '@/components/ui/title/Title'

import { parsePrice } from '@/utils/parsePrice.utils'
import { cn } from '@/utils/tailwind.utils'

import { ComparisonCard } from './ComparisonCard'
import type { CurrencyData } from '@/shared/types/currencies.types'

interface IComparisonList {
	secondChangeCoin: CurrencyData | undefined
	firstCoin: CurrencyData | null
}

export const ComparisonList = ({ secondChangeCoin, firstCoin }: IComparisonList) => {
	return (
		<div>
			<Title
				type='h3'
				className='mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-teal-400 uppercase dark:text-teal-400'
			>
				<BarChart2 className='h-4 w-4' /> Comparison Results
			</Title>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<ComparisonCard
					icon={<DollarSign className='h-5 w-5' />}
					title='Price'
					values={[
						`${parsePrice(firstCoin?.DISPLAY?.USD?.PRICE)} $`,
						`${parsePrice(secondChangeCoin?.DISPLAY?.USD?.PRICE)} $`
					]}
				/>

				<ComparisonCard
					icon={<ClipboardList className='h-5 w-5' />}
					title='Market Cap'
					values={[
						firstCoin?.DISPLAY?.USD?.MKTCAP ?? 'N/A',
						secondChangeCoin?.DISPLAY?.USD?.MKTCAP ?? 'N/A'
					]}
				/>

				<ComparisonCard
					icon={<Star className='h-5 w-5' />}
					title='Weiss Rating'
					values={[
						firstCoin?.CoinInfo?.Rating?.Weiss?.Rating ?? 'N/A',
						secondChangeCoin?.CoinInfo?.Rating?.Weiss?.Rating ?? 'N/A'
					]}
				/>

				<ComparisonCard
					icon={<TrendingUp className='h-5 w-5' />}
					title='24h Change'
					values={[
						firstCoin?.DISPLAY?.USD?.CHANGEPCT24HOUR + '%',
						secondChangeCoin?.DISPLAY?.USD?.CHANGEPCT24HOUR + '%'
					]}
					valueColors={[
						cn(
							Number(firstCoin?.DISPLAY?.USD?.CHANGE24HOUR) > 0 ? 'text-green-500' : 'text-red-500'
						),
						cn(
							Number(secondChangeCoin?.DISPLAY?.USD?.CHANGE24HOUR) > 0
								? 'text-green-500'
								: 'text-red-500'
						)
					]}
				/>
			</div>
		</div>
	)
}
