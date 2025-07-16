import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface LoginFormData {
	email: string
	password: string
}

export interface UseLoginResult {
	register: UseFormRegister<LoginFormData>
	handleSubmit: UseFormHandleSubmit<LoginFormData>
	errors: FieldErrors<LoginFormData>
	isSubmitting: boolean
	onSubmit: (data: LoginFormData) => void
	serverError: string | null
}
