import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { parsePrice } from '@/utils/parsePrice.utils'
import { queryClient } from '@/utils/queryClient'

import { walletService } from '@/services/wallet.service'
import type { ICurrency } from '@/shared/types/currencies.types'
import type { IUserWalletDto } from '@/shared/types/user.types'

interface useBuyCrypto {
	currenciesData: ICurrency[] | undefined
	wallet: IUserWalletDto | undefined
}

export const useBuyCrypto = ({ wallet, currenciesData }: useBuyCrypto) => {
	const [selectedCoin, setSelectedCoin] = useState<ICurrency | null>(null)

	const [coinAmount, setCoinAmount] = useState('')
	const [usdAmount, setUsdAmount] = useState('')

	const [error, setError] = useState('')

	const isValidNumber = (val: string) => /^(\d+(\.\d{0,8})?)?$/.test(val)

	const coinPrice = () => {
		return selectedCoin ? parsePrice(selectedCoin.DISPLAY?.USD?.PRICE) : 0
	}

	const handleCoinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (isValidNumber(value)) {
			setCoinAmount(value)
		}
		if (coinPrice && value) {
			setUsdAmount((parseFloat(value) * coinPrice()).toFixed(2))
		} else {
			setUsdAmount('')
		}
	}

	const handleUsdAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (isValidNumber(value)) {
			setUsdAmount(value)
		}
		if (coinPrice && value) {
			setCoinAmount((parseFloat(value) / coinPrice()).toFixed(8))
		} else {
			setCoinAmount('')
		}
	}

	const handleCoinSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const coin = currenciesData?.find(c => c.CoinInfo.Id === e.target.value)
		setSelectedCoin(coin || null)

		setError('')
		setCoinAmount('')
		setUsdAmount('')
	}

	const { mutate: buyCrypto } = useMutation({
		mutationFn: walletService.buyCrypto,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallet'] })
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const coin = currenciesData?.find(
			c => c.CoinInfo.Id === selectedCoin?.CoinInfo.Id
		)

		if (
			wallet &&
			wallet?.usdBalance &&
			wallet?.usdBalance < Number(usdAmount)
		) {
			setError('Insufficient funds')
			return
		}

		buyCrypto({
			symbol: coin?.CoinInfo.Name || '',
			amount: coinAmount,
			price: parsePrice(coin?.DISPLAY?.USD?.PRICE).toFixed(8)
		})
		setError('')
		setCoinAmount('')
		setUsdAmount('')
	}

	return {
		selectedCoin,
		coinAmount,
		usdAmount,
		coinPrice,
		error,
		handleCoinAmountChange,
		handleUsdAmountChange,
		handleCoinSelect,
		currenciesData,
		handleSubmit
	}
}
