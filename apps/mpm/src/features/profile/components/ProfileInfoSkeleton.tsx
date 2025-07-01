export const ProfileSkeleton = () => {
	return (
		<div className='flex flex-col gap-4 rounded-xl bg-white p-4 dark:bg-zinc-800'>
			<div className='flex animate-pulse flex-col items-center gap-2 md:items-start'>
				<div className='h-20 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700' />
				<div className='h-6 w-32 rounded-md bg-zinc-300 md:hidden dark:bg-zinc-700' />
			</div>

			<div className='grid flex-1 grid-cols-1 gap-2 md:grid-cols-3'>
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className='animate-pulse rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'>
						<div className='mb-1 h-3 w-20 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-4 w-4/5 rounded bg-zinc-300 dark:bg-zinc-700' />
					</div>
				))}
			</div>
		</div>
	)
}
