import { useQuery } from '@tanstack/react-query'

import { useAuth } from '../auth/useAuth'

import type { WalletResponse } from '@/features/wallet'
import { walletService } from '@/features/wallet/services/wallet.service'

export const useWallet = () => {
	const { isAuthenticated } = useAuth()

	const {
		data: wallet,
		isLoading,
		isError,
		isSuccess
	} = useQuery<WalletResponse>({
		queryKey: ['wallet'],
		queryFn: () => walletService.getWallet(),
		staleTime: 60 * 60 * 1000,
		gcTime: 120 * 60_000,
		enabled: isAuthenticated
	})

	return {
		wallet,
		isLoading,
		isError,
		isSuccess
	}
}
