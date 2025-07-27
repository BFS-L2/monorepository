import { Link, useLocation } from 'react-router-dom'

import type { MenuItemProps } from '@/constants/navigation.constants'

import { cn } from '@/utils/cn'

interface IMenuItem {
	menuItem: MenuItemProps
}

export const MenuItem = ({ menuItem }: IMenuItem) => {
	const location = useLocation()

	return (
		<Link
			key={menuItem.path}
			to={menuItem.path}
			className={cn(
				'rounded px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-teal-200 dark:text-white dark:hover:bg-zinc-700',
				location.pathname === menuItem.path && 'bg-teal-200 dark:bg-zinc-700',
				menuItem.isPrimary &&
					'bg-gradient-to-r from-teal-400 to-teal-600 text-white hover:from-teal-300 hover:to-teal-500'
			)}
		>
			{menuItem.label}
		</Link>
	)
}
