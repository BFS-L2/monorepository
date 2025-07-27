import { Loader2 } from 'lucide-react'

import { cn } from '@/utils/cn'

export const Loader: React.FC<{ size?: number; className?: string }> = ({
	size = 24,
	className = ''
}) => {
	return <Loader2 className={cn('animate-spin text-teal-400', className)} size={size} />
}
