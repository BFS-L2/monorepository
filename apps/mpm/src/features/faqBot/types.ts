export interface FaqItem {
	id: string
	question: string
	answer: string
}

export interface FaqTopic {
	id: string
	title: string
	qa: FaqItem[]
}

export type QuestionId = FaqTopic['id'] | FaqItem['id'] | ''
