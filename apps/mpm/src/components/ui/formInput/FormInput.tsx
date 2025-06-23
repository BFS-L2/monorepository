import { useState } from 'react'

import { Input, type InputProps } from '@/components/ui/input/Input'

import { PasswordWrapper } from './PasswordWrapper'

interface IFormInput extends InputProps {
	register: {}
	disabled: boolean
	type: string
	placeholder: string
}

export const FormInput = ({
	register,
	disabled,
	type,
	placeholder,
	variant,
	className
}: IFormInput) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<>
			{type === 'password' ? (
				<PasswordWrapper
					showPassword={showPassword}
					handleShowPassword={handleShowPassword}
				>
					<Input
						type={showPassword ? 'text' : type}
						{...register}
						placeholder={placeholder}
						disabled={disabled}
						variant={variant}
						className={className}
					/>
				</PasswordWrapper>
			) : (
				<Input
					type={type}
					{...register}
					placeholder={placeholder}
					disabled={disabled}
					variant={variant}
					className={className}
				/>
			)}
		</>
	)
}
