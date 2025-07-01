import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { userService } from '../services/profile.service'
import type { UserEmailFormData } from '../types'

export const useChangeEmail = () => {
	const [serverError, setServerError] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<UserEmailFormData>()

	const { mutate: updateEmail } = useMutation({
		mutationFn: userService.updateEmail,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })

			toast.success('Email successfully changed!')

			setServerError('')
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

	const onSubmit = (data: UserEmailFormData) => {
		updateEmail(data)
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
