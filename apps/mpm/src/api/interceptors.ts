import axios from 'axios'

import { BASE_URL } from '@/constants/api.constants'

import { queryClient } from '@/utils/queryClient'

export const $axios = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
})

$axios.interceptors.response.use(
	res => res,
	error => {
		if (error.response?.status === 401) {
			queryClient.setQueryData(['profile'], null)
		}
		return Promise.reject(error)
	}
)
