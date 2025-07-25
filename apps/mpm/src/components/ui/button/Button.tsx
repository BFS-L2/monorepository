import { cn } from '@/utils/tailwind.utils'

import { Loader } from '../loader/Loader'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'logout' | 'ghost' | 'limit'
	children: React.ReactNode
	className?: string
	isSubmitting?: boolean
}

export const Button = ({
	children,
	variant = 'primary',
	className,
	isSubmitting,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			disabled={isSubmitting}
			className={cn(
				variant === 'primary' &&
					'w-full cursor-pointer rounded bg-gradient-to-r from-teal-400 to-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:from-teal-300 hover:to-teal-500 disabled:cursor-not-allowed disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-500 dark:disabled:to-zinc-600',
				variant === 'logout' &&
					'w-full cursor-pointer rounded bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-pink-700 dark:hover:bg-pink-800',
				variant === 'ghost' &&
					'cursor-pointer rounded-sm border-1 border-zinc-400 px-2 py-1 text-sm font-medium text-white transition-colors duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-700',
				variant === 'limit' &&
					'cursor-pointer rounded-md border border-transparent bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:bg-zinc-700 hover:text-white dark:hover:bg-zinc-600',
				className
			)}
		>
			{isSubmitting ? <Loader size={18} className='text-white' /> : children}
		</button>
	)
}
