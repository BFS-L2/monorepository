import { motion } from 'framer-motion'

export const ModalWindow = ({
	children,
	handleShowMenu
}: {
	children: React.ReactNode
	handleShowMenu: () => void
}) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				className='fixed inset-0 z-40 bg-zinc-900'
				onClick={handleShowMenu}
			/>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.2 }}
				className='pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4'
			>
				{children}
			</motion.div>
		</>
	)
}
