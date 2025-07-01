import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import { useThemeStore } from '@/store/themeStore'

import { themeColors } from '@/utils/themeColors'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout = () => {
	const theme = useThemeStore(state => state.theme)

	return (
		<div className='flex min-h-screen flex-col bg-zinc-100 dark:bg-zinc-900'>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 5000,
					style: {
						background: theme === 'dark' ? themeColors.zinc800 : '#fff',
						color: theme === 'dark' ? '#fff' : themeColors.zinc900,
						boxShadow: 'none',
						border:
							theme === 'dark'
								? `1px solid ${themeColors.zinc600}`
								: `1px solid ${themeColors.zinc300}`
					},
					success: {
						iconTheme: {
							primary: themeColors.teal400,
							secondary: '#fff'
						}
					}
				}}
				reverseOrder={false}
			/>
			<Header />
			<main className='mt-11 flex-1 scroll-smooth md:mt-12'>
				<Outlet key={location.pathname} />
			</main>
			<Footer />
		</div>
	)
}
