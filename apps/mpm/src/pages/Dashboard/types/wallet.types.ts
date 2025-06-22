import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

export interface IWalletSection {
	currenciesData: ICurrency[] | undefined
	wallet: IUserWalletDto | undefined
}
