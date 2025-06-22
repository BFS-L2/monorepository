import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/enums.constants'

import { BurgerMenu } from '../burger-menu/BurgerMenu'

import { Menu } from './menu/Menu'

export const Header = () => {
	return (
		<header className='fixed top-0 right-0 left-0 z-50 bg-teal-100 dark:bg-zinc-800'>
			<div className='container mx-auto flex items-center justify-between px-4 py-2.5'>
				<Link to={ROUTES.HOME} className='flex items-center gap-1'>
					<img src='/logo.svg' alt='logo' width={30} height={30} />
					<span className='bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-xl font-extrabold tracking-wide text-transparent md:text-2xl'>
						MPM
					</span>
				</Link>
				<Menu />
				<BurgerMenu />
			</div>
		</header>
	)
}
