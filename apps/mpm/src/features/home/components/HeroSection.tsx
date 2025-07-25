import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button/Button'
import { Title } from '@/components/ui/title/Title'

import { ROUTES } from '@/constants/enums.constants'

import { useAuth } from '@/hooks/auth/useAuth'

import { marketData } from '@/shared/data/market.data'

export const HeroSection = () => {
	const { isAuthenticated } = useAuth()

	const { totalCap, capChange24h, btcDominance, marketSentiment } = marketData

	const navigate = useNavigate()

	const handleClick = () => {
		if (isAuthenticated) {
			navigate(ROUTES.DASHBOARD)
		} else navigate(ROUTES.LOGIN)
	}

	return (
		<section className='mx-auto justify-items-center py-20 text-center md:py-35'>
			<Title
				type='h1'
				className='mb-4 flex flex-col text-2xl font-extrabold uppercase sm:text-3xl sm:leading-8 md:text-4xl md:leading-10 lg:text-5xl lg:leading-14 xl:text-6xl xl:leading-16'
			>
				<span className='block'>Tracking and analytics</span>
				<span className='block text-teal-400'>crypto market</span>
			</Title>

			<div className='mb-5 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3'>
				<div className='rounded border-1 border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-none dark:bg-zinc-800'>
					<p className='text-xs text-zinc-500 dark:text-zinc-400'>Capitalization</p>
					<p className='font-mono text-base text-zinc-900 dark:text-white'>
						${totalCap.toLocaleString()}B
						<span
							className={`ml-1 text-xs ${capChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}
						>
							{capChange24h >= 0 ? '↑' : '↓'} {Math.abs(capChange24h)}%
						</span>
					</p>
				</div>

				<div className='rounded border-1 border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-none dark:bg-zinc-800'>
					<p className='text-xs text-zinc-500 dark:text-zinc-400'>BTC Dominance</p>
					<p className='font-mono text-base text-zinc-900 dark:text-white'>{btcDominance}%</p>
				</div>

				<div className='rounded border-1 border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-none dark:bg-zinc-800'>
					<p className='text-xs text-zinc-500 dark:text-zinc-400'>Activity</p>
					<p className='font-mono text-base text-zinc-900 dark:text-white'>{marketSentiment}</p>
				</div>
			</div>

			<Button onClick={handleClick} className='w-52'>
				Start trading
			</Button>
		</section>
	)
}
