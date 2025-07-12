import type { ClassValue } from 'clsx'

export interface ComparisonCardProps {
	icon: React.ReactElement
	title: string
	values: [string, string]
	valueColors?: [ClassValue, ClassValue]
}

export const ComparisonCard = ({ icon, title, values, valueColors }: ComparisonCardProps) => {
	return (
		<div className='flex flex-col gap-2 rounded-lg border-1 border-zinc-200 bg-white p-4 transition-all sm:flex-row dark:border-none dark:bg-zinc-700/50'>
			<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400'>
				{icon}
			</div>
			<div className='flex-1'>
				<div className='text-sm font-medium text-zinc-500 dark:text-zinc-400'>{title}</div>
				<div className='mt-1 grid grid-cols-2 gap-2'>
					<div
						className={`font-semibold ${valueColors?.[0] || 'text-zinc-800 dark:text-zinc-100'}`}
					>
						{values[0]}
					</div>
					<div
						className={`font-semibold ${valueColors?.[1] || 'text-zinc-800 dark:text-zinc-100'}`}
					>
						{values[1]}
					</div>
				</div>
			</div>
		</div>
	)
}
