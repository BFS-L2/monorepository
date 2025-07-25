export const CoinCardSkeleton = () => {
	return (
		<div className='flex animate-pulse items-center gap-2 rounded-lg bg-zinc-800 p-3'>
			<div className='h-12 w-12 rounded-full bg-zinc-700' />
			<div className='flex flex-col gap-2'>
				<div className='h-4 w-32 rounded bg-zinc-700' />
				<div className='flex flex-col gap-1 md:flex-row md:gap-3'>
					<div className='h-4 w-20 rounded bg-zinc-700' />
					<div className='h-4 w-16 rounded bg-zinc-700' />
				</div>
			</div>
		</div>
	)
}
