import { useEffect } from 'react'

import { useThemeStore } from '@/store/themeStore'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const theme = useThemeStore(state => state.theme)
	const toggleTheme = useThemeStore(state => state.toggleTheme)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null

		if (savedTheme) {
			if (savedTheme !== theme) toggleTheme()
		} else {
			const systemPrefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches

			const preferred = systemPrefersDark ? 'dark' : 'light'

			if (preferred !== theme) {
				toggleTheme()
			}
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.classList.toggle('dark', theme === 'dark')
	}, [theme])

	return <>{children}</>
}
