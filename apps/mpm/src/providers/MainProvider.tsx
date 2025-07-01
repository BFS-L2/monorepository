import { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './AuthProvider'
import { QueryClientProvider } from './QueryClientProvider'
import { ThemeProvider } from './ThemeProvider'

const ReactQueryDevtools = lazy(() =>
	import('@tanstack/react-query-devtools').then(m => ({
		default: m.ReactQueryDevtools
	}))
)

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider>
			<AuthProvider>
				<ThemeProvider>
					<BrowserRouter>
						{children}
						<Suspense>
							{import.meta.env.VITE_DEV && (
								<ReactQueryDevtools initialIsOpen={false} />
							)}
						</Suspense>
					</BrowserRouter>
				</ThemeProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}
