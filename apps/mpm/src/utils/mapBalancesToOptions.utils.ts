import { useMemo } from 'react'

interface IBalanceOption {
	label: string
	value: string
}
export const useBalanceOptions = (
	balances: Record<string, number>
): IBalanceOption[] => {
	return useMemo(() => {
		return Object.entries(balances ?? {})
			?.map(([currency, amount]) => ({
				label: currency,
				value: amount.toString()
			}))
			?.filter(option => option.value !== '0')
	}, [balances])
}
