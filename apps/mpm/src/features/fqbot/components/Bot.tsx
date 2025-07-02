import { AnimatePresence, motion } from 'framer-motion'
import { BotIcon } from 'lucide-react'

import { useToggleModal } from '@/hooks/ui/useToggleModal'

import { FaqModal } from './FaqModal'

export const Bot = () => {
	const { handleShowMenu, isShowMenu } = useToggleModal()

	return (
		<AnimatePresence>
			{isShowMenu ? (
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
						<FaqModal handleShowMenu={handleShowMenu} />
					</motion.div>
				</>
			) : (
				<BotIcon
					onClick={handleShowMenu}
					size={50}
					className='fixed right-5 bottom-5 z-50 cursor-pointer rounded-full bg-teal-400 p-2 text-white transition-colors duration-300 hover:bg-teal-500'
				/>
			)}
		</AnimatePresence>
	)
}
