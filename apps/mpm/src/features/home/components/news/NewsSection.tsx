import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Title } from '@/components/ui/title/Title'

import { useNewsData } from '@/hooks/api/useNews'

import './News.css'
import { NewsCard } from './NewsCard'
import { NewsCardSkeleton } from './NewsCardSkeleton'
import type { NewsItem } from '@/shared/types/currencies.types'

export const NewsSection = () => {
	const { newsData, isLoading } = useNewsData()

	return (
		<section className='pb-10 md:pb-20'>
			<Title className='mb-4' type='h2'>
				Latest news
			</Title>

			<Swiper
				modules={[Navigation]}
				spaceBetween={16}
				navigation
				breakpoints={{
					0: { slidesPerView: 1.1 },
					640: { slidesPerView: 1.5 },
					768: { slidesPerView: 2.2 },
					1024: { slidesPerView: 3.2 },
					1280: { slidesPerView: 4.2 }
				}}
				className='news-swiper'
			>
				{isLoading &&
					Array.from({ length: 5 }).map((_, idx) => (
						<SwiperSlide key={`skeleton-${idx}`}>
							<NewsCardSkeleton />
						</SwiperSlide>
					))}

				{!isLoading &&
					newsData &&
					newsData?.map((item: NewsItem, index: number) => (
						<SwiperSlide key={index}>
							<NewsCard {...item} />
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	)
}
