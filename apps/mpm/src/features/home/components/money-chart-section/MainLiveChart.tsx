import { Suspense, lazy, useState } from 'react'

import { Title } from '@/components/ui/title/Title.tsx'

import { useCheckDesktop } from '@/hooks/ui/useCheckDesktop.ts'

import { useIntersectionSection } from '../../hooks/useIntersectionSection.ts'
import { CryptoChartSkeleton } from '../line-chart/CryptoChartSkeleton.tsx'

import { CoinSlider } from './CoinSlider.tsx'

const CryptoLineChart = lazy(() =>
	import('../line-chart/CryptoLineChart.tsx').then(module => ({
		default: module.CryptoLineChart
	}))
)

export const MainLiveChart = ({
	sectionKey,
	sectionsValue
}: {
	sectionKey: string
	sectionsValue: string
}) => {
	const [coin, setCoin] = useState<string>('')
	const { isDesktop } = useCheckDesktop()

	const { intersectionRef } = useIntersectionSection(sectionKey)

	return (
		<section
			className='container mx-auto px-2 pb-10 md:pb-20'
			id={sectionKey}
			ref={intersectionRef}
			style={{ scrollMarginTop: '65px' }}
		>
			<Title type='h2' className='mb-4'>
				{sectionsValue}
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
