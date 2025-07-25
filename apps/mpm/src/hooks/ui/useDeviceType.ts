import { useEffect, useState } from 'react'

export const useDeviceType = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

		const isPhone = /iphone|ipod|android|windows phone|mobile/i.test(userAgent)
		const isTablet = /ipad|tablet|kindle|silk/i.test(userAgent) && !isPhone

		setIsMobile(isTouchDevice && (isPhone || isTablet))
	}, [])

	return isMobile
}
