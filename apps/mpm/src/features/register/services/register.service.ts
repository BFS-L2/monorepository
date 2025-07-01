import { $axios } from '@/api/interceptors'

import type { RegisterFormData } from '../types'

import type { MessageResponse } from '@/shared/types/message.types'

export const registerService = async (data: RegisterFormData): Promise<MessageResponse> => {
	const response = await $axios.post<MessageResponse>('/auth/register', data)
	return response.data
}
