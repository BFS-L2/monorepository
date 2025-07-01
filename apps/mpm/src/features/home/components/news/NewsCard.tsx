import type { NewsItem } from '@/shared/types/currencies.types'

export const NewsCard = (item: NewsItem) => {
	return (
		<article className='flex h-full flex-col overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800'>
			<img
				src={item.imageurl}
				alt={item.title || 'News image'}
				className='aspect-[4/3] w-full object-cover'
			/>
			<div className='flex grow flex-col p-4'>
				<h3 className='mb-2 line-clamp-2 text-lg font-semibold text-zinc-900 md:text-xl dark:text-white'>
					{item.title}
				</h3>
				<p className='mb-4 line-clamp-4 text-sm text-zinc-500 dark:text-zinc-400'>{item.body}</p>
				<div className='mt-auto'>
					<a
						href={item.url}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block text-sm font-medium text-teal-400 hover:text-teal-300 hover:underline'
					>
						Read more →
					</a>
				</div>
			</div>
		</article>
	)
}
