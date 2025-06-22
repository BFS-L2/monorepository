import { createContext } from 'react'

import type { IUserDto } from '@/shared/types/user.types'

export type AuthContextType = {
	user: IUserDto | null
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
