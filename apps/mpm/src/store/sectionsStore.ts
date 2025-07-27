import { create } from 'zustand'

interface SectionsStore {
	activeKey: string
	setActiveKey: (activeKey: string) => void
}

export const useIntersectionStore = create<SectionsStore>(set => ({
	activeKey: 'coins',
	setActiveKey: key =>
		set(state => {
			if (state.activeKey === key) return state
			return { activeKey: key }
		})
}))
