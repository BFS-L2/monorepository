import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Title } from '@/components/ui/title/Title'

import { useNewsData } from '@/hooks/api/useNews'

import { useIntersectionSection } from '../../hooks/useIntersectionSection'

import './News.css'
import { NewsCard } from './NewsCard'
import { NewsCardSkeleton } from './NewsCardSkeleton'

export const NewsSection = ({
	sectionKey,
	sectionsValue
}: {
	sectionKey: string
	sectionsValue: string
}) => {
	const { newsData, isLoading } = useNewsData()

	const { intersectionRef } = useIntersectionSection(sectionKey)

	return (
		<section
			className='container mx-auto px-2 pb-10 md:pb-20'
			id={sectionKey}
			ref={intersectionRef}
			style={{ scrollMarginTop: '65px' }}
		>
			<Title className='mb-4' type='h2'>
				{sectionsValue}
			</Title>

			{(isLoading || newsData?.length) && (
				<Swiper
					modules={[Navigation]}
					spaceBetween={16}
					navigation
					autoHeight={false}
					observer={true}
					observeParents={false}
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
						newsData?.map((item, index) => (
							<SwiperSlide key={index}>
								<NewsCard {...item} />
							</SwiperSlide>
						))}
				</Swiper>
			)}
		</section>
	)
}
