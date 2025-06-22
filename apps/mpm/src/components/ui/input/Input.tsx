import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: 'auth' | 'profile'
}

export const Input = ({
	variant = 'auth',
	className,
	...props
}: InputProps) => {
	return (
		<input
			{...props}
			className={twMerge(
				variant === 'auth' &&
					'w-full rounded border border-zinc-300 bg-white px-2 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-all duration-300 focus:ring-1 focus:ring-teal-400 focus:outline-none dark:border-none dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500',
				variant === 'profile' &&
					'w-full rounded border border-zinc-300 bg-white px-2 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-all duration-300 focus:ring-1 focus:ring-teal-400 focus:outline-none dark:border-none dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500',
				className
			)}
		/>
	)
}
