import { Link } from 'react-router-dom'

import type { MenuItemProps } from '@/constants/navigation.constants'

import { cn } from '@/utils/tailwind.utils'

interface IBurgerMenuItem {
	menuItem: MenuItemProps
	handleShowMenu: () => void
}

export const BurgerMenuItem = ({
	menuItem,
	handleShowMenu
}: IBurgerMenuItem) => {
	return (
		<Link
			key={menuItem.path}
			to={menuItem.path}
			onClick={handleShowMenu}
			className={cn(
				'flex w-full flex-row items-center justify-between rounded bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition-colors duration-300 dark:bg-zinc-800 dark:text-white',
				menuItem.isPrimary &&
					'bg-gradient-to-r from-teal-400 to-teal-600 text-white'
			)}
		>
			{menuItem.label}
		</Link>
	)
}
