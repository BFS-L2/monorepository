import { $axios } from '@/api/interceptors'

import type { CryptoFormData } from '../types'

import type { MessageResponse } from '@/shared/types/message.types'

export const cryptoService = {
	async buyCrypto(data: CryptoFormData): Promise<MessageResponse> {
		const response = await $axios.post<MessageResponse>('/wallet/buy-crypto', data)
		return response.data
	},

	async sellCrypto(data: CryptoFormData): Promise<MessageResponse> {
		const response = await $axios.post<MessageResponse>('/wallet/sell-crypto', data)
		return response.data
	}
}
