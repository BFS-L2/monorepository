import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/auth/useAuth'

import { authService } from '@/services/auth.service'
import type { ILoginDto } from '@/shared/types/auth.types'

export const useLogin = () => {
	const [serverError, setServerError] = useState<string | null>(null)

	const { refetch } = useAuth()

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<ILoginDto>()

	const { mutate: loginMutation } = useMutation({
		mutationFn: authService.login,
		onSuccess: () => {
			refetch()
			reset()
			navigate('/')
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

	const onSubmit = (data: ILoginDto) => {
		loginMutation(data)
	}

	return { onSubmit, register, errors, isSubmitting, handleSubmit, serverError }
}
