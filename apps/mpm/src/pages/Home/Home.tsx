// import { CryptoLineChart } from './components/CryptoLineChart'
import { Suspense, lazy } from 'react'

import { PageWrapper } from '@/components/PageWrapper'
import { Loader } from '@/components/ui/loader/Loader'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { HeroSection } from './components/HeroSection'
import { Currencies } from './components/currencies/Currencies'
import { NewsSection } from './components/news/NewsSection'

const CryptoLineChart = lazy(() =>
	import('./components/line-chart/CryptoLineChart').then(module => ({
		default: module.CryptoLineChart
	}))
)

export const Home = () => {
	const { currenciesData, isLoading } = useCurrenciesData()

	return (
		<PageWrapper>
			{/* <MainBlock /> */}
			<div className='container mx-auto p-4'>
				<HeroSection />
				<NewsSection />

				{isLoading && (
					<div className='flex items-center justify-center py-5'>
						<Loader />
					</div>
				)}

				{!isLoading && currenciesData && (
					<Currencies currenciesData={currenciesData} />
				)}

				<div className='mt-4 flex flex-col gap-4'>
					<Suspense fallback={<Loader />}>
						<CryptoLineChart coin='BTC' />
						<CryptoLineChart coin='ETH' />
						<CryptoLineChart coin='XRP' />
					</Suspense>
				</div>
			</div>
		</PageWrapper>
	)
}
