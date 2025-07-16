import { AnimatePresence } from 'framer-motion'
import { BotIcon } from 'lucide-react'

import { ModalWindow } from '@/components/ui/model/ModalWindow'

import { useToggleModal } from '@/hooks/ui/useToggleModal'

import { FaqModal } from './FaqModal'

export const FaqBot = () => {
	const { handleShowMenu, isShowMenu } = useToggleModal()

	return (
		<>
			<AnimatePresence>
				{isShowMenu && (
					<ModalWindow handleShowMenu={handleShowMenu}>
						<FaqModal handleShowMenu={handleShowMenu} />
					</ModalWindow>
				)}
			</AnimatePresence>
			{!isShowMenu && (
				<BotIcon
					onClick={handleShowMenu}
					size={50}
					className='fixed right-5 bottom-5 z-40 cursor-pointer rounded-full bg-teal-400 p-2 text-white transition-colors duration-300 hover:bg-teal-500'
				/>
			)}
		</>
	)
}
