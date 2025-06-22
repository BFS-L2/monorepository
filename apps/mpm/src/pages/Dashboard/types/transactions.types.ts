import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserTransactionDto } from '@/shared/types/user.types'

export interface IUserTransactions {
	transactions: IUserTransactionDto[]
	currenciesData: ICurrency[] | undefined
}
