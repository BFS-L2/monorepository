import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface UserResponse {
	email: string
	name: string
	lastName: string
	phone: string
}

export interface UserProfileFormData {
	name: string
	lastName: string
	phone: string
}

export interface UserEmailFormData {
	email: string
	password: string
}

export interface UserPasswordsFormData {
	oldPassword: string
	newPassword: string
	repeatNewPassword?: string
}

export interface IProfileInformation {
	user: UserResponse
	isLoading: boolean
}

export interface UseChangeEmailResult {
	register: UseFormRegister<UserEmailFormData>
	handleSubmit: UseFormHandleSubmit<UserEmailFormData>
	errors: FieldErrors<UserEmailFormData>
	isSubmitting: boolean
	onSubmit: (data: UserEmailFormData) => void
	serverError: string | null
}

export interface UseChangeInfoResult {
	register: UseFormRegister<UserProfileFormData>
	handleSubmit: UseFormHandleSubmit<UserProfileFormData>
	errors: FieldErrors<UserProfileFormData>
	isSubmitting: boolean
	onSubmit: (data: UserProfileFormData) => void
	serverError: string | null
}

export interface UseChangePasswordResult {
	register: UseFormRegister<UserPasswordsFormData>
	handleSubmit: UseFormHandleSubmit<UserPasswordsFormData>
	errors: FieldErrors<UserPasswordsFormData>
	isSubmitting: boolean
	onSubmit: (data: UserPasswordsFormData) => void
	serverError: string | null
}
