export interface IUserDto {
	id: number
	avatar: string
	email: string
	name?: string
	lastName?: string
	phone?: string
}

export interface IUpdateProfileDto {
	name: string
	lastName: string
	phone: string
}

export interface IUpdateUserPasswordDto {
	oldPassword: string
	newPassword: string
}

export interface IUpdateUserPasswordForm extends IUpdateUserPasswordDto {
	repeatNewPassword: string
}

export interface IUpdateUserEmailDto {
	email: string
	password: string
}

export interface IUserTransactionDto {
	user: string
	_id: string
	type: 'buy' | 'sell'
	currency_from: string
	currency_to: string
	amount_from: number
	amount_to: number
	rate: number
	created_at: string
}

export interface IUserWalletDto {
	cryptoBalances: {
		[key: string]: number
	}
	usdBalance: number
}
