import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useMemo } from 'react'

import { AuthContext } from '@/providers/contexts/AuthContext'

import { queryClient } from '@/utils/queryClient'

import { userService } from '@/features/profile'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const {
		data: user = null,
		isLoading,
		isError,
		refetch
	} = useQuery({
		queryKey: ['profile'],
		queryFn: userService.getProfile,
		retry: false,
		staleTime: 60 * 60_000,
		gcTime: 120 * 60_000
	})

	const isAuthenticated = !!user

	useEffect(() => {
		if (isError) queryClient.setQueryData(['profile'], null)
	}, [isError])

	const value = useMemo(
		() => ({
			user,
			isAuthenticated,
			isLoading,
			refetch
		}),
		[user, isAuthenticated, isLoading, refetch]
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
