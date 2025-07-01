import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { cryptoService } from '../services/crypto.service'

import { useCoinConverter } from './useCoinConverter'
import { useCurrencyOptions } from './useCurrencyToOptions'
import type { WalletResponse } from '@/features/wallet'
import type { CurrencyData } from '@/shared/types/currencies.types'

interface IUseBuyCrypto {
	currenciesData: CurrencyData[] | undefined
	wallet: WalletResponse | undefined
}

export const useBuyCrypto = ({ wallet, currenciesData }: IUseBuyCrypto) => {
	const currencyOptions = useCurrencyOptions(currenciesData)

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
	} = useCoinConverter({ selectedCoin, type: 'buy' })

	const [error, setError] = useState('')

	useEffect(() => {
		if (selectedCoin) {
			setError('')
			setCoinAmount('')
			setUsdAmount('')
		}
	}, [selectedCoin, setCoinAmount, setUsdAmount])

	const onSuccess = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['wallet'] })
		queryClient.invalidateQueries({ queryKey: ['transactions'] })

		toast.success('Purchase successful!')

		setError('')
		setCoinAmount('')
		setUsdAmount('')
	}, [setCoinAmount, setUsdAmount])

	const onError = useCallback((error: unknown) => {
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

	const { mutate: buyCrypto } = useMutation({
		mutationFn: cryptoService.buyCrypto,
		onSuccess,
		onError
	})

	const handleSubmit = useCallback(
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

			if (wallet && wallet?.usdBalance && wallet?.usdBalance < Number(usdAmount)) {
				setError(`Insufficient funds, your balance: ${wallet?.usdBalance.toFixed(2)}$`)
				return
			}

			buyCrypto({
				symbol: currentCoin,
				amount: coinAmount,
				price: coinPrice
			})
		},
		[coinPrice, currentCoin, coinAmount, usdAmount, wallet, buyCrypto]
	)

	return {
		currencyOptions,
		selectedCoin,
		setSelectedCoin,
		coinAmount,
		usdAmount,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleSubmit,
		coinPrice,
		error
	}
}
