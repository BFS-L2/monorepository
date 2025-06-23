import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

import { useNewsData } from '@/hooks/api/useNews'

import './News.css'
import { NewsCard } from './NewsCard'
import type { INewsItem } from '@/shared/types/currencies.types'

export const NewsSection = () => {
	const { newsData, isLoading } = useNewsData()

	const filteredNews = newsData?.slice(0, 15)

	return (
		<>
			{isLoading && (
				<div className='flex items-center justify-center py-5'>
					<Loader />
				</div>
			)}
			{!isLoading && newsData && (
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
						{filteredNews?.map((item: INewsItem, index: number) => (
							<SwiperSlide key={index}>
								<NewsCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</section>
			)}
		</>
	)
}
