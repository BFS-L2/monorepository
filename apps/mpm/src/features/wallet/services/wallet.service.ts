import { apiClient } from '@/api/interceptors'

import type { WalletResponse } from '../types'

export const walletService = {
	async getWallet(): Promise<WalletResponse> {
		const response = await apiClient.get<WalletResponse>('/wallet')
		return response.data
	}
}
