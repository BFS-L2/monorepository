import { useEffect, useState } from 'react'

interface Props {
	isDesktop: boolean
}

export const useCheckDesktop = (): Props => {
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const checkIsDesktop = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		checkIsDesktop()

		const handleResize = () => {
			checkIsDesktop()
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { isDesktop }
}
