import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { queryClient } from '@/utils/queryClient'

import { userService } from '@/services/user.service'
import type {
	IUpdateUserPasswordDto,
	IUpdateUserPasswordForm
} from '@/shared/types/user.types'

export const useChangePassword = () => {
	const [serverError, setServerError] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<IUpdateUserPasswordForm>()

	const { mutate: updatePassword } = useMutation({
		mutationFn: userService.updatePassword,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })

			toast.success('Password successfully changed!')

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

	const onSubmit = (data: IUpdateUserPasswordDto) => {
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
