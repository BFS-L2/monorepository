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

import { ROUTES } from '@/constants/enums.constants'

import { registerService } from '../services/register.service'
import type { RegisterFormData } from '../types'

interface UseRegisterResult {
	register: UseFormRegister<RegisterFormData>
	handleSubmit: UseFormHandleSubmit<RegisterFormData>
	errors: FieldErrors<RegisterFormData>
	isSubmitting: boolean
	onSubmit: (data: RegisterFormData) => void
	serverError: string | null
}

export const useRegister = (): UseRegisterResult => {
	const [serverError, setServerError] = useState<string | null>(null)

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<RegisterFormData>()

	const { mutate: registerMutation } = useMutation({
		mutationFn: registerService,
		onSuccess: () => {
			toast.success('Registration successful')

			reset()
			navigate(ROUTES.LOGIN)
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

	const onSubmit = async (data: RegisterFormData) => {
		registerMutation(data)
	}

	return { onSubmit, serverError, register, handleSubmit, errors, isSubmitting }
}
