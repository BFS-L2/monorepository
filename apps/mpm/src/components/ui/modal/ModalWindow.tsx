import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
	isShowMenu: boolean
	handleShowMenu: () => void
	children: ReactNode
}

export const ModalWindow = ({ children, handleShowMenu }: ModalProps) => {
	return createPortal(
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
			onClick={handleShowMenu}
		>
			<div
				className='w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900'
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>,
		document.body
	)
}
