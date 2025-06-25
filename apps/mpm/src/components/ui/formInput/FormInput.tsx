import { useId, useMemo, useState } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import { Input, type InputProps } from '@/components/ui/input/Input'

import { PasswordWrapper } from './PasswordWrapper'

interface IFormInput extends InputProps {
	register?: UseFormRegisterReturn
	disabled?: boolean
	type: string
	placeholder: string
	label: string
}

export const FormInput = ({
	register,
	disabled,
	type,
	placeholder,
	variant,
	className,
	label,
	...props
}: IFormInput) => {
	const [showPassword, setShowPassword] = useState(false)

	const inputId = useId()

	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const resolvedType = useMemo(() => {
		if (type !== 'password') return type
		return showPassword ? 'text' : 'password'
	}, [type, showPassword])

	const inputElement = (
		<Input
			{...props}
			id={inputId}
			type={resolvedType}
			{...register}
			placeholder={placeholder}
			disabled={disabled}
			variant={variant}
			className={className}
		/>
	)

	return (
		<label
			htmlFor={inputId}
			className='text-sm text-zinc-800 dark:text-zinc-200'
		>
			<span className='ml-1'>{label}</span>

			{type === 'password' ? (
				<PasswordWrapper
					showPassword={showPassword}
					handleShowPassword={handleShowPassword}
				>
					{inputElement}
				</PasswordWrapper>
			) : (
				inputElement
			)}
		</label>
	)
}
