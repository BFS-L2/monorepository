import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/enums.constants'

import { authService } from '@/services/auth.service'
import type { IRegisterDto } from '@/shared/types/auth.types'

export const useRegister = () => {
	const [serverError, setServerError] = useState<string | null>(null)
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<IRegisterDto>()

	const { mutate: registerMutation } = useMutation({
		mutationFn: authService.register,
		onSuccess: () => {
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

	const onSubmit = async (data: IRegisterDto) => {
		registerMutation(data)
	}

	return { onSubmit, serverError, register, handleSubmit, errors, isSubmitting }
}
