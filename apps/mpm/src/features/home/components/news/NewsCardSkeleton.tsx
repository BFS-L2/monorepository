export const NewsCardSkeleton = () => {
	return (
		<article className='flex h-full animate-pulse flex-col overflow-hidden rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900'>
			<div className='aspect-[4/3] w-full rounded-md bg-zinc-300 dark:bg-zinc-700' />
			<div className='mt-4 flex grow flex-col gap-2'>
				<div className='h-4 w-3/4 rounded bg-zinc-300 dark:bg-zinc-700' />
				<div className='h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-600' />
				<div className='h-4 w-full rounded bg-zinc-300 dark:bg-zinc-700' />
				<div className='h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-600' />
				<div className='mt-auto h-4 w-24 rounded bg-zinc-300 dark:bg-zinc-700' />
			</div>
		</article>
	)
}
