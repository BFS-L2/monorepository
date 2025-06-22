import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout = () => {
	return (
		<div className='flex min-h-screen flex-col bg-zinc-100 dark:bg-zinc-900'>
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
