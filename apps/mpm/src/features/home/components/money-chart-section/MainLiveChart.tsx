import { Suspense, lazy, useState } from 'react'

import { Title } from '@/components/ui/title/Title.tsx'

import { useCheckDesktop } from '@/hooks/ui/useCheckDesktop.ts'

import { CryptoChartSkeleton } from '../line-chart/CryptoChartSkeleton.tsx'

import { CoinSlider } from './CoinSlider.tsx'

const CryptoLineChart = lazy(() =>
	import('../line-chart/CryptoLineChart.tsx').then(module => ({
		default: module.CryptoLineChart
	}))
)

export const MainLiveChart = () => {
	const [coin, setCoin] = useState<string>('')
	const { isDesktop } = useCheckDesktop()

	return (
		<section className='pb-10 md:pb-20'>
			<Title type='h2' className='mb-4'>
				Coins
			</Title>

			<CoinSlider selectedCoin={coin} setCoin={setCoin} />

			{isDesktop && (
				<Suspense fallback={<CryptoChartSkeleton />}>
					<CryptoLineChart coin={coin} />
				</Suspense>
			)}
		</section>
	)
}
