import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

import { Currencies, HeroSection, LineChartsList, NewsSection } from '@/features/home'

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
