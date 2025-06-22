import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useSellCrypto } from '../hooks/useSellCrypto'

import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface ISellCrypto {
	wallet: IUserWalletDto | undefined
	currenciesData: ICurrency[] | undefined
}

export const SellCrypto = ({ wallet, currenciesData }: ISellCrypto) => {
	const {
		coinPrice,
		coinAmount,
		usdAmount,
		selectedCoin,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleCoinSelect,
		handleSubmitSell,
		error
	} = useSellCrypto({
		wallet,
		currenciesData
	})
	const arrayCryptoBalances = Object.entries(wallet?.cryptoBalances || {})

	return (
		<div className='flex w-full flex-col items-center rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<h2 className='mb-4 flex items-center bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-start text-xl font-bold text-transparent'>
				Sell Crypto
			</h2>
			<form onSubmit={handleSubmitSell} className='flex w-full flex-col gap-1'>
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
					<span className='font-mono text-teal-300'>{coinPrice} USD</span>
				</span>

				{error && <span className='text-sm text-red-500'>{error}</span>}

				<select
					name='currency'
					id='currency'
					value={selectedCoin || ''}
					onChange={handleCoinSelect}
					className='mb-2 w-full rounded border border-zinc-300 bg-white p-2 text-sm text-zinc-900 placeholder-zinc-500 transition-all duration-300 focus:ring-1 focus:ring-teal-400 focus:outline-none dark:border-none dark:bg-zinc-900 dark:text-white'
				>
					<option value=''>Select coin</option>
					{arrayCryptoBalances.map(
						([symbol, amount]) =>
							amount !== 0 && (
								<option key={symbol} value={symbol}>
									{symbol}
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
					Sell
				</Button>
			</form>
		</div>
	)
}
