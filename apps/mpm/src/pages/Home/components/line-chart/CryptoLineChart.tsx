import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { Loader } from '@/components/ui/loader/Loader'

import { useHistoryData } from '@/hooks/api/useHistory'

import type { IChartDataDto } from '@/shared/types/currencies.types'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Title,
	Filler
)

export const CryptoLineChart = ({ coin }: { coin: string }) => {
	const { historyData, isLoading } = useHistoryData(coin)

	if (isLoading)
		return (
			<div className='flex items-center justify-center py-5'>
				<Loader />
			</div>
		)

	const chartData = historyData?.Data?.map((item: IChartDataDto) => ({
		time: new Date(item.time * 1000).toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit'
		}),
		price: item.close
	}))

	const data = {
		labels: chartData?.map(
			(data: { time: string; price: number }) => data.time
		),
		datasets: [
			{
				label: `${coin.toUpperCase()} — Price`,
				data: chartData?.map(
					(data: { time: string; price: number }) => data.price
				),
				fill: false,
				borderColor: 'oklch(77.7% 0.152 181.912)',
				tension: 0.4,
				borderWidth: 2.5,
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBorderWidth: 2,
				pointHoverBorderColor: '#fff'
			}
		]
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			mode: 'index' as const,
			intersect: false
		},
		scales: {
			x: {
				ticks: {
					color: '#d1d5db',
					font: { size: 12 }
				},
				grid: {
					color: '#4f4f4f',
					drawTicks: false
				}
			},
			y: {
				ticks: {
					color: '#d1d5db',
					font: { size: 12 },
					count: 6
				},
				grid: {
					color: '#4f4f4f',
					borderDash: [1, 1],
					drawTicks: false
				}
			}
		},
		plugins: {
			tooltip: {
				backgroundColor: '#fff',
				titleColor: '#000',
				bodyColor: '#000',
				borderRadius: 8,
				titleFont: {
					weight: 'bold' as const
				}
			},
			legend: {
				display: false
			}
		},
		animation: {
			duration: 600
		}
	}

	return (
		<div className='rounded-2xl bg-zinc-800 px-4 py-6'>
			<h3 className='mb-4 text-lg font-semibold text-white'>
				{coin} — 24 hour schedule
			</h3>
			<div style={{ width: '100%', height: '300px' }}>
				<Line data={data} options={options} />
			</div>
		</div>
	)
}
