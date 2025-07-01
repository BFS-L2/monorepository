export const WalletItemSkeletonList = () => {
	return (
		<>
			{Array.from({ length: 8 }).map((_, i) => (
				<div
					key={i}
					className='flex animate-pulse items-center justify-between rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'
				>
					<div className='flex items-center gap-2'>
						<div className='h-10 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700' />

						<div className='flex flex-col gap-1'>
							<div className='h-5 w-16 rounded bg-zinc-300 dark:bg-zinc-700' />
							<div className='h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-600' />
						</div>
					</div>

					<div className='text-right'>
						<div className='mb-1 h-5 w-20 rounded bg-zinc-300 dark:bg-zinc-700' />
						<div className='h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-600' />
					</div>
				</div>
			))}
		</>
	)
}
