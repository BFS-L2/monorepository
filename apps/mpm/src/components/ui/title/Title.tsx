import type { ReactNode } from 'react'

import { cn } from '@/utils/tailwind.utils'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps {
	children: ReactNode
	className?: string
	type?: TitleTag
}

export const Title = ({
	children,
	className = '',
	type = 'h1'
}: TitleProps) => {
	const baseClasses = 'font-bold text-black dark:text-white'

	const sizeClasses: Record<TitleTag, string> = {
		h1: 'text-2xl',
		h2: 'text-2xl',
		h3: 'text-xl',
		h4: 'text-xl',
		h5: 'text-lg',
		h6: 'text-lg'
	}

	const Tag = type

	return (
		<Tag className={cn(baseClasses, sizeClasses[type], className)}>
			{children}
		</Tag>
	)
}
