import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Title } from '@/components/ui/title/Title'

import type { QuestionId } from '../types'

import { FaqAnswer } from './FaqAnswer'
import { FaqQuestionsList } from './FaqQuestionsList'
import { FaqTopicsList } from './FaqTopicsList'
import { faqTopics } from '@/shared/data/faq.data'

export const FaqModal = ({ handleShowMenu }: { handleShowMenu: () => void }) => {
	const [question, setQuestion] = useState<QuestionId>('')

	const currentTopic = faqTopics.find(item => item.id === question)
	const currentAnswerTopic = faqTopics.find(item => item.qa.some(q => q.id === question))
	const currentAnswer = currentAnswerTopic?.qa.find(item => item.id === question)

	const handleBack = () => {
		if (question.includes('_')) {
			setQuestion(currentAnswerTopic?.id ?? '')
		} else {
			setQuestion('')
		}
	}

	const renderContent = () => {
		if (!question) {
			return <FaqTopicsList topics={faqTopics} onSelect={setQuestion} />
		}

		if (!question.includes('_') && currentTopic) {
			return <FaqQuestionsList questions={currentTopic.qa} onSelect={setQuestion} />
		}

		if (currentAnswer) {
			return <FaqAnswer answer={currentAnswer} />
		}

		return null
	}

	return (
		<div className='pointer-events-auto w-full max-w-md rounded-lg bg-white p-6 dark:border-1 dark:border-zinc-700 dark:bg-zinc-800'>
			<div className='mb-6 flex justify-between'>
				<Title type='h2'>FAQ</Title>
				<Button
					variant='ghost'
					onClick={question === '' ? handleShowMenu : handleBack}
					className='flex w-25 items-center justify-center gap-2 text-zinc-900 dark:text-white'
				>
					{question === '' ? (
						'Close'
					) : (
						<>
							<ArrowLeft size={14} /> Back
						</>
					)}
				</Button>
			</div>

			{renderContent()}
		</div>
	)
}
