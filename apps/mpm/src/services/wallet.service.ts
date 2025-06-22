import { $axios } from '@/api/interceptors'

import type {
	IBuyCryptoDto,
	ISellCryptoDto
} from '@/shared/types/currencies.types'
import type {
	IUserTransactionDto,
	IUserWalletDto
} from '@/shared/types/user.types'

export const walletService = {
	async getWallet(): Promise<IUserWalletDto> {
		const response = await $axios.get('/wallet')

		return response.data
	},

	async getTransactions(): Promise<IUserTransactionDto> {
		const response = await $axios.get('/wallet/transactions')

		return response.data
	},

	async buyCrypto(data: IBuyCryptoDto) {
		const response = await $axios.post('/wallet/buy-crypto', data)

		return response.data
	},

	async sellCrypto(data: ISellCryptoDto) {
		const response = await $axios.post('/wallet/sell-crypto', data)

		return response.data
	}
}
