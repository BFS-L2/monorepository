// import { CryptoLineChart } from './components/CryptoLineChart'
import { PageWrapper } from '@/components/PageWrapper'
import { Loader } from '@/components/ui/loader/Loader'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { HeroSection } from './components/HeroSection'
import { Currencies } from './components/currencies/CurrenciesList'
import { LineChartsList } from './components/line-chart/LineChartsList'
import { NewsSection } from './components/news/NewsSection'

export const Home = () => {
	const { currenciesData, isLoading } = useCurrenciesData()

	return (
		<PageWrapper>
			{/* <MainBlock /> */}
			<main className='container mx-auto p-4'>
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

				<LineChartsList />
			</main>
		</PageWrapper>
	)
}
