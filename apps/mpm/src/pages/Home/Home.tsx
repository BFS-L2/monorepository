import { PageWrapper } from '@/components/PageWrapper'

import { HeroSection } from './components/HeroSection'
import { Currencies } from './components/currencies/CurrenciesList'
import { LineChartsList } from './components/line-chart/LineChartsList'
import { NewsSection } from './components/news/NewsSection'

export const Home = () => {
	return (
		<PageWrapper>
			<section className='container mx-auto p-4'>
				<HeroSection />
				<NewsSection />
				<Currencies />
				<LineChartsList />
			</section>
		</PageWrapper>
	)
}
