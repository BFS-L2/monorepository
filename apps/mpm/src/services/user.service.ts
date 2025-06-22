import { $axios } from '@/api/interceptors'

import type {
	IUpdateProfileDto,
	IUpdateUserEmailDto,
	IUpdateUserPasswordDto,
	IUserDto
} from '@/shared/types/user.types'

export const userService = {
	async getProfile(): Promise<IUserDto> {
		const response = await $axios.get('/users/profile')

		return response.data
	},

	async updateProfile(data: IUpdateProfileDto) {
		const response = await $axios.put('/users/update-profile', data)

		return response.data
	},

	async updatePassword(data: IUpdateUserPasswordDto) {
		const response = await $axios.post('/users/update-password', data)

		return response.data
	},

	async updateEmail(data: IUpdateUserEmailDto) {
		const response = await $axios.post('/users/update-email', data)

		return response.data
	},

	async updateAvatar(formData: FormData) {
		const response = await $axios.post('/users/update-avatar', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		return response.data
	}
}
