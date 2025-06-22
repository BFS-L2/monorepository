import { BASE_URL } from '@/constants/api.constants'

import { useAvatarUpload } from '../hooks/useAvatarUpload'

import type { IUserDto } from '@/shared/types/user.types'

export const AvatarUpload = ({ profile }: { profile: IUserDto }) => {
	const { handleAvatarChange } = useAvatarUpload()

	return (
		<div className='relative mx-auto inline-block md:mx-0'>
			<input
				type='file'
				name='avatar'
				className='absolute inset-0 z-10 h-26 w-26 cursor-pointer rounded-lg opacity-0'
				onChange={handleAvatarChange}
			/>
			<img
				src={`${BASE_URL}/uploads/${profile?.avatar}`}
				alt='avatar'
				className='h-26 w-26 rounded-2xl object-cover'
			/>
		</div>
	)
}
