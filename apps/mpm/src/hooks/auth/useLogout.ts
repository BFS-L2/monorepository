import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/enums.constants'

import { logoutWithService } from '@/utils/logout.utils'

export const useLogout = (handleShowMenu?: () => void) => {
	const navigate = useNavigate()

	const handleLogout = useCallback(async () => {
		await logoutWithService()
		if (handleShowMenu) {
			handleShowMenu()
		}

		toast.success('Successful logout')

		navigate(ROUTES.LOGIN)
	}, [navigate, handleShowMenu])

	return { handleLogout }
}
