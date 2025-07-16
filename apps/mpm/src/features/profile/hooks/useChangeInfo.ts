import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import {
	type FieldErrors,
	type UseFormHandleSubmit,
	type UseFormRegister,
	useForm
} from 'react-hook-form'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { userService } from '../services/profile.service'
import type { UserProfileFormData } from '../types'

interface UseChangeInfoResult {
	register: UseFormRegister<UserProfileFormData>
	handleSubmit: UseFormHandleSubmit<UserProfileFormData>
	errors: FieldErrors<UserProfileFormData>
	isSubmitting: boolean
	onSubmit: (data: UserProfileFormData) => void
	serverError: string | null
}

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
