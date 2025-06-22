import { useEffect } from 'react'

import { useThemeStore } from '@/store/themeStore'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const { theme, toggleTheme } = useThemeStore()

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
		const systemPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		if (savedTheme) {
			if (savedTheme !== theme) toggleTheme()
		} else if (systemPrefersDark && theme !== 'dark') {
			toggleTheme()
		}
	}, [])

	useEffect(() => {
		// localStorage.setItem('theme', theme)
		const prev = localStorage.getItem('theme')
		if (prev !== theme) {
			localStorage.setItem('theme', theme)
		}
		document.documentElement.classList.toggle('dark', theme === 'dark')
	}, [theme])

	return <>{children}</>
}
