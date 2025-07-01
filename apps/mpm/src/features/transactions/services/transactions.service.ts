import { $axios } from '@/api/interceptors'

import type { TransactionsResponse } from '../types'

export const transactionsService = {
	async getTransactions(limit: number): Promise<TransactionsResponse> {
		const response = await $axios.get<TransactionsResponse>(`/wallet/transactions`, {
			params: { limit }
		})
		return response.data
	}
}
