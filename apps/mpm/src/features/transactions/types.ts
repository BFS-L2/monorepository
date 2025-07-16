import type { CurrencyData } from '@/shared/types/currencies.types'

export interface TransactionsResponse {
	id: string
	type: 'buy' | 'sell'
	currency_from: string
	currency_to: string
	amount_from: number
	amount_to: number
	rate: number
	created_at: string
}

export interface IUserTransactions {
	transactions: TransactionsResponse[]
	currenciesData: CurrencyData[] | undefined
}

export interface ITransactionsItems {
	currenciesData: CurrencyData[] | undefined
	isCriticalLoading: boolean
}

export interface ITransactionsItem {
	transaction: TransactionsResponse
	currenciesData: CurrencyData[] | undefined
}
