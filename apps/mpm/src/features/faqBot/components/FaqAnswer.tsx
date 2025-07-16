import type { FaqItem } from '../types'

export const FaqAnswer = ({ answer }: { answer: FaqItem }) => (
	<div className='flex flex-col gap-3'>
		<p className='font-semibold text-zinc-900 dark:text-white'>{answer.question}</p>
		<p className='text-zinc-600 dark:text-zinc-300'>{answer.answer}</p>
	</div>
)
