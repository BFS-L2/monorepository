import { MAIN_SECTIONS } from '@/constants/enums.constants'

import { useIntersectionStore } from '@/store/sectionsStore'

import { cn } from '@/utils/tailwind.utils'

interface Props {
	className?: string
}

export const TopBar = ({ className }: Props) => {
	const activeKey = useIntersectionStore(state => state.activeKey)
	const setActiveKey = useIntersectionStore(state => state.setActiveKey)
	const sections = Object.entries(MAIN_SECTIONS)

	return (
		<div className={cn('sticky top-[52px] z-10 p-2', className)}>
			<div className='container mx-auto max-w-fit overflow-hidden rounded-full border border-zinc-300 bg-white/50 px-4 py-2 backdrop-blur-sm dark:border-zinc-600 dark:bg-zinc-900/30'>
				<div className='scrollbar-none scrollbar-hide flex gap-2 overflow-x-auto whitespace-nowrap'>
					{sections?.map(([key, value]) => (
						<a
							href={`/#${key}`}
							key={key}
							onClick={() => setActiveKey(key)}
							className={cn(
								'shrink-0 cursor-pointer rounded-full px-4 py-1 text-zinc-800 transition-colors duration-300 hover:bg-zinc-700 hover:text-white dark:text-white',
								{
									'bg-zinc-700 text-white': key === activeKey
								}
							)}
						>
							{value}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
