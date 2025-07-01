import { queryClient } from '@/utils/queryClient'

import { loginService } from '@/features/login'

export const logoutWithService = async () => {
	await loginService.logout()
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
