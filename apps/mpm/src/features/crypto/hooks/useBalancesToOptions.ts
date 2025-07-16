import { useMemo } from 'react'

import type { BalanceOptionProps } from '../types'

export const useBalanceOptions = (balances: Record<string, number>): BalanceOptionProps[] => {
	return useMemo(() => {
		return Object.entries(balances ?? {})
			?.map(([currency, amount]) => ({
				label: currency,
				value: amount.toString()
			}))
			?.filter(option => option.value !== '0')
	}, [balances])
}
