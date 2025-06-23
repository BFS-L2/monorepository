import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '@/providers/AuthProvider'
import { QueryClientProvider } from '@/providers/QueryClientProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import './assets/styles/global.css'
import { AppRouter } from './routes/AppRouter'

const ReactQueryDevtools = lazy(() =>
	import('@tanstack/react-query-devtools').then(m => ({
		default: m.ReactQueryDevtools
	}))
)

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider>
		<AuthProvider>
			<ThemeProvider>
				<BrowserRouter>
					<Suspense>
						<AppRouter />
					</Suspense>
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
