import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { useBalanceOptions } from '@/utils/mapBalancesToOptions.utils'
import { parsePrice } from '@/utils/parsePrice.utils'
import { queryClient } from '@/utils/queryClient'

import { walletService } from '@/services/wallet.service'
import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface IUseSellCrypto {
	wallet: IUserWalletDto | undefined
	currenciesData: ICurrency[] | undefined
}

export const useSellCrypto = ({ wallet, currenciesData }: IUseSellCrypto) => {
	const walletBalanceOptions = useBalanceOptions(wallet?.cryptoBalances || {})

	const [selectedCoin, setSelectedCoin] = useState<{
		label: string
		value: string
	} | null>(null)

	const [coinAmount, setCoinAmount] = useState<string>('')
	const [usdAmount, setUsdAmount] = useState<string>('')

	const [error, setError] = useState('')

	const isValidNumber = (val: string) => /^(\d+(\.\d{0,8})?)?$/.test(val)

	const rawPrice = currenciesData?.find(
		c => c.CoinInfo.Name === selectedCoin?.label
	)?.DISPLAY.USD.PRICE

	const parsedPrice = parsePrice(rawPrice)

	const coinPrice =
		selectedCoin && parsedPrice && !isNaN(parsedPrice) ? parsedPrice : null

	const currentCoin = selectedCoin ? selectedCoin.label : null

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
	}, [selectedCoin])

	const handleCoinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
	}

	const handleUsdAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
	}

	const { mutate: sellCrypto } = useMutation({
		mutationFn: walletService.sellCrypto,
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

	const handleSubmitSell = (e: React.FormEvent<HTMLFormElement>) => {
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

		if (userCoins !== undefined && userCoins < coinAmount) {
			setError('Insufficient funds')
			return
		}

		sellCrypto({
			symbol: currentCoin,
			amount: coinAmount,
			price: coinPrice
		})
	}

	return {
		handleSubmitSell,
		coinAmount,
		handleCoinAmountChange,
		usdAmount,
		handleUsdAmountChange,
		coinPrice,
		walletBalanceOptions,
		selectedCoin,
		setSelectedCoin,
		error
	}
}
