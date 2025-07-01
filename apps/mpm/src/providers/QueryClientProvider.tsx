import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/utils/queryClient'

export const QueryClientProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
		</ReactQueryClientProvider>
	)
}
