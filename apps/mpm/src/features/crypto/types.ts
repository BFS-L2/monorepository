import type { WalletResponse } from '../wallet'

import type { CurrencyData } from '@/shared/types/currencies.types'

export interface CryptoFormData {
	symbol: string
	amount: string
	price: number
}

export interface BuySellProps {
	wallet: WalletResponse | undefined
	currenciesData: CurrencyData[] | undefined
}

type ConverterType = 'buy' | 'sell'

export interface CoinConverterProps {
	selectedCoin: {
		label: string
		value: string
	} | null
	type: ConverterType
	currenciesData?: CurrencyData[] | undefined
}

export interface BalanceOptionProps {
	label: string
	value: string
}
