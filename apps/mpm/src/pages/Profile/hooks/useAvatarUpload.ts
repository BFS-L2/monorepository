import { queryClient } from '@/utils/queryClient'

import { userService } from '@/services/user.service'

export const useAvatarUpload = () => {
	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0]

			const maxSizeInBytes = 2 * 1024 * 1024
			const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

			if (file.size > maxSizeInBytes) {
				return
			}

			if (!allowedTypes.includes(file.type)) {
				return
			}

			const formData = new FormData()

			formData.append('avatar', file)

			userService.updateAvatar(formData).then(() => {
				queryClient.invalidateQueries({ queryKey: ['profile'] })
			})
		}
	}

	return { handleAvatarChange }
}
