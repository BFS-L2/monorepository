import { Button } from '@/components/ui/button/Button'

import type { IFaqQuestionsList } from '../types'

export const FaqQuestionsList = ({ questions, onSelect }: IFaqQuestionsList) => (
	<div className='flex flex-col items-start gap-2'>
		{questions.map(item => (
			<Button onClick={() => onSelect(item.id)} key={item.id} className='text-start'>
				{item.question}
			</Button>
		))}
	</div>
)
