export interface ICoinInfo {
	Id: string
	Name: string
	FullName: string
	Internal: string
	ImageUrl?: string
	Url?: string
	Algorithm: string
	ProofType: string
	AssetLaunchDate?: string
	MaxSupply?: number
	BlockTime?: number
	BlockReward?: number
	BlockNumber?: number
	NetHashesPerSecond?: number
	Type: number
	DocumentType?: string
	Rating?: {
		Weiss?: {
			Rating?: string
		}
	}
}

export interface IUsd {
	CHANGE24HOUR: string
	CHANGEDAY: string
	CHANGEHOUR: string
	CHANGEPCT24HOUR: string
	CHANGEPCTDAY: string
	CHANGEPCTHOUR: string
	CIRCULATINGSUPPLY: string
	CIRCULATINGSUPPLYMKTCAP: string
	CONVERSIONLASTUPDATE: string
	CONVERSIONSYMBOL: string
	CONVERSIONTYPE: string
	FROMSYMBOL: string
	HIGH24HOUR: string
	HIGHDAY: string
	HIGHHOUR: string
	IMAGEURL: string
	LASTMARKET: string
	LASTTRADEID: string
	LASTUPDATE: string
	LASTVOLUME: string
	LASTVOLUMETO: string
	LOW24HOUR: string
	LOWDAY: string
	LOWHOUR: string
	MARKET: string
	MKTCAP: string
	MKTCAPPENALTY: string
	OPEN24HOUR: string
	OPENDAY: string
	OPENHOUR: string
	PRICE: string
	SUPPLY: string
	TOPTIEVOLUME24HOUR: string
	TOPTIEVOLUME24HOURTO: string
	TOSYMBOL: string
	TOTALTOPTIEVOLUME24H: string
	TOTALTOPTIEVOLUME24HTO: string
	TOTALVOLUME24H: string
	TOTALVOLUME24HTO: string
	VOLUME24HOUR: string
	VOLUME24HOURTO: string
	VOLUMEDAY: string
	VOLUMEDAYTO: string
	VOLUMEHOUR: string
	VOLUMEHOURTO: string
}

export interface IUsdData {
	USD: IUsd
}

export interface ICurrency {
	CoinInfo: ICoinInfo
	DISPLAY: IUsdData
}

export interface ICurrencyDto {
	Data: ICurrency[]
}

export interface ISellCryptoDto {
	symbol: string
	amount: string
	price: string
}

export interface IBuyCryptoDto {
	symbol: string
	amount: string
	price: string
}

export interface IChartDataDto {
	time: number
	close: string
	price: number
}

export interface INewsItem {
	imageurl: string
	title: string
	body: string
	url: string
}

export interface INewsApiResponse {
	Data: INewsItem[]
	HasWarning: boolean
	Message: string
	Promoted: unknown[]
	RateLimit: unknown[]
	Type: number
}
