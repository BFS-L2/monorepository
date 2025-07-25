import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

import { Currencies, HeroSection, NewsSection } from '@/features/home'
import { MainLiveChart } from '@/features/home/components/money-chart-section/MainLiveChart'

export const Home = () => {
	return (
		<PageWrapper>
			<section className='container mx-auto p-4'>
				<HeroSection />
				<MainLiveChart />
				{/* <TopBar /> */}
				<NewsSection />
				<Currencies />
				{/* <LineChartsList /> */}
			</section>
		</PageWrapper>
	)
}
