import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout = () => {
	return (
		<div className='flex min-h-screen flex-col bg-zinc-100 dark:bg-zinc-900'>
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 5000,
					style: {
						background: '#27272a', // zinc-800 (#18181b — zinc-900)
						color: '#fff',
						border: '1px solid #454545'
					},
					success: {
						iconTheme: {
							primary: '#2dd4bf', // teal-400
							secondary: '#ffffff'
						}
					}
				}}
				reverseOrder={false}
			/>
			<Header />
			<main className='mt-11 flex-1 scroll-smooth md:mt-12'>
				<AnimatePresence mode='wait'>
					<Outlet key={location.pathname} />
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	)
}
