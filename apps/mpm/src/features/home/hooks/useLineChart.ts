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

import type { ChartItem, ChartResponse } from '@/shared/types/currencies.types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title, Filler)

export const useLineChart = ({
	historyData,
	coin
}: {
	historyData: ChartResponse
	coin: string
}) => {
	const chartData = historyData?.Data?.map((item: ChartItem) => ({
		time: new Date(item.time * 1000).toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit'
		}),
		price: Number(item.close)
	}))

	const data = {
		labels: chartData?.map((data: { time: string; price: number }) => data.time),
		datasets: [
			{
				label: `${coin.toUpperCase()} — Price`,
				data: chartData?.map((data: { time: string; price: number }) => data.price),
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
	return { data, options }
}
