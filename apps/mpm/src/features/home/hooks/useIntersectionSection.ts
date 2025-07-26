import { useEffect, useRef } from 'react'

import { useIntersectionStore } from '@/store/sectionsStore'

import { useIntersection } from '@/hooks/ui/useIntersection'

export const useIntersectionSection = (sectionKey: string) => {
	const intersectionRef = useRef<HTMLDivElement>(null)

	const intersection = useIntersection(intersectionRef, {
		threshold: 0.2,
		rootMargin: '-52px 0px -50% 0px'
	})

	const setActiveKey = useIntersectionStore(state => state.setActiveKey)
	const activeKey = useIntersectionStore(state => state.activeKey)

	useEffect(() => {
		if (intersection?.isIntersecting && activeKey !== sectionKey) {
			setActiveKey(sectionKey)
		}
	}, [intersection?.isIntersecting, setActiveKey])

	return { intersectionRef }
}
