import { useCallback, useState } from 'react'

export const useActiveCoinId = () => {
	const [activeCoinId, setActiveCoinId] = useState<string | null>(null)

	const handleClick = useCallback((coinId: string | undefined) => {
		if (!coinId) return
		setActiveCoinId(prevId => (prevId === coinId ? null : coinId))
	}, [])

	return { activeCoinId, setActiveCoinId, handleClick }
}
