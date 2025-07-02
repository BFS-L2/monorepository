export const WalletItemSkeletonList = () => {
	return (
		<div className='mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{Array.from({ length: 8 }).map((_, i) => (
				<div
					key={i}
					className='flex animate-pulse items-center justify-between rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'
				>
					<div className='flex items-center gap-2'>
						<div className='h-10 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700' />
						<div>
							<div className='mb-1 h-4 w-16 rounded bg-zinc-300 dark:bg-zinc-700' />
							<div className='h-3 w-24 rounded bg-zinc-200 dark:bg-zinc-600' />
						</div>
					</div>

					<div className='text-right'>
						<div className='mb-1 h-4 w-24 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-600' />
					</div>
				</div>
			))}
		</div>
	)
}
