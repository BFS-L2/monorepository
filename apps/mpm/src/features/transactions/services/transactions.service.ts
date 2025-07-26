import { apiClient } from '@/api/interceptors'

import type { TransactionsResponse } from '../types'

export const transactionsService = {
	async getTransactions(limit: number): Promise<TransactionsResponse> {
		const response = await apiClient.get<TransactionsResponse>(`/wallet/transactions`, {
			params: { limit }
		})
		return response.data
	}
}
