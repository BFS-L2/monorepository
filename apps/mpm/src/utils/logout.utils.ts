import { queryClient } from '@/utils/queryClient'

import { authService } from '@/services/auth.service'

export const logoutWithService = async () => {
	await authService.logout()
	queryClient.setQueryData(['profile'], null)
	queryClient.removeQueries({ queryKey: ['profile'] })

	queryClient.setQueryData(['wallet'], null)
	queryClient.removeQueries({ queryKey: ['wallet'] })

	queryClient.setQueryData(['transactions'], null)
	queryClient.removeQueries({ queryKey: ['transactions'] })
}

export const logoutWithoutService = async () => {
	queryClient.setQueryData(['profile'], null)
	// queryClient.removeQueries({ queryKey: ['profile'] })
	queryClient.removeQueries({ queryKey: ['wallet'] })
	queryClient.removeQueries({ queryKey: ['transactions'] })
}
