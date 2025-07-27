export interface MainInfo {
	active_markets: number
	avg_change_percent: string
	btc_d: string
	coins_count: number
	eth_d: string
	mcap_ath: number
	mcap_change: string
	total_mcap: number
	total_volume: number
	volume_ath: number
	volume_change: string
}

export type MainInfoResponse = MainInfo[]

export interface HistoricalDataPoint {
	time: number
	high: number
	low: number
	open: number
	close: number
	volumefrom: number
	volumeto: number
	conversionType: 'direct' | 'invert' | 'internal' | string
	conversionSymbol: string
}

export interface HistoricalChart {
	Aggregated: boolean
	Data: HistoricalDataPoint[]
	TimeFrom: number
	TimeTo: number
}

export interface HistoricalChartResponse {
	Data: HistoricalChart
}
