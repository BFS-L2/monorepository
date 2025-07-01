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
