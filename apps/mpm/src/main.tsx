import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '@/providers/AuthProvider'
import { QueryClientProvider } from '@/providers/QueryClientProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import './assets/styles/global.css'

const AppRouter = lazy(() =>
	import('@/routes/AppRouter').then(module => ({
		default: module.AppRouter
	}))
)

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
					<Suspense fallback={null}>
						<AppRouter />
						{import.meta.env.DEV && (
							<Suspense fallback={null}>
								<ReactQueryDevtools initialIsOpen={false} />
							</Suspense>
						)}
					</Suspense>
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	</QueryClientProvider>
)
