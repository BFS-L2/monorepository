export const TransactionSkeletonList = () => {
	return (
		<>
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={i}
					className='grid w-full animate-pulse grid-cols-2 items-center gap-3 rounded-lg bg-zinc-100 p-4 text-zinc-900 md:grid-cols-12 dark:bg-zinc-900 dark:text-white'
				>
					<div className='col-span-2 flex items-center gap-3 md:col-span-3'>
						<div className='h-10 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700' />
						<div className='flex flex-col gap-1'>
							<div className='h-4 w-24 rounded bg-zinc-300 dark:bg-zinc-700' />
							<div className='h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-600' />
						</div>
					</div>

					<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
						<div className='h-4 w-4 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-4 w-16 rounded bg-zinc-300 dark:bg-zinc-700' />
					</div>

					<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
						<div className='h-4 w-4 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-4 w-20 rounded bg-zinc-300 dark:bg-zinc-700' />
					</div>

					<div className='col-span-1 flex items-center gap-2 md:col-span-2'>
						<div className='h-4 w-4 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-4 w-14 rounded bg-zinc-300 dark:bg-zinc-700' />
					</div>

					<div className='col-span-1 flex md:col-span-3 md:justify-end'>
						<div className='h-6 w-20 rounded-md bg-zinc-300 dark:bg-zinc-700' />
					</div>
				</div>
			))}
		</>
	)
}
