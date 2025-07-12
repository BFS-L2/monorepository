import { Line } from 'react-chartjs-2'

import { useHistoryData } from '@/hooks/api/useHistory'

import { useLineChart } from '../../hooks/useLineChart'

import { CryptoChartSkeleton } from './CryptoChartSkeleton'

export const CryptoLineChart = ({ coin }: { coin: string }) => {
	const { historyData, isLoading } = useHistoryData(coin)
	const { data, options } = useLineChart({ historyData, coin })

	if (isLoading || !historyData) return <CryptoChartSkeleton />

	return (
		<div className='rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-zinc-700 dark:bg-zinc-800'>
			<h3 className='mb-4 text-base font-semibold text-zinc-900 md:text-lg dark:text-white'>
				{coin} — 24 hour schedule
			</h3>
			<div className='relative h-[300px] w-full'>
				<Line data={data} options={options} />
			</div>
		</div>
	)
}
