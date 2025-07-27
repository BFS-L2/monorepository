import { COIN_LORE_API, MIN_API_CRYPTO } from '@/constants/api.constants'

import { apiClient, externalApi } from '@/api/interceptors'

import type { HistoricalChartResponse, MainInfoResponse } from '../types'

import type { CurrencyResponse, NewsResponse } from '@/shared/types/currencies.types'

const currencyService = {
	async getCurrencies(): Promise<CurrencyResponse> {
		const response = await apiClient.get<CurrencyResponse>(
			`${MIN_API_CRYPTO}/data/top/mktcapfull`,
			{
				params: { limit: 20, tsym: 'USD' }
			}
		)
		return response.data
	},

	async getHistory(coin: string, limit: number = 24): Promise<HistoricalChartResponse> {
		const response = await apiClient.get<HistoricalChartResponse>(
			`${MIN_API_CRYPTO}/data/v2/histohour`,
			{
				params: {
					fsym: coin,
					tsym: 'USD',
					limit
				}
			}
		)

		return response.data
	},

	async getMainInfo(): Promise<MainInfoResponse> {
		const response = await externalApi.get<MainInfoResponse>(`${COIN_LORE_API}/api/global/`)

		return response.data
	},

	async getNews(): Promise<NewsResponse> {
		const response = await apiClient.get<NewsResponse>(`${MIN_API_CRYPTO}/data/v2/news/`, {
			params: { lang: 'EN', limit: 20 }
		})
		return response.data
	}
}

export default currencyService
