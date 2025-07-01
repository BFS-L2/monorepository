import { useCallback, useEffect, useState } from 'react'

export const useToggleModal = () => {
	const [isShowMenu, setIsShowMenu] = useState(false)

	const handleShowMenu = useCallback(() => {
		setIsShowMenu(!isShowMenu)
	}, [isShowMenu])

	useEffect(() => {
		document.body.style.overflow = isShowMenu ? 'hidden' : 'auto'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isShowMenu])

	useEffect(() => {
		if (!isShowMenu) return

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsShowMenu(false)
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [])

	return { handleShowMenu, isShowMenu, setIsShowMenu }
}
