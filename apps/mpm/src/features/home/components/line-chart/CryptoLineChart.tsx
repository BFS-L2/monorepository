import { useState } from 'react'
import { Line } from 'react-chartjs-2'

import { Button } from '@/components/ui/button/Button'

import { useHistoryData } from '@/hooks/api/useHistory'

import { useLineChart } from '../../hooks/useLineChart'

import { CryptoChartSkeleton } from './CryptoChartSkeleton'

const rangeToLimit = {
	24: '24h',
	168: '7d',
	720: '30d'
}

type RangeType = keyof typeof rangeToLimit

export const CryptoLineChart = ({ coin }: { coin: string }) => {
	const [limit, setLimit] = useState<RangeType>(168)

	const { historyData, isLoading } = useHistoryData(coin, limit)

	const { data, options } = useLineChart({ historyData, coin })

	if (isLoading || !historyData) return <CryptoChartSkeleton />

	return (
		<>
			<div className='mt-4 rounded-lg border-1 border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-none dark:bg-zinc-800'>
				<h3 className='mb-4 text-base font-semibold text-zinc-900 md:text-lg dark:text-white'>
					{coin} — {rangeToLimit[limit]} schedule
				</h3>
				<div className='relative h-[300px] w-full'>
					<Line data={data} options={options} />
				</div>
			</div>
			<div className='mt-4 flex gap-2'>
				{Object.entries(rangeToLimit).map(([key, value]) => (
					<Button
						key={key}
						onClick={() => setLimit(Number(key) as RangeType)}
						variant='limit'
						className={`w-40 ${limit === (Number(key) as RangeType) ? 'bg-teal-400 text-white dark:bg-zinc-700' : ''}`}
					>
						{value}
					</Button>
				))}
			</div>
		</>
	)
}
