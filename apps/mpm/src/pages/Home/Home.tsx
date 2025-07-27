import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'

import { MAIN_SECTIONS } from '@/constants/enums.constants'

import { Currencies, HeroSection, MainLiveChart, NewsSection, TopBar } from '@/features/home'

export const Home = () => {
	return (
		<PageWrapper>
			<HeroSection />
			<TopBar />
			<MainLiveChart sectionKey='coins' sectionsValue={MAIN_SECTIONS.coins} />
			<NewsSection sectionKey='news' sectionsValue={MAIN_SECTIONS.news} />
			{/* <FutureCrypto sectionKey='future' sectionsValue={MAIN_SECTIONS.future} /> */}
			<Currencies sectionKey='available_coins' sectionsValue={MAIN_SECTIONS.available_coins} />
			{/* <LineChartsList /> */}
		</PageWrapper>
	)
}
