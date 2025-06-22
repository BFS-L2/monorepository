import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { parsePrice } from '@/utils/parsePrice.utils'
import { queryClient } from '@/utils/queryClient'

import { walletService } from '@/services/wallet.service'
import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface useSellCrypto {
	wallet: IUserWalletDto | undefined
	currenciesData: ICurrency[] | undefined
}

export const useSellCrypto = ({ wallet, currenciesData }: useSellCrypto) => {
	const [selectedCoin, setSelectedCoin] = useState<string | null>(null)

	const [coinAmount, setCoinAmount] = useState('')
	const [usdAmount, setUsdAmount] = useState('')

	const [error, setError] = useState('')

	const getCoinPrice = (coinSymbol: string | null): number => {
		if (!coinSymbol) return 0

		const currency = currenciesData?.find(
			c => c.CoinInfo.Name === coinSymbol || c.CoinInfo.Id === coinSymbol
		)

		if (!currency?.DISPLAY?.USD?.PRICE) {
			return 0
		}

		return parsePrice(currency.DISPLAY.USD.PRICE)
	}

	const coinPrice = selectedCoin ? getCoinPrice(selectedCoin) : 0

	const isValidNumber = (val: string) => /^(\d+(\.\d{0,8})?)?$/.test(val)

	const handleCoinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		if (isValidNumber(value)) {
			setCoinAmount(value)

			if (selectedCoin && value && coinPrice > 0) {
				const calculatedUSD = parseFloat(value) * coinPrice
				setUsdAmount(calculatedUSD.toFixed(2))
			} else {
				setUsdAmount('')
			}
		}
	}

	const handleUsdAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		if (isValidNumber(value)) {
			setUsdAmount(value)

			if (selectedCoin && value && coinPrice > 0) {
				const calculatedCoin = parseFloat(value) / coinPrice
				setCoinAmount(calculatedCoin.toFixed(8))
			} else {
				setCoinAmount('')
			}
		}
	}

	const handleCoinSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const coin = e.target.value
		setSelectedCoin(coin)

		const balance = wallet?.cryptoBalances?.[coin]

		const validCoin = getCoinPrice(coin)

		if (balance === undefined || validCoin === 0) {
			setError('No data for the selected coin')
			setCoinAmount('')
			setUsdAmount('')
			return
		}

		setError('')
		setCoinAmount(balance.toString())
		setUsdAmount((getCoinPrice(coin) * balance).toFixed(2))
	}

	const { mutate: sellCrypto } = useMutation({
		mutationFn: walletService.sellCrypto,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallet'] })
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		}
	})

	const handleSubmitSell = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const coin = currenciesData?.find(c => c.CoinInfo.Name === selectedCoin)

		if (
			wallet?.cryptoBalances?.[coin?.CoinInfo.Name || ''] &&
			wallet?.cryptoBalances?.[coin?.CoinInfo.Name || ''] <
				parseFloat(coinAmount)
		) {
			setError('Insufficient funds')
			return
		}

		sellCrypto({
			symbol: coin?.CoinInfo.Name || '',
			amount: coinAmount,
			price: parsePrice(coin?.DISPLAY?.USD?.PRICE).toFixed(8)
		})
		setError('')
		setCoinAmount('')
		setUsdAmount('')
	}

	return {
		coinPrice,
		coinAmount,
		usdAmount,
		selectedCoin,
		error,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleCoinSelect,
		handleSubmitSell,
		wallet
	}
}
