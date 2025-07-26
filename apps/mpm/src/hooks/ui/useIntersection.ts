import { useEffect, useState } from 'react'

export function useIntersection<T extends HTMLElement | null>(
	ref: React.RefObject<T>,
	options?: IntersectionObserverInit
): IntersectionObserverEntry | null {
	const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

	useEffect(() => {
		const node = ref.current
		if (!node || typeof IntersectionObserver !== 'function') return

		const observer = new IntersectionObserver(([entry]) => {
			setEntry(entry)
		}, options)

		observer.observe(node)

		return () => observer.disconnect()
	}, [ref, options?.root, options?.rootMargin, options?.threshold])

	return entry
}
