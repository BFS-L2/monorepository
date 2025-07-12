import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button/Button'

import { useLogout } from '@/hooks/auth/useLogout'

export const Logout = () => {
	const { handleLogout } = useLogout()
	return (
		<div className='flex flex-col justify-between gap-1 rounded-lg bg-white p-4 dark:bg-zinc-800'>
			<Button
				onClick={handleLogout}
				variant='logout'
				className='mt-auto flex items-center gap-2 md:w-52'
			>
				<LogOut size={18} /> Logout
			</Button>
		</div>
	)
}
