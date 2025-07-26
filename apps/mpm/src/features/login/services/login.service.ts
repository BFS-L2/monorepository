import { apiClient } from '@/api/interceptors'

import type { LoginFormData } from '../types'

import type { MessageResponse } from '@/shared/types/message.types'

export const loginService = {
	async login(data: LoginFormData): Promise<MessageResponse> {
		const response = await apiClient.post<MessageResponse>('/auth/login', data)
		return response.data
	},

	async logout(): Promise<MessageResponse> {
		const response = await apiClient.post<MessageResponse>('/auth/logout')
		return response.data
	}
}
