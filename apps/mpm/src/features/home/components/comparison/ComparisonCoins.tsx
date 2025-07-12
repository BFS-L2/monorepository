import { AnimatePresence, motion } from 'framer-motion'
import {
	BarChart2,
	ClipboardList,
	Coins,
	DollarSign,
	Scale,
	Star,
	TrendingUp,
	X
} from 'lucide-react'

import { ModalWindow } from '@/components/ui/model/ModalWindow'
import { Select } from '@/components/ui/select/Select'
import { Title } from '@/components/ui/title/Title'

import { CRYPTO_COMPARE } from '@/constants/api.constants'

import { useCompareStore } from '@/store/сompareStore'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'

import { parsePrice } from '@/utils/parsePrice.utils'
import { cn } from '@/utils/tailwind.utils'

import { ComparisonCard } from './ComparisonCard'
import { useCurrencyOptions } from '@/features/crypto'

export const ComparisonCoins = ({
	isShowMenu,
	handleShowMenu
}: {
	isShowMenu: boolean
	handleShowMenu: () => void
}) => {
	const { currenciesData } = useCurrenciesData()
	const currencyOptions = useCurrencyOptions(currenciesData)
	const { firstCoin, secondCoin, setSecondCoin } = useCompareStore()

	const second = currenciesData?.find(coin => coin.CoinInfo.Name === secondCoin?.label)

	return (
		<AnimatePresence>
			{isShowMenu && (
				<ModalWindow handleShowMenu={handleShowMenu}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.2 }}
						className='pointer-events-auto max-h-[90vh] min-h-120 w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 dark:border-1 dark:border-zinc-700 dark:bg-zinc-800 dark:ring-zinc-700'
					>
						<div className='flex items-start justify-between'>
							<div className='flex items-center gap-2'>
								<Scale size={20} className='text-teal-400' />
								<Title type='h3' className='text-lg'>
									Crypto Comparison
								</Title>
							</div>
							<button
								onClick={handleShowMenu}
								className='cursor-pointer rounded-sm bg-zinc-100 p-1 text-teal-400 transition-colors duration-300 hover:bg-zinc-50 hover:text-teal-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'
							>
								<X size={20} />
							</button>
						</div>

						<div className='mt-4 space-y-4'>
							<div className='rounded-lg border-1 border-zinc-200 bg-white p-4 dark:border-none dark:bg-zinc-700/50'>
								<h3 className='mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-teal-400 uppercase dark:text-teal-400'>
									<Coins size={16} /> Select Assets
								</h3>

								<div className='flex flex-col gap-4 md:flex-row'>
									<div className='flex-1'>
										<div className='mb-2 text-sm text-zinc-500 dark:text-zinc-300'>
											Primary Coin
										</div>
										<div className='flex items-center gap-2 rounded-lg border-1 border-zinc-200 bg-white p-3 dark:border-none dark:bg-zinc-600/50'>
											<img
												src={`${CRYPTO_COMPARE}${firstCoin?.CoinInfo?.ImageUrl}`}
												alt={firstCoin?.CoinInfo?.FullName}
												className='h-10 w-10 rounded-full bg-zinc-200'
											/>
											<span className='text-base font-semibold text-zinc-800 dark:text-zinc-100'>
												{firstCoin?.CoinInfo?.FullName}
											</span>
										</div>
									</div>

									<div className='flex items-center justify-center'>
										<div className='h-0.5 w-full bg-teal-200 md:h-full md:w-0.5 dark:bg-zinc-700'></div>
									</div>

									<div className='flex-1'>
										<div className='mb-2 text-sm text-zinc-500 dark:text-zinc-300'>
											Compare With
										</div>
										<Select
											options={currencyOptions}
											value={secondCoin}
											onChange={setSecondCoin}
											placeholder='Select coin...'
										/>
									</div>
								</div>
							</div>

							{secondCoin && (
								<div>
									<h3 className='mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-teal-400 uppercase dark:text-teal-400'>
										<BarChart2 className='h-4 w-4' /> Comparison Results
									</h3>

									<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
										<ComparisonCard
											icon={<DollarSign className='h-5 w-5' />}
											title='Price'
											values={[
												`${parsePrice(firstCoin?.DISPLAY?.USD?.PRICE)} $`,
												`${parsePrice(second?.DISPLAY?.USD?.PRICE)} $`
											]}
										/>

										<ComparisonCard
											icon={<ClipboardList className='h-5 w-5' />}
											title='Market Cap'
											values={[
												firstCoin?.DISPLAY?.USD?.MKTCAP ?? 'N/A',
												second?.DISPLAY?.USD?.MKTCAP ?? 'N/A'
											]}
										/>

										<ComparisonCard
											icon={<Star className='h-5 w-5' />}
											title='Weiss Rating'
											values={[
												firstCoin?.CoinInfo?.Rating?.Weiss?.Rating ?? 'N/A',
												second?.CoinInfo?.Rating?.Weiss?.Rating ?? 'N/A'
											]}
										/>

										<ComparisonCard
											icon={<TrendingUp className='h-5 w-5' />}
											title='24h Change'
											values={[
												firstCoin?.DISPLAY?.USD?.CHANGEPCT24HOUR + '%',
												second?.DISPLAY?.USD?.CHANGEPCT24HOUR + '%'
											]}
											valueColors={[
												cn(
													Number(firstCoin?.DISPLAY?.USD?.CHANGE24HOUR) > 0
														? 'text-green-500'
														: 'text-red-500'
												),
												cn(
													Number(second?.DISPLAY?.USD?.CHANGE24HOUR) > 0
														? 'text-green-500'
														: 'text-red-500'
												)
											]}
										/>
									</div>
								</div>
							)}
						</div>
					</motion.div>
				</ModalWindow>
			)}
		</AnimatePresence>
	)
}
