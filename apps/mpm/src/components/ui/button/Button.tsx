import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'logout'
	children: React.ReactNode
	className?: string
}

export const Button = ({
	children,
	variant = 'primary',
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={twMerge(
				variant === 'primary' &&
					'w-full cursor-pointer rounded bg-gradient-to-r from-teal-400 to-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:from-teal-300 hover:to-teal-500 disabled:cursor-not-allowed disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-500 dark:disabled:to-zinc-600',
				variant === 'logout' &&
					'w-full cursor-pointer rounded bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-pink-700 dark:hover:bg-pink-800',
				className
			)}
		>
			{children}
		</button>
	)
}
