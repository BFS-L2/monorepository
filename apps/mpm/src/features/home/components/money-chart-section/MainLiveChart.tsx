import { Suspense, lazy, memo, useState } from 'react'

import { useCheckDesktop } from '@/hooks/ui/useCheckDesktop.ts'

import { IntersectionSectionTitle } from '../IntersectionSectionTitle.tsx'
import { CryptoChartSkeleton } from '../line-chart/CryptoChartSkeleton.tsx'

import { CoinSlider } from './CoinSlider.tsx'

const CryptoLineChart = lazy(() =>
	import('../line-chart/CryptoLineChart.tsx').then(module => ({
		default: module.CryptoLineChart
	}))
)

export const MainLiveChart = memo(
	({ sectionKey, sectionsValue }: { sectionKey: string; sectionsValue: string }) => {
		const [coin, setCoin] = useState<string>('')
		const { isDesktop } = useCheckDesktop()

		return (
			<section className='container mx-auto px-2 pb-10 md:pb-20'>
				<IntersectionSectionTitle sectionKey={sectionKey} sectionsValue={sectionsValue} />

				<CoinSlider selectedCoin={coin} setCoin={setCoin} />

				{isDesktop && (
					<Suspense fallback={<CryptoChartSkeleton />}>
						<CryptoLineChart coin={coin} />
					</Suspense>
				)}
			</section>
		)
	}
)
