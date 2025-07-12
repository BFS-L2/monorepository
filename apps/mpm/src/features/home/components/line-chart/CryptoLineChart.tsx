import { Line } from 'react-chartjs-2'

import { Loader } from '@/components/ui/loader/Loader'

import { useHistoryData } from '@/hooks/api/useHistory'

import { useLineChart } from '../../hooks/useLineChart'

export const CryptoLineChart = ({ coin }: { coin: string }) => {
	const { historyData, isLoading } = useHistoryData(coin)
	const { data, options } = useLineChart({ historyData, coin })

	return (
		<>
			{isLoading && (
				<div className='flex items-center justify-center py-5'>
					<Loader />
				</div>
			)}
			{!isLoading && historyData && (
				<div className='rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-zinc-700 dark:bg-zinc-800'>
					<h3 className='mb-4 text-base font-semibold text-zinc-900 md:text-lg dark:text-white'>
						{coin} — 24 hour schedule
					</h3>
					<div className='h-[200px] w-full overflow-hidden md:h-[300px]'>
						<Line data={data} options={options} />
					</div>
				</div>
			)}
		</>
	)
}
