import { AnimatePresence, motion } from 'framer-motion'
import { LogOutIcon, MenuIcon, MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/ui/button/Button'

import {
	privateHeaderItems,
	publicBurgerMenuItems
} from '@/constants/navigation.constants'

import { useThemeStore } from '@/store/themeStore'

import { useAuth } from '@/hooks/auth/useAuth'
import { useLogout } from '@/hooks/auth/useLogout'
import { useToggleModal } from '@/hooks/ui/useToggleModal'

import { BurgerMenuItem } from './BurgerMenuItem'

export const BurgerMenu = () => {
	const { user, isAuthenticated } = useAuth()
	const { theme, toggleTheme } = useThemeStore()

	const { isShowMenu, handleShowMenu } = useToggleModal()

	const { handleLogout } = useLogout(handleShowMenu)

	return (
		<div className='md:hidden'>
			<div className='flex items-center justify-end'>
				<button onClick={handleShowMenu} className='cursor-pointer'>
					<MenuIcon className='h-8 w-8 rounded p-1.5 text-zinc-900 transition-colors duration-300 hover:bg-teal-200 dark:text-white dark:hover:bg-zinc-700' />
				</button>
				<AnimatePresence>
					{isShowMenu && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.5 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className='fixed inset-0 z-40 bg-zinc-900'
								onClick={handleShowMenu}
							/>
							<motion.div
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ type: 'tween', duration: 0.2 }}
								className='absolute top-0 right-0 bottom-0 z-50 flex h-screen w-10/12 max-w-96 flex-row items-start justify-between bg-zinc-200 px-2 py-4 dark:bg-zinc-900'
							>
								<nav className='flex w-full flex-col items-center gap-2'>
									<button
										onClick={toggleTheme}
										className='flex w-full cursor-pointer items-center justify-between rounded bg-white px-4 py-3 dark:bg-zinc-800'
									>
										<span className='text-sm font-medium text-zinc-900 dark:text-white'>
											Switch Theme
										</span>
										{theme === 'dark' ? (
											<MoonIcon className='h-6 w-6 text-zinc-400' />
										) : (
											<SunIcon className='h-6 w-6 text-yellow-500' />
										)}
									</button>

									{isAuthenticated && (
										<>
											<div className='flex w-full items-center justify-between rounded bg-white px-4 py-3 dark:bg-zinc-800'>
												<div className='flex items-center gap-4'>
													<img
														src='/default-avatar.png'
														alt={user?.name}
														className='h-12 w-12 rounded-lg object-cover'
													/>
													<span className='text-lg font-bold text-teal-400'>
														{user?.name}
													</span>
												</div>
											</div>

											<div className='flex w-full flex-col items-start gap-2'>
												{publicBurgerMenuItems.map(menuItem => (
													<BurgerMenuItem
														key={menuItem.path}
														menuItem={menuItem}
														handleShowMenu={handleShowMenu}
													/>
												))}
											</div>

											<Button
												variant='logout'
												onClick={handleLogout}
												className='flex flex-row items-center justify-center gap-2'
											>
												<LogOutIcon className='h-4 w-4' /> Logout
											</Button>
										</>
									)}

									{!isAuthenticated && (
										<div className='flex w-full flex-col items-start gap-2'>
											{privateHeaderItems.map(menuItem => (
												<BurgerMenuItem
													key={menuItem.path}
													menuItem={menuItem}
													handleShowMenu={handleShowMenu}
												/>
											))}
										</div>
									)}
								</nav>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
