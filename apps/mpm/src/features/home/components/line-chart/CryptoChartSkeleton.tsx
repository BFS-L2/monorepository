export const CryptoChartSkeleton = () => {
	return (
		<div className='flex flex-col'>
			<div className='mt-4 rounded-lg bg-zinc-50 px-4 py-6 dark:bg-zinc-800'>
				<div className='mb-4 h-5 w-40 animate-pulse rounded bg-zinc-300 dark:bg-zinc-700' />
				<div className='h-[200px] w-full animate-pulse rounded bg-zinc-200 md:h-[300px] dark:bg-zinc-700' />
			</div>
			<div className='mt-4 flex gap-2'>
				<div className='w-40 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-700' />
				<div className='w-40 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-700' />
				<div className='w-40 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-700' />
			</div>
		</div>
	)
}
