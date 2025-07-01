import { Suspense, lazy } from 'react'

import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

const CryptoLineChart = lazy(() =>
	import('./CryptoLineChart').then(module => ({
		default: module.CryptoLineChart
	}))
)

export const LineChartsList = () => {
	return (
		<section className='pb-10 md:pb-20'>
			<Title type='h2' className='mb-4'>
				Current coins charts
			</Title>
			<div className='mt-4 flex flex-col gap-6'>
				<Suspense fallback={<Loader />}>
					<CryptoLineChart coin='BTC' />
					<CryptoLineChart coin='ETH' />
					<CryptoLineChart coin='XRP' />
				</Suspense>
			</div>
		</section>
	)
}
