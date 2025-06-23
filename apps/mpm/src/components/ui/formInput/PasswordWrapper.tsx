import { Eye, EyeOff } from 'lucide-react'

interface IPasswordWrapper {
	children: React.ReactNode
	handleShowPassword: () => void
	showPassword: boolean
}

export const PasswordWrapper = ({
	children,
	handleShowPassword,
	showPassword
}: IPasswordWrapper) => {
	return (
		<div className='relative'>
			{children}
			<button
				type='button'
				className='absolute right-3 bottom-2 cursor-pointer text-zinc-900 dark:text-white'
				onClick={handleShowPassword}
			>
				{showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
			</button>
		</div>
	)
}
