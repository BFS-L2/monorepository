import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Title } from '@/components/ui/title/Title'

import { faqTopics } from '@/shared/data/faq.data'

interface FaqItem {
	id: string
	question: string
	answer: string
}

interface FaqTopic {
	id: string
	title: string
	qa: FaqItem[]
}

type QuestionId = FaqTopic['id'] | FaqItem['id'] | ''

export const FaqModal = ({ handleShowMenu }: { handleShowMenu: () => void }) => {
	const [question, setQuestion] = useState<QuestionId>('')

	const handleClick = (id: string) => {
		setQuestion(id)
	}

	const currentTopic: FaqTopic | undefined = faqTopics.find(item => item.id === question)

	const currentAnswerTopic: FaqTopic | undefined = faqTopics.find(item =>
		item.qa.some(q => q.id === question)
	)

	const currentAnswer: FaqItem | undefined = currentAnswerTopic?.qa.find(
		item => item.id === question
	)

	const handleBack = () => {
		if (question.includes('_')) {
			setQuestion(currentAnswerTopic?.id ?? '')
		} else {
			setQuestion('')
		}
	}

	let changeQuestions = null

	if (question && !question.includes('_')) {
		changeQuestions = currentTopic?.qa.map(item => {
			return (
				<Button onClick={() => handleClick(item.id)} key={item.id} className='text-start'>
					{item.question}
				</Button>
			)
		})
	} else if (currentAnswer && question.includes('_')) {
		changeQuestions = (
			<div className='flex flex-col gap-3'>
				<p className='font-semibold text-white'>{currentAnswer.question}</p>
				<p className='text-zinc-300'>{currentAnswer.answer}</p>
			</div>
		)
	} else {
		changeQuestions = faqTopics.map(item => {
			return (
				<Button onClick={() => handleClick(item.id)} key={item.id} className='text-start'>
					{item.title}
				</Button>
			)
		})
	}

	return (
		<div className='pointer-events-auto w-full max-w-md rounded border-1 border-zinc-700 bg-zinc-800 p-6 shadow-lg'>
			<div className='mb-6 flex justify-between'>
				<Title type='h2'>FAQ</Title>
				{question === '' ? (
					<Button variant='ghost' onClick={handleShowMenu} className='w-25'>
						Close
					</Button>
				) : (
					<Button variant='ghost' onClick={handleBack} className='w-25'>
						← Back
					</Button>
				)}
			</div>
			<div className='flex flex-col items-start gap-2'>{changeQuestions}</div>
		</div>
	)
}
