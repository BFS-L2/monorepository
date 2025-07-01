import type { CurrencyData } from '@/shared/types/currencies.types'

export interface WalletResponse {
	cryptoBalances: {
		[key: string]: number
	}
	usdBalance: number
}

export interface IWalletSection {
	currenciesData: CurrencyData[] | undefined
	wallet: WalletResponse | undefined
	isCriticalLoading?: boolean
	isWalletMissing?: boolean
}
