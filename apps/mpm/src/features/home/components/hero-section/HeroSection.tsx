import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button/Button'
import { Title } from '@/components/ui/title/Title'

import { ROUTES } from '@/constants/enums.constants'

import { useMainInfoData } from '@/hooks/api/useMainInfo'
import { useAuth } from '@/hooks/auth/useAuth'

import { InfoBlock } from './InfoBlock'
import { InfoBlockSkeleton } from './InfoBlockSkeleton'

export const HeroSection = () => {
	const { isAuthenticated } = useAuth()

	const { mainData, isLoading } = useMainInfoData()

	const navigate = useNavigate()

	const handleClick = () => {
		if (isAuthenticated) {
			navigate(ROUTES.DASHBOARD)
		} else navigate(ROUTES.LOGIN)
	}

	return (
		<section className='relative mb-3 max-h-[600px] w-full overflow-hidden'>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 z-0 h-full w-full object-cover'
			>
				<source src='/background.mp4' type='video/mp4' />
			</video>

			<div className='relative z-10 justify-items-center bg-black/20 px-2 py-20 text-center md:py-35'>
				<Title
					type='h1'
					className='mb-4 flex flex-col text-3xl font-extrabold text-white uppercase sm:text-4xl sm:leading-10 md:text-5xl md:leading-12 lg:text-6xl lg:leading-14 xl:text-6xl xl:leading-16'
				>
					<span className='block'>Tracking and analytics</span>
					<span className='block text-teal-400'>crypto market</span>
				</Title>

				{isLoading && !mainData && <InfoBlockSkeleton />}

				{!isLoading && mainData && <InfoBlock mainData={mainData} />}

				<Button onClick={handleClick} className='w-52'>
					Start trading
				</Button>
			</div>
		</section>
	)
}
