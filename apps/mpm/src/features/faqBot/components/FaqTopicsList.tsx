import { Button } from '@/components/ui/button/Button'

import type { IFaqTopicsList } from '../types'

export const FaqTopicsList = ({ topics, onSelect }: IFaqTopicsList) => (
	<div className='flex flex-col items-start gap-2'>
		{topics.map(item => (
			<Button onClick={() => onSelect(item.id)} key={item.id} className='text-start'>
				{item.title}
			</Button>
		))}
	</div>
)
