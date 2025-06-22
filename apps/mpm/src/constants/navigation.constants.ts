import { ROUTES } from './enums.constants'

export interface MenuItemProps {
	path: ROUTES
	label: string
	isPrimary?: boolean
}

export const publicHeaderItems: MenuItemProps[] = [
	{ path: ROUTES.DASHBOARD, label: 'Dashboard' },
	{ path: ROUTES.PROFILE, label: 'Profile' }
]

export const privateHeaderItems: MenuItemProps[] = [
	{ path: ROUTES.LOGIN, label: 'Sign In' },
	{ path: ROUTES.REGISTER, label: 'Get Started', isPrimary: true }
]

export const publicBurgerMenuItems: MenuItemProps[] = [
	{ path: ROUTES.HOME, label: 'Home' },
	{ path: ROUTES.DASHBOARD, label: 'Dashboard' },
	{ path: ROUTES.PROFILE, label: 'Profile' }
]
