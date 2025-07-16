import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Title } from '@/components/ui/title/Title'

import type { FaqItem, FaqTopic, QuestionId } from '../types'

import { faqTopics } from '@/shared/data/faq.data'

interface IFaqModal {
	handleShowMenu: () => void
}

export const FaqModal = ({ handleShowMenu }: IFaqModal) => {
	const [question, setQuestion] = useState<QuestionId>('')

	const handleClick = (id: string | undefined): void => {
		if (id) {
			setQuestion(id)
		}
	}

	const currentTopic: FaqTopic | undefined = faqTopics.find(item => item.id === question)

	const currentAnswerTopic: FaqTopic | undefined = faqTopics.find(item =>
		item.qa.some(q => q.id === question)
	)

	const currentAnswer: FaqItem | undefined = currentAnswerTopic?.qa.find(
		item => item.id === question
	)

	const changeActiveQuestion = (itemId: string): void => {
		handleClick(itemId)
	}

	const handleBack = (): void => {
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
				<Button onClick={() => changeActiveQuestion(item.id)} key={item.id} className='text-start'>
					{item.question}
				</Button>
			)
		})
	} else if (currentAnswer && question.includes('_')) {
		changeQuestions = (
			<div className='flex flex-col gap-3'>
				<p className='font-semibold text-zinc-900 dark:text-white'>{currentAnswer.question}</p>
				<p className='text-zinc-600 dark:text-zinc-300'>{currentAnswer.answer}</p>
			</div>
		)
	} else {
		changeQuestions = faqTopics.map(item => {
			return (
				<Button onClick={() => changeActiveQuestion(item.id)} key={item.id} className='text-start'>
					{item.title}
				</Button>
			)
		})
	}

	return (
		<div className='pointer-events-auto w-full max-w-md rounded-lg bg-white p-6 dark:border-1 dark:border-zinc-700 dark:bg-zinc-800'>
			<div className='mb-6 flex justify-between'>
				<Title type='h2'>FAQ</Title>

				{question === '' && (
					<Button
						variant='ghost'
						onClick={handleShowMenu}
						className='w-25 text-zinc-900 dark:text-white'
					>
						Close
					</Button>
				)}

				{question !== '' && (
					<Button
						variant='ghost'
						onClick={handleBack}
						className='flex w-25 items-center justify-center gap-2 text-zinc-900 dark:text-white'
					>
						<ArrowLeft size={14} /> Back
					</Button>
				)}
			</div>
			<div className='flex flex-col items-start gap-2'>{changeQuestions}</div>
		</div>
	)
}
