import { MIN_API_CRYPTO } from '@/constants/api.constants'

import { $axios } from '@/api/interceptors'

import type {
	ICurrencyDto,
	INewsApiResponse
} from '@/shared/types/currencies.types'

const currencyService = {
	async getCurrencies(): Promise<ICurrencyDto> {
		const response = await $axios.get(
			`${MIN_API_CRYPTO}/data/top/mktcapfull?limit=20&tsym=USD`
		)
		return response.data
	},

	async getGlobalCurrencies() {
		const response = await $axios.get(
			`${MIN_API_CRYPTO}/data/top/mktcapfull?limit=100&tsym=USD`
		)
		return response.data
	},

	async getHistory(coin: string) {
		const response = await $axios.get(`${MIN_API_CRYPTO}/data/v2/histohour`, {
			params: {
				fsym: coin,
				tsym: 'USD',
				limit: 24
			}
		})
		return response.data
	},

	async getNews(): Promise<INewsApiResponse> {
		const response = await $axios.get(
			`${MIN_API_CRYPTO}/data/v2/news/?lang=EN&limit=9`
		)
		return response.data
	}
}

export default currencyService
