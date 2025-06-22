import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button/Button'

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
		<div className='py-10 md:py-20'>
			<div className='mx-auto max-w-xl text-center'>
				<h1 className='mb-6 flex flex-col text-2xl font-bold text-white md:text-4xl'>
					Tracking and analytics{' '}
					<span className='text-teal-400'>crypto market</span>
				</h1>

				<div className='mb-6 grid gap-2 sm:grid-cols-3'>
					<div className='rounded bg-zinc-800 px-3 py-2'>
						<p className='text-xs text-zinc-400'>Capitalization</p>
						<p className='font-mono text-base text-white'>
							${totalCap.toLocaleString()}B
							<span
								className={`ml-1 text-xs ${capChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}
							>
								{capChange24h >= 0 ? '↑' : '↓'} {Math.abs(capChange24h)}%
							</span>
						</p>
					</div>

					<div className='rounded bg-zinc-800 px-3 py-2'>
						<p className='text-xs text-zinc-400'>BTC Dominance</p>
						<p className='font-mono text-base text-white'>{btcDominance}%</p>
					</div>

					<div className='rounded bg-zinc-800 px-3 py-2'>
						<p className='text-xs text-zinc-400'>Activity</p>
						<p className='font-mono text-base text-white'>{marketSentiment}</p>
					</div>
				</div>

				<Button onClick={handleClick} className='w-52'>
					Start trading
				</Button>
			</div>
		</div>
	)
}
