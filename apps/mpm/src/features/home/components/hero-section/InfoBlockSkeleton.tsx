export const InfoBlockSkeleton = () => {
	return (
		<div className='mb-5 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3'>
			{Array(3)
				.fill(0)
				.map((_, index) => (
					<div
						key={index}
						className='animate-pulse justify-items-center rounded bg-zinc-600/35 px-3 py-2 backdrop-blur-xs'
					>
						<div className='mb-2 h-3 w-20 rounded bg-zinc-500/40'></div>
						<div className='h-5 w-32 rounded bg-zinc-400/30'></div>
					</div>
				))}
		</div>
	)
}
