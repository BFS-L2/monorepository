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

export interface IFaqTopicsList {
	topics: FaqTopic[]
	onSelect: (id: string) => void
}

export interface IFaqQuestionsList {
	questions: FaqItem[]
	onSelect: (id: string) => void
}
