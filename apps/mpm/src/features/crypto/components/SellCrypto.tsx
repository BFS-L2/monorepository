import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Hr } from '@/components/ui/hr/Hr'
import { Select } from '@/components/ui/select/Select'
import { Title } from '@/components/ui/title/Title'

import type { WalletResponse } from '../../wallet/types'
import { useSellCrypto } from '../hooks/useSellCrypto'

import type { CurrencyData } from '@/shared/types/currencies.types'

interface ISellCrypto {
	wallet: WalletResponse | undefined
	currenciesData: CurrencyData[] | undefined
}

export const SellCrypto = ({ wallet, currenciesData }: ISellCrypto) => {
	const {
		walletBalanceOptions,
		selectedCoin,
		setSelectedCoin,
		coinAmount,
		usdAmount,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleSubmitSell,
		coinPrice,
		error
	} = useSellCrypto({
		wallet,
		currenciesData
	})

	return (
		<div className='flex w-full flex-col items-center rounded-xl bg-white p-6 text-teal-400 dark:bg-zinc-800'>
			<form onSubmit={handleSubmitSell} className='flex w-full flex-col gap-2'>
				<Title type='h2' className='mb-2 text-xl text-teal-400 dark:text-teal-400'>
					Sell Crypto
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

				<span className='text-sm text-zinc-800 dark:text-zinc-200'>
					Coin price:{' '}
					<span className='font-mono text-teal-400'>
						{coinPrice !== null ? `${coinPrice} USD` : 'No data available'}
					</span>
				</span>

				<Select options={walletBalanceOptions} value={selectedCoin} onChange={setSelectedCoin} />

				<ErrorMessage message={error} />

				<Button type='submit' variant='primary' className='mt-1 md:w-52'>
					Sell
				</Button>
			</form>
		</div>
	)
}
