import { ArrowLeftRight, Info } from 'lucide-react'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { useCompareStore } from '@/store/сompareStore'

import { useToggleModal } from '@/hooks/ui/useToggleModal'

import { ComparisonCoins } from '../comparison/ComparisonCoins'

import type { CurrencyData } from '@/shared/types/currencies.types'

interface ICurrencyHeader {
	coin: CurrencyData | undefined
	onInfoClick: (coinId: string | undefined) => void
}

export const CurrencyHeader = ({ coin, onInfoClick }: ICurrencyHeader) => {
	const { handleShowMenu, isShowMenu } = useToggleModal()
	const { setFirstCoin } = useCompareStore()

	const handleCloseClick = (): void => {
		onInfoClick(coin?.CoinInfo?.Id)
	}

	const handleChangeCompareCoin = (): void => {
		if (coin) {
			setFirstCoin(coin)
			handleShowMenu()
		}
	}

	return (
		<>
			<ComparisonCoins handleShowMenu={handleShowMenu} isShowMenu={isShowMenu} />
			<div className='flex w-full justify-between'>
				<div className='mb-4 flex items-center gap-2'>
					<img
						src={`${CRYPTO_COMPARE}${coin?.CoinInfo?.ImageUrl}`}
						alt={coin?.CoinInfo?.FullName}
						width={48}
						height={48}
						loading='lazy'
						className='rounded-full bg-zinc-100 dark:bg-zinc-700/50'
					/>

					<div>
						<div className='text-md bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text leading-tight font-bold text-transparent'>
							{coin?.CoinInfo?.FullName}
						</div>
						<span className='text-xs text-zinc-500 dark:text-zinc-400'>{coin?.CoinInfo?.Name}</span>
					</div>
				</div>
				<div className='flex justify-center gap-2'>
					<ArrowLeftRight
						onClick={handleChangeCompareCoin}
						size={26}
						className='cursor-pointer rounded-sm bg-zinc-100 p-1 text-teal-400 transition-colors duration-300 hover:bg-zinc-200/50 hover:text-teal-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'
					/>
					<Info
						onClick={handleCloseClick}
						size={26}
						className='cursor-pointer rounded-sm bg-zinc-100 p-1 text-teal-400 transition-colors duration-300 hover:bg-zinc-200/50 hover:text-teal-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'
					/>
				</div>
			</div>
		</>
	)
}
