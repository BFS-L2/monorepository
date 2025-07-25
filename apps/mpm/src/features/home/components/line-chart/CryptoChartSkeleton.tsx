export const CryptoChartSkeleton = () => {
	return (
		<>
			<div className='mt-4 flex flex-col rounded-lg border-1 border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-transparent dark:bg-zinc-800'>
				<div className='mb-4 h-[28px] w-40 animate-pulse rounded bg-zinc-300 dark:bg-zinc-700' />
				<div className='h-[300px] w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700' />
			</div>

			<div className='mt-4 flex gap-2'>
				{[1, 2, 3].map(i => (
					<div
						key={i}
						className='h-[34.5px] w-40 animate-pulse rounded-md border-1 border-transparent bg-zinc-300 dark:bg-zinc-700'
					/>
				))}
			</div>
		</>
	)
}
