import SelectBase from 'react-select'

type Option = { label: string; value: string }

export interface ISelectProps {
	variant?: 'base'
	className?: string
	options: Option[] | undefined
	placeholder?: string
	value?: Option | null
	onChange?: (value: Option | null) => void
}

export const Select = ({
	variant = 'base',
	className,
	options,
	placeholder = 'Selected...',
	value,
	onChange,
	...props
}: ISelectProps) => {
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
					backgroundColor: 'rgb(24 24 27)',
					color: '#fff',
					borderColor: state.isFocused ? '#2dd4bf' : 'transparent',
					boxShadow: 'none',
					transition: 'all 0.3s ease-in-out',
					borderRadius: 4,
					fontSize: 14,
					'&:hover': {
						borderColor: '#2dd4bf'
					},
					cursor: 'pointer'
				}),
				singleValue: base => ({
					...base,
					color: '#fff'
				}),
				menu: base => ({
					...base,
					backgroundColor: 'rgb(24 24 27)',
					color: '#fff'
				}),
				option: (base, state) => ({
					...base,
					backgroundColor: state.isFocused ? '#2dd4bf' : 'transparent',
					color: state.isFocused ? '#000' : '#fff',
					cursor: 'pointer'
				})
			}}
		/>
	)
}
