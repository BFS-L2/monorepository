import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { useCoinConverter } from './useCoinConverter'
import { useCurrencyOptions } from '@/pages/Dashboard/hooks/useCurrencyToOptions'
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
	}, [selectedCoin])

	const { mutate: buyCrypto } = useMutation({
		mutationFn: walletService.buyCrypto,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallet'] })
			queryClient.invalidateQueries({ queryKey: ['transactions'] })

			toast.success('Purchase successful!')

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
