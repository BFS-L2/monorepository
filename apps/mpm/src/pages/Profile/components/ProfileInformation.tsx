import { AvatarUpload } from './AvatarUpload'
import type { IUserDto } from '@/shared/types/user.types'

export const ProfileInformation = ({ user }: { user: IUserDto }) => {
	return (
		<div className='flex flex-col gap-4 rounded-xl bg-white p-4 dark:bg-zinc-800'>
			<div className='flex flex-col items-center gap-2 md:items-start'>
				<AvatarUpload profile={user} />
				<h2 className='flex text-xl font-bold text-teal-400 md:hidden'>
					{user?.name}
				</h2>
			</div>

			<div className='grid flex-1 grid-cols-1 gap-2 md:grid-cols-3'>
				<div className='rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'>
					<p className='mb-1 text-xs text-zinc-400'>Full Name</p>
					<p className='text-sm font-medium text-zinc-900 dark:text-white'>
						{user?.name} {user?.lastName}
					</p>
				</div>

				<div className='rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'>
					<p className='mb-1 text-xs text-zinc-500 dark:text-zinc-400'>Email</p>
					<p className='text-sm font-medium text-zinc-900 dark:text-white'>
						{user?.email || 'Not provided'}
					</p>
				</div>

				<div className='rounded-lg bg-zinc-100 p-3 dark:bg-zinc-900'>
					<p className='mb-1 text-xs text-zinc-400'>Phone</p>
					<p className='text-sm font-medium text-zinc-900 dark:text-white'>
						{user?.phone || 'Not provided'}
					</p>
				</div>
			</div>
		</div>
	)
}
