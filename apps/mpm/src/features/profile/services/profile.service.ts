import { $axios } from '@/api/interceptors'

import type {
	UserEmailFormData,
	UserPasswordsFormData,
	UserProfileFormData,
	UserResponse
} from '../types'

import type { MessageResponse } from '@/shared/types/message.types'

export const userService = {
	async getProfile(): Promise<UserResponse> {
		const response = await $axios.get<UserResponse>('/users/profile')
		return response.data
	},

	async updateProfile(data: UserProfileFormData): Promise<UserResponse> {
		const response = await $axios.put<UserResponse>('/users/update-profile', data)
		return response.data
	},

	async updatePassword(data: UserPasswordsFormData): Promise<MessageResponse> {
		const response = await $axios.post<MessageResponse>('/users/update-password', data)
		return response.data
	},

	async updateEmail(data: UserEmailFormData): Promise<MessageResponse> {
		const response = await $axios.post<MessageResponse>('/users/update-email', data)
		return response.data
	}

	// async updateAvatar(formData: FormData) {
	// 	const response = await $axios.post('/users/update-avatar', formData, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data'
	// 		}
	// 	})
	// 	return response.data
	// }
}
