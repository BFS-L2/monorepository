import { useEffect, useRef, useState } from 'react'

export const usePriceDirection = (price: number) => {
	const [changeDirection, setChangeDirection] = useState<'up' | 'down' | 'none'>('none')

	const previousPriceRef = useRef<number | null>(null)

	useEffect(() => {
		const prev = previousPriceRef.current
		if (prev !== null && price !== null) {
			if (prev > price) {
				setChangeDirection('up')
			} else if (prev < price) {
				setChangeDirection('down')
			} else {
				setChangeDirection('none')
			}
		}
		previousPriceRef.current = price
	}, [price])

	return changeDirection
}
