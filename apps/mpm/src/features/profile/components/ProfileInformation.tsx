import type { IProfileInformation } from '../types'

import { AvatarUpload } from './AvatarUpload'
import { ProfileSkeleton } from './ProfileInfoSkeleton'

export const ProfileInformation = ({ user, isLoading }: IProfileInformation) => {
	return (
		<>
			{isLoading && <ProfileSkeleton />}
			{!isLoading && (
				<div className='flex flex-col gap-4 rounded-lg bg-white p-4 dark:bg-zinc-800'>
					<div className='flex flex-col items-center gap-2 md:items-start'>
						<AvatarUpload />
						<h2 className='flex text-xl font-bold text-teal-400 md:hidden'>{user?.name}</h2>
					</div>

					<div className='grid flex-1 grid-cols-1 gap-2 md:grid-cols-3'>
						<div className='rounded-lg border-1 border-zinc-200 bg-white p-3 dark:border-none dark:bg-zinc-900'>
							<p className='mb-1 text-xs text-zinc-400'>Full Name</p>
							<p className='text-sm font-medium text-zinc-900 dark:text-white'>
								{user?.name} {user?.lastName}
							</p>
						</div>

						<div className='rounded-lg border-1 border-zinc-200 bg-white p-3 dark:border-none dark:bg-zinc-900'>
							<p className='mb-1 text-xs text-zinc-500 dark:text-zinc-400'>Email</p>
							<p className='text-sm font-medium text-zinc-900 dark:text-white'>
								{user?.email || 'Not provided'}
							</p>
						</div>

						<div className='rounded-lg border-1 border-zinc-200 bg-white p-3 dark:border-none dark:bg-zinc-900'>
							<p className='mb-1 text-xs text-zinc-400'>Phone</p>
							<p className='text-sm font-medium text-zinc-900 dark:text-white'>
								{user?.phone || 'Not provided'}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
