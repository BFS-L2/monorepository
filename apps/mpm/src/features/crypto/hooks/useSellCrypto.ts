import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { cryptoService } from '../services/crypto.service'

import { useBalanceOptions } from './useBalancesToOptions'
import { useCoinConverter } from './useCoinConverter'
import type { WalletResponse } from '@/features/wallet'
import type { CurrencyData } from '@/shared/types/currencies.types'

interface IUseSellCrypto {
	wallet: WalletResponse | undefined
	currenciesData: CurrencyData[] | undefined
}

export const useSellCrypto = ({ wallet, currenciesData }: IUseSellCrypto) => {
	const walletBalanceOptions = useBalanceOptions(wallet?.cryptoBalances || {})

	const [selectedCoin, setSelectedCoin] = useState<{
		label: string
		value: string
	} | null>(null)

	const {
		coinAmount,
		setCoinAmount,
		usdAmount,
		setUsdAmount,
		coinPrice,
		currentCoin,
		handleCoinAmountChange,
		handleUsdAmountChange
	} = useCoinConverter({ currenciesData, selectedCoin, type: 'sell' })

	const [error, setError] = useState('')

	useEffect(() => {
		if (selectedCoin) {
			setCoinAmount(selectedCoin?.value)
			if (coinPrice !== null) {
				setUsdAmount((coinPrice * parseFloat(selectedCoin?.value)).toFixed(2))
			} else {
				setUsdAmount('')
			}
			setError('')
		}
	}, [selectedCoin, setCoinAmount, setUsdAmount, coinPrice])

	const onSuccess = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['wallet'] })
		queryClient.invalidateQueries({ queryKey: ['transactions'] })

		toast.success('Sale successful!')

		setError('')
		setCoinAmount('')
		setUsdAmount('')
	}, [setCoinAmount, setUsdAmount])

	const onError = useCallback((error: string) => {
		if (axios.isAxiosError(error)) {
			const message =
				error.response?.data.details ||
				error.response?.data?.message ||
				error.response?.data?.error ||
				'Server error'
			setError(message)
		} else {
			setError('Unexpected error')
		}
	}, [])

	const { mutate: sellCrypto } = useMutation({
		mutationFn: cryptoService.sellCrypto,
		onSuccess,
		onError
	})

	const handleSubmitSell = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()

			if (coinPrice === null || currentCoin === null) {
				setError('No data available')
				return
			}

			if (coinAmount === '' || usdAmount === '') {
				setError('Values ​​not set')
				return
			}

			const userCoins = walletBalanceOptions?.find(option => {
				return option.label === selectedCoin?.label
			})?.value

			const amountToSell = parseFloat(coinAmount)
			const currentCoins = parseFloat(userCoins || '')

			if (!isNaN(amountToSell) && !isNaN(currentCoins) && currentCoins < amountToSell) {
				setError('Insufficient funds')
				return
			}

			sellCrypto({
				symbol: currentCoin,
				amount: coinAmount,
				price: coinPrice
			})
		},
		[coinPrice, currentCoin, coinAmount, usdAmount, sellCrypto, walletBalanceOptions, selectedCoin]
	)

	return {
		walletBalanceOptions,
		selectedCoin,
		setSelectedCoin,
		coinAmount,
		usdAmount,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleSubmitSell,
		coinPrice,
		error
	}
}
