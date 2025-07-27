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

import type { HistoricalChart } from '../types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title, Filler)

export const useLineChart = (historyData: HistoricalChart | undefined, coin: string) => {
	const chartData = historyData?.Data?.map(item => ({
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
				borderWidth: 2,
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
					color: '#9ca3af',
					font: { size: 11 }
				},
				grid: {
					color: 'transparent',
					drawTicks: false
				}
			},
			y: {
				ticks: {
					color: '#9ca3af',
					font: { size: 11 },
					count: 5
				},
				grid: {
					color: 'transparent',
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
			duration: 500
		}
	}
	return { data, options }
}
