import { queryClient } from '@/utils/queryClient'

import { loginService } from '@/features/login'

export const logoutWithService = async () => {
	await loginService.logout()

	queryClient.removeQueries({ queryKey: ['wallet'] })
	queryClient.removeQueries({ queryKey: ['transactions'] })

	queryClient.setQueryData(['profile'], null)
	queryClient.invalidateQueries({ queryKey: ['profile'] })
}
