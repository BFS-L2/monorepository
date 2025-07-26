import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Title } from '@/components/ui/title/Title'

import { useIntersectionSection } from '../../hooks/useIntersectionSection'
import '../news/News.css'

export const FutureCrypto = ({
	sectionKey,
	sectionsValue
}: {
	sectionKey: string
	sectionsValue: string
}) => {
	const { intersectionRef } = useIntersectionSection(sectionKey)

	const FUTURE_IMAGES = [
		{
			id: 1,
			imageSrc: '/future-img-1.jpg'
		},
		{
			id: 2,
			imageSrc: '/future-img-2.jpg'
		},
		{
			id: 3,
			imageSrc: '/future-img-3.jpg'
		},
		{
			id: 4,
			imageSrc: '/future-img-4.png'
		}
	]

	return (
		<section
			className='container mx-auto px-2 pb-10 md:pb-20'
			id={sectionKey}
			ref={intersectionRef}
			style={{ scrollMarginTop: '65px' }}
		>
			<Title type='h2' className='mb-4'>
				{sectionsValue}
			</Title>

			<div className='grid gap-10 md:grid-cols-12'>
				<div className='col-span-6'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum nisi laboriosam
						atque nulla ex dolorem temporibus soluta et corporis?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum nisi laboriosam
						atque nulla ex dolorem temporibus soluta et corporis?
					</p>
				</div>
				<div className='col-span-6'>
					<Swiper
						spaceBetween={16}
						slidesPerView={'auto'}
						loop={true}
						autoplay={{
							delay: 3200,
							disableOnInteraction: false,
							pauseOnMouseEnter: true
						}}
						effect='fade'
						speed={1100}
						modules={[Autoplay, EffectFade]}
						observer={true}
						observeParents={false}
						className='news-swiper rounded-lg'
					>
						{FUTURE_IMAGES.map(item => (
							<SwiperSlide key={item.id}>
								<img
									src={`${item.imageSrc}`}
									alt='Logo'
									className='aspect-[1/1] w-full rounded-lg object-cover'
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
