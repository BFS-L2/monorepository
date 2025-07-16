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
import type { UserPasswordsFormData } from '../types'

interface UseChangePasswordResult {
	register: UseFormRegister<UserPasswordsFormData>
	handleSubmit: UseFormHandleSubmit<UserPasswordsFormData>
	errors: FieldErrors<UserPasswordsFormData>
	isSubmitting: boolean
	onSubmit: (data: UserPasswordsFormData) => void
	serverError: string | null
}

export const useChangePassword = (): UseChangePasswordResult => {
	const [serverError, setServerError] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<UserPasswordsFormData>()

	const { mutate: updatePassword } = useMutation({
		mutationFn: userService.updatePassword,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })

			toast.success('Password successfully changed!')

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

	const onSubmit = (data: UserPasswordsFormData) => {
		updatePassword(data)
	}

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		serverError,
		onSubmit
	}
}
