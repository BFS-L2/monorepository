export const ROUTES = {
	HOME: '/',
	DASHBOARD: '/dashboard',
	PROFILE: '/profile',
	REGISTER: '/register',
	LOGIN: '/login'
} as const

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES]
