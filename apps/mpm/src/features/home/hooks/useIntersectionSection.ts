import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useShallow } from 'zustand/react/shallow'

import { useIntersectionStore } from '@/store/sectionsStore'

export const useIntersectionSection = (sectionKey: string) => {
	const [ref, inView] = useInView({
		threshold: 0.2,
		rootMargin: '-52px 0px -50% 0px',
		triggerOnce: false
	})

	const setActiveKey = useIntersectionStore(useShallow(state => state.setActiveKey))

	useEffect(() => {
		if (inView) {
			setActiveKey(sectionKey)
		}
	}, [inView, sectionKey])

	return { intersectionRef: ref }
}
