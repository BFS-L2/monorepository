import { formatBigInt } from '@/utils/formatBigInt.utils'

import type { MainInfo } from '../../types'

export const InfoBlock = ({ mainData }: { mainData: MainInfo }) => {
	return (
		<div className='mb-5 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3'>
			<div className='rounded bg-zinc-600/35 px-3 py-2 backdrop-blur-xs'>
				<p className='text-xs text-zinc-300'>Capitalization</p>
				<p className='font-mono text-base text-white'>
					<span className='mr-2'>{formatBigInt(mainData.total_mcap)}</span>
					<span
						className={`ml-1 text-sm ${Number(mainData?.mcap_change) >= 0 ? 'text-green-400' : 'text-red-400'}`}
					>
						{Number(mainData?.mcap_change) >= 0 ? '+' : ''}
						{mainData?.mcap_change}%
					</span>
				</p>
			</div>

			<div className='rounded bg-zinc-600/35 px-3 py-2 backdrop-blur-xs'>
				<p className='text-xs text-zinc-300'>BTC Dominance</p>
				<p className='font-mono text-base text-white'>{mainData?.btc_d}%</p>
			</div>

			<div className='rounded bg-zinc-600/35 px-3 py-2 backdrop-blur-xs'>
				<p className='text-xs text-zinc-300'>Daily trading</p>
				<p className='font-mono text-base text-white'>{formatBigInt(mainData?.total_volume)}</p>
			</div>
		</div>
	)
}
