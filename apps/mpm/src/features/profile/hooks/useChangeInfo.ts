import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { userService } from '../services/profile.service'
import type { UseChangeInfoResult, UserProfileFormData } from '../types'

export const useChangeInfo = (): UseChangeInfoResult => {
	const [serverError, setServerError] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<UserProfileFormData>()

	const { mutate: updateProfile } = useMutation({
		mutationFn: userService.updateProfile,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })

			toast.success('Information successfully changed!')

			setServerError(null)
			reset()
		},
		onError: error => {
			if (axios.isAxiosError(error)) {
				const message =
					error.response?.data.details ||
					error.response?.data?.message ||
					error.response?.data?.error ||
					'Server error'
				setServerError(message)
			} else {
				setServerError('Unexpected error')
			}
		}
	})

	const onSubmit = (data: UserProfileFormData) => {
		updateProfile(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		onSubmit,
		serverError
	}
}
