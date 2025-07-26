import { create } from 'zustand'

interface SectionsStore {
	activeKey: string
	setActiveKey: (activeKey: string) => void
}

export const useIntersectionStore = create<SectionsStore>(set => ({
	activeKey: 'coins',
	setActiveKey: key => set({ activeKey: key })
}))
