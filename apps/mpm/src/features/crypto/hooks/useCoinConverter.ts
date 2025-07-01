import { useCallback, useMemo, useState } from 'react'

import { parsePrice } from '@/utils/parsePrice.utils'

import type { CurrencyData } from '@/shared/types/currencies.types'

type ConverterType = 'buy' | 'sell'

interface IUseCoinConverter {
	selectedCoin: {
		label: string
		value: string
	} | null
	type: ConverterType
	currenciesData?: CurrencyData[] | undefined
}

export const useCoinConverter = ({ selectedCoin, type, currenciesData }: IUseCoinConverter) => {
	const [coinAmount, setCoinAmount] = useState<string>('')
	const [usdAmount, setUsdAmount] = useState<string>('')

	const isValidNumber = (val: string) => /^(\d+(\.\d{0,8})?)?$/.test(val)

	const parsedPrice = useMemo(() => {
		if (!selectedCoin) return null

		if (type === 'sell') {
			const currency = currenciesData?.find(c => c.CoinInfo.Name === selectedCoin.label)
			return parsePrice(currency?.DISPLAY.USD.PRICE)
		} else {
			return parsePrice(selectedCoin.value)
		}
	}, [selectedCoin, currenciesData, type])

	const coinPrice = selectedCoin && parsedPrice && !isNaN(parsedPrice) ? parsedPrice : null

	const currentCoin = selectedCoin ? selectedCoin.label : null

	const handleCoinAmountChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value

			if (isValidNumber(value)) {
				setCoinAmount(value)
			}
			if (value && coinPrice !== null) {
				const calculatedUSD = (parseFloat(value) * coinPrice).toFixed(2)
				setUsdAmount(calculatedUSD)
			} else {
				setUsdAmount('')
			}
		},
		[coinPrice]
	)

	const handleUsdAmountChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value

			if (isValidNumber(value)) {
				setUsdAmount(value)
			}
			if (value && coinPrice !== null) {
				const calculatedCoin = (parseFloat(value) / coinPrice).toFixed(8)
				setCoinAmount(calculatedCoin)
			} else {
				setCoinAmount('')
			}
		},
		[coinPrice]
	)

	return {
		coinAmount,
		setCoinAmount,
		usdAmount,
		setUsdAmount,
		coinPrice,
		currentCoin,
		handleCoinAmountChange,
		handleUsdAmountChange
	}
}
