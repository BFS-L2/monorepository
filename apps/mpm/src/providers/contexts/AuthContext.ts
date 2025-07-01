import { createContext } from 'react'

import type { UserResponse } from '@/features/profile'

export type AuthContextType = {
	user: UserResponse | null
	isAuthenticated: boolean
	isLoading: boolean
	refetch: () => void
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	isAuthenticated: false,
	isLoading: true,
	refetch: () => {}
})
