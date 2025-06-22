import { useContext } from 'react'

import { AuthContext } from '@/providers/contexts/AuthContext'

export const useAuth = () => useContext(AuthContext)
