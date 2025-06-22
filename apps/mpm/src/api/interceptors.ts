import axios from 'axios'

import { BASE_URL } from '@/constants/api.constants'

import { logoutWithoutService } from '@/utils/logout.utils'

export const $axios = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
})

$axios.interceptors.response.use(
	res => res,
	async error => {
		if (error.response?.status === 401) {
			logoutWithoutService()
		}
		return Promise.reject(error)
	}
)
