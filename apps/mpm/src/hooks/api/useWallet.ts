import { useQuery } from '@tanstack/react-query'

import { useAuth } from '../auth/useAuth'

import { walletService } from '@/services/wallet.service'

export const useWallet = () => {
	const { isAuthenticated } = useAuth()

	const {
		data: wallet,
		isLoading,
		isError,
		isSuccess
	} = useQuery({
		queryKey: ['wallet'],
		queryFn: () => walletService.getWallet(),
		staleTime: 30 * 60 * 1000,
		enabled: isAuthenticated
	})

	return {
		wallet,
		isLoading,
		isError,
		isSuccess
	}
}
