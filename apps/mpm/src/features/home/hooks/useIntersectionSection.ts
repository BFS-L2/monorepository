import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useShallow } from 'zustand/react/shallow'

import { useIntersectionStore } from '@/store/sectionsStore'

export const useIntersectionSection = (sectionKey: string) => {
	const [ref, inView] = useInView({
		threshold: 0.5,
		rootMargin: '-52px 0px -50% 0px',
		triggerOnce: false
	})

	const setActiveKey = useIntersectionStore(useShallow(state => state.setActiveKey))

	const lastActiveUpdate = useRef(0)

	useEffect(() => {
		if (!inView) return

		const now = Date.now()
		if (now - lastActiveUpdate.current < 200) return

		lastActiveUpdate.current = now

		setActiveKey(sectionKey)
	}, [inView])

	return { intersectionRef: ref }
}
