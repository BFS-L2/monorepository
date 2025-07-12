import SelectBase from 'react-select'

import { useThemeStore } from '@/store/themeStore'

import { themeColors } from '@/utils/themeColors'

export type Option = { label: string; value: string }

export interface ISelectProps {
	className?: string
	options: Option[] | undefined
	placeholder?: string
	value?: Option | null
	onChange?: (value: Option | null) => void
}

export const Select = ({
	className,
	options,
	placeholder = 'Selected...',
	value,
	onChange,
	...props
}: ISelectProps) => {
	const theme = useThemeStore(state => state.theme)

	return (
		<SelectBase
			{...props}
			className={className}
			placeholder={placeholder}
			options={options}
			value={value}
			onChange={onChange}
			styles={{
				control: (base, state) => ({
					...base,
					backgroundColor: theme === 'dark' ? themeColors.zinc900 : '#fff',
					color: theme === 'dark' ? '#fff' : themeColors.zinc900,
					borderColor: state.isFocused ? themeColors.teal400 : 'transparent',
					boxShadow: 'none',
					transition: 'all 0.3s ease-in-out',
					borderRadius: 4,
					border: theme !== 'dark' ? `1px solid ${themeColors.zinc300} ` : '',
					fontSize: 14,
					'&:hover': {
						borderColor: themeColors.teal400
					},
					cursor: 'pointer'
				}),
				singleValue: base => ({
					...base,
					color: theme === 'dark' ? '#fff' : ''
				}),
				menu: base => ({
					...base,
					backgroundColor: theme === 'dark' ? themeColors.zinc900 : '#fff',
					color: theme === 'dark' ? '#fff' : themeColors.zinc900
				}),
				option: (base, state) => ({
					...base,
					backgroundColor: state.isFocused
						? themeColors.teal400
						: (theme === 'dark' && themeColors.zinc900) || '#fff',
					color: state.isFocused
						? (theme === 'dark' && themeColors.zinc900) || '#fff'
						: (theme === 'dark' && '#fff') || themeColors.zinc900,
					cursor: 'pointer'
				})
			}}
		/>
	)
}
