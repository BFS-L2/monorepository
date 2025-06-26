import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

import { useCurrencyOptions } from '@/utils/mapCurrencyToOptions.utils'
import { parsePrice } from '@/utils/parsePrice.utils'
import { queryClient } from '@/utils/queryClient'

import { walletService } from '@/services/wallet.service'
import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface IUseBuyCrypto {
	currenciesData: ICurrency[] | undefined
	wallet: IUserWalletDto | undefined
}

export const useBuyCrypto = ({ wallet, currenciesData }: IUseBuyCrypto) => {
	const currencyOptions = useCurrencyOptions(currenciesData)

	const [selectedCoin, setSelectedCoin] = useState<{
		label: string
		value: string
	} | null>(null)

	const [coinAmount, setCoinAmount] = useState<string>('')
	const [usdAmount, setUsdAmount] = useState<string>('')
	const [error, setError] = useState('')

	useEffect(() => {
		if (selectedCoin) {
			setError('')
			setCoinAmount('')
			setUsdAmount('')
		}
	}, [selectedCoin])

	const isValidNumber = (val: string) => /^(\d+(\.\d{0,8})?)?$/.test(val)

	const coinPrice = selectedCoin ? parsePrice(selectedCoin.value) : null
	const currentCoin = selectedCoin ? selectedCoin.label : null

	const handleCoinAmountChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value

			if (isValidNumber(value)) {
				setCoinAmount(value)
			}
			if (coinPrice && value) {
				const calculatedCoin = (parseFloat(value) * coinPrice).toFixed(2)
				setUsdAmount(calculatedCoin)
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
			if (coinPrice && value) {
				const calculatedUSD = (parseFloat(value) / coinPrice).toFixed(8)
				setCoinAmount(calculatedUSD)
			} else {
				setCoinAmount('')
			}
		},
		[coinPrice]
	)

	const { mutate: buyCrypto } = useMutation({
		mutationFn: walletService.buyCrypto,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallet'] })
			queryClient.invalidateQueries({ queryKey: ['transactions'] })

			setError('')
			setCoinAmount('')
			setUsdAmount('')
		},
		onError: error => {
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
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (coinPrice === null || currentCoin === null) {
			setError('No data available')
			return
		}

		if (coinAmount === '' || usdAmount === '') {
			setError('Values ​​not set')
			return
		}

		if (
			wallet &&
			wallet?.usdBalance &&
			wallet?.usdBalance < Number(usdAmount)
		) {
			setError(
				`Insufficient funds, your balance: ${wallet?.usdBalance.toFixed(2)}$`
			)
			return
		}

		buyCrypto({
			symbol: currentCoin,
			amount: coinAmount,
			price: coinPrice
		})
	}

	return {
		handleSubmit,
		coinAmount,
		handleCoinAmountChange,
		usdAmount,
		handleUsdAmountChange,
		coinPrice,
		error,
		currencyOptions,
		selectedCoin,
		setSelectedCoin
	}
}
