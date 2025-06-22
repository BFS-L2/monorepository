import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useBuyCrypto } from '../hooks/useBuyCrypto'

import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface IBuyCrypto {
	wallet: IUserWalletDto | undefined
	currenciesData: ICurrency[] | undefined
}

export const BuyCrypto = ({ wallet, currenciesData }: IBuyCrypto) => {
	const {
		selectedCoin,
		coinAmount,
		usdAmount,
		coinPrice,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleCoinSelect,
		handleSubmit,
		error
	} = useBuyCrypto({
		wallet,
		currenciesData
	})

	return (
		<div className='flex w-full flex-col items-center rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<h2 className='mb-4 flex items-center bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-xl font-bold text-transparent'>
				Buy Crypto
			</h2>
			<form onSubmit={handleSubmit} className='flex w-full flex-col gap-1'>
				<label className='text-sm text-zinc-400' htmlFor='coinAmount'>
					Amount coin
				</label>
				<Input
					type='text'
					placeholder='Enter amount'
					value={coinAmount}
					onChange={handleCoinAmountChange}
				/>

				<label className='text-sm text-zinc-400' htmlFor='usdAmount'>
					Amount USD
				</label>
				<Input
					type='text'
					placeholder='Enter amount'
					value={usdAmount}
					onChange={handleUsdAmountChange}
				/>

				<span className='text-sm text-zinc-400'>
					Coin price:{' '}
					<span className='font-mono text-teal-300'>{coinPrice()} USD</span>
				</span>

				{error && <span className='text-sm text-red-500'>{error}</span>}

				<select
					name='currency'
					id='currency'
					value={selectedCoin?.CoinInfo.Id || ''}
					onChange={handleCoinSelect}
					className='mb-2 w-full rounded border border-zinc-300 p-2 text-sm text-zinc-900 placeholder-zinc-500 transition-all duration-300 focus:ring-1 focus:ring-teal-400 focus:outline-none dark:border-none dark:bg-zinc-900 dark:text-white'
				>
					<option value=''>Select coin</option>
					{currenciesData?.map(
						currency =>
							currency.DISPLAY?.USD?.PRICE !== null &&
							currency.DISPLAY?.USD?.PRICE !== undefined && (
								<option key={currency.CoinInfo.Id} value={currency.CoinInfo.Id}>
									{currency.CoinInfo.Name}
								</option>
							)
					)}
				</select>
				<Button
					type='submit'
					variant='primary'
					className='md:w-52'
					disabled={
						!selectedCoin || !coinAmount || !usdAmount || Number(usdAmount) <= 0
					}
				>
					Buy
				</Button>
			</form>
		</div>
	)
}
