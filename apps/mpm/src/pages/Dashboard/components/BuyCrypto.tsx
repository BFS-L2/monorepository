import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Hr } from '@/components/ui/hr/Hr'
import { Title } from '@/components/ui/title/Title'

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
			<form onSubmit={handleSubmit} className='flex w-full flex-col gap-2'>
				<Title
					type='h2'
					className='mb-2 text-xl text-teal-400 dark:text-teal-400'
				>
					Buy Crypto
				</Title>

				<Hr />

				<FormInput
					type='text'
					label='Coin'
					placeholder='Enter amount coin:'
					value={coinAmount}
					onChange={handleCoinAmountChange}
				/>

				<FormInput
					type='text'
					label='USD'
					placeholder='Enter amount usd:'
					value={usdAmount}
					onChange={handleUsdAmountChange}
				/>

				<span className='ml-1 text-sm text-zinc-200'>
					Coin price:{' '}
					<span className='font-mono text-teal-300'>{coinPrice()} USD</span>
				</span>

				<select
					name='currency'
					id='currency'
					value={selectedCoin?.CoinInfo.Id || ''}
					onChange={handleCoinSelect}
					className='w-full rounded border border-zinc-300 p-2 text-sm text-zinc-900 placeholder-zinc-500 transition-all duration-300 focus:ring-1 focus:ring-teal-400 focus:outline-none dark:border-none dark:bg-zinc-900 dark:text-white'
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

				<ErrorMessage message={error} />

				<Button
					type='submit'
					variant='primary'
					className='mt-1 md:w-52'
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
