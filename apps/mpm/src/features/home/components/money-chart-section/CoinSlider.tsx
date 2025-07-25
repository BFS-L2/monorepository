import { useEffect } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import '../news/News.css'

import { CoinCard } from './CoinCard'
import { CoinCardSkeleton } from './CoinCardSkeleton'

export const CoinSlider = ({
	setCoin,
	selectedCoin
}: {
	setCoin: (coin: string) => void
	selectedCoin: string
}) => {
	const { currenciesData, isLoading } = useCurrenciesData()

	useEffect(() => {
		if (currenciesData && currenciesData.length > 0) {
			const firstValidCoin = currenciesData[0]?.CoinInfo?.Name
			if (firstValidCoin) {
				setCoin(firstValidCoin)
			}
		}
	}, [currenciesData])

	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={16}
			navigation
			autoHeight={false}
			observer={true}
			observeParents={false}
			breakpoints={{
				0: { slidesPerView: 1.3 },
				640: { slidesPerView: 2.1 },
				768: { slidesPerView: 2.5 },
				1024: { slidesPerView: 3.1 },
				1280: { slidesPerView: 4.1 }
			}}
			className='news-swiper'
		>
			{isLoading &&
				Array.from({ length: 5 }).map((_, index) => (
					<SwiperSlide key={`skeleton-${index}`}>
						<CoinCardSkeleton />
					</SwiperSlide>
				))}

			{!isLoading &&
				currenciesData?.map(coin => (
					<SwiperSlide key={coin.CoinInfo.FullName}>
						<CoinCard coin={coin} selectedCoin={selectedCoin} setCoin={setCoin} />
					</SwiperSlide>
				))}
		</Swiper>
	)
}
