import { MoonIcon, SunIcon } from 'lucide-react'

import { Loader } from '@/components/ui/loader/Loader'

import { privateHeaderItems, publicHeaderItems } from '@/constants/navigation.constants'

import { useThemeStore } from '@/store/themeStore'

import { useAuth } from '@/hooks/auth/useAuth'

import { MenuItem } from './MenuItem'

export const Menu = () => {
	const { isAuthenticated, isLoading } = useAuth()

	const theme = useThemeStore(state => state.theme)
	const toggleTheme = useThemeStore(state => state.toggleTheme)

	return (
		<nav className='hidden flex-1 items-center justify-end gap-2 md:flex'>
			{isLoading && <Loader />}

			{!isLoading && isAuthenticated && (
				<>
					{publicHeaderItems.map(menuItem => (
						<MenuItem key={menuItem.path} menuItem={menuItem} />
					))}
				</>
			)}

			{!isLoading && !isAuthenticated && (
				<>
					{privateHeaderItems.map(menuItem => (
						<MenuItem key={menuItem.path} menuItem={menuItem} />
					))}
				</>
			)}

			<button onClick={toggleTheme} className='hidden cursor-pointer md:flex'>
				{theme === 'dark' ? (
					<MoonIcon className='h-7 w-7 rounded py-1.5 text-zinc-400 transition-colors duration-300 hover:bg-teal-200 dark:hover:bg-zinc-700' />
				) : (
					<SunIcon className='h-7 w-7 rounded py-1.5 text-zinc-900 transition-colors duration-300 hover:bg-teal-200 dark:hover:bg-zinc-700' />
				)}
			</button>
		</nav>
	)
}
