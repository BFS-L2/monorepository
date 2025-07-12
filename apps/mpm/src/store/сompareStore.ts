import { create } from 'zustand'

import type { Option } from '@/components/ui/select/Select'

import type { CurrencyData } from '@/shared/types/currencies.types'

interface CompareStore {
	firstCoin: CurrencyData | null
	secondCoin: Option | null
	setFirstCoin: (coin: CurrencyData) => void
	setSecondCoin: (option: Option | null) => void
	resetCompare: () => void
}

export const useCompareStore = create<CompareStore>(set => ({
	firstCoin: null,
	secondCoin: null,
	setFirstCoin: coin => set({ firstCoin: coin }),
	setSecondCoin: option => set({ secondCoin: option }),
	resetCompare: () => set({ firstCoin: null, secondCoin: null })
}))
