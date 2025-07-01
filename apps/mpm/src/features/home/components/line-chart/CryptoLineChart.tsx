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
				<div className='rounded-2xl bg-zinc-800 px-4 py-6'>
					<h3 className='mb-4 text-lg font-semibold text-white'>{coin} — 24 hour schedule</h3>
					<div style={{ width: '100%', height: '300px' }}>
						<Line data={data} options={options} />
					</div>
				</div>
			)}
		</>
	)
}
