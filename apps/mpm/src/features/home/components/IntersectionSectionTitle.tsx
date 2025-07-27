import { memo } from 'react'

import { Title } from '@/components/ui/title/Title'

import { useIntersectionSection } from '../hooks/useIntersectionSection'

export const IntersectionSectionTitle = memo(
	({ sectionKey, sectionsValue }: { sectionKey: string; sectionsValue: string }) => {
		const { intersectionRef } = useIntersectionSection(sectionKey)

		return (
			<Title
				id={sectionKey}
				ref={intersectionRef}
				style={{ contentVisibility: 'auto', scrollMarginTop: '65px' }}
				className='mb-4'
				type='h2'
			>
				{sectionsValue}
			</Title>
		)
	}
)
