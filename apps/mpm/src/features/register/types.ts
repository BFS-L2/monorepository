import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface RegisterFormData {
	email: string
	password: string
	name: string
}

export interface UseRegisterResult {
	register: UseFormRegister<RegisterFormData>
	handleSubmit: UseFormHandleSubmit<RegisterFormData>
	errors: FieldErrors<RegisterFormData>
	isSubmitting: boolean
	onSubmit: (data: RegisterFormData) => void
	serverError: string | null
}
