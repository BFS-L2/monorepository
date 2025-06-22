import { $axios } from '@/api/interceptors'

import type { ILoginDto, IRegisterDto } from '@/shared/types/auth.types'

export const authService = {
	async login(data: ILoginDto) {
		const response = await $axios.post('/auth/login', data)

		return response.data
	},

	async register(data: IRegisterDto) {
		const response = await $axios.post('/auth/register', data)

		return response.data
	},

	async logout() {
		const response = await $axios.post('/auth/logout')

		return response.data
	}
}
