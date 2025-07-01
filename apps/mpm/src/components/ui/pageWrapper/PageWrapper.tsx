import { motion } from 'framer-motion'

const pageVariants = {
	initial: { opacity: 0, y: 15 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -15 }
}

const pageTransition = {
	duration: 0.4,
	ease: [0.42, 0, 0.58, 1] as const
}

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
	<motion.div
		variants={pageVariants}
		initial='initial'
		animate='animate'
		exit='exit'
		transition={pageTransition}
		className='px-2'
	>
		{children}
	</motion.div>
)
