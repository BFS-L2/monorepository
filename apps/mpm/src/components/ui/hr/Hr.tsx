import { cn } from '@/utils/cn'

export interface IHrProps {
	className?: string
}

export const Hr = ({ className }: IHrProps) => {
	return <hr className={cn('mb-1 text-zinc-900 opacity-15 dark:text-white', className)} />
}
