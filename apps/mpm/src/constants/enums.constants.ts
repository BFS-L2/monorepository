export const ROUTES = {
	HOME: '/',
	DASHBOARD: '/dashboard',
	PROFILE: '/profile',
	REGISTER: '/register',
	LOGIN: '/login'
} as const

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES]

export const MAIN_SECTIONS = {
	coins: 'Coins',
	news: 'Latest news',
	// future: 'Future of Crypto',
	available_coins: 'Available coins'
} as const

export type MAIN_SECTIONS = (typeof MAIN_SECTIONS)[keyof typeof MAIN_SECTIONS]
