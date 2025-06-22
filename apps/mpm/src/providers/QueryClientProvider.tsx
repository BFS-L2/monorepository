import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { queryClient } from '@/utils/queryClient'

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
		</ReactQueryClientProvider>
	)
}
