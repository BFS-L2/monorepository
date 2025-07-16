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
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/auth/useAuth'

import { loginService } from '../services/login.service'
import type { LoginFormData } from '../types'

interface UseLoginResult {
	register: UseFormRegister<LoginFormData>
	handleSubmit: UseFormHandleSubmit<LoginFormData>
	errors: FieldErrors<LoginFormData>
	isSubmitting: boolean
	onSubmit: (data: LoginFormData) => void
	serverError: string | null
}

export const useLogin = (): UseLoginResult => {
	const [serverError, setServerError] = useState<string | null>(null)

	const { refetch } = useAuth()

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<LoginFormData>()

	const { mutate: loginMutation } = useMutation({
		mutationFn: loginService.login,
		onSuccess: () => {
			toast.success('Login successful')

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

	const onSubmit = (data: LoginFormData) => {
		loginMutation(data)
	}

	return { onSubmit, register, errors, isSubmitting, handleSubmit, serverError }
}
