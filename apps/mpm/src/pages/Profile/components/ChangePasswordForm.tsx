import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useChangePassword } from '../hooks/useChangePassword'

export const ChangePasswordForm = () => {
	const {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		serverError,
		onSubmit
	} = useChangePassword()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-between gap-1 rounded-xl bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-1'>
				<h2 className='mb-1 text-lg font-semibold text-zinc-900 dark:bg-gradient-to-r dark:from-teal-300 dark:to-teal-500 dark:bg-clip-text dark:text-transparent'>
					Change Password
				</h2>
				<Input
					type='password'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter current password'
					{...register('oldPassword', {
						required: 'Old password is required',
						minLength: {
							value: 8,
							message: 'Password must be at least 8 characters long'
						}
					})}
				/>
				{errors.oldPassword && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.oldPassword.message}
					</p>
				)}
				<Input
					type='password'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter new password'
					{...register('newPassword', {
						required: 'New password is required',
						minLength: {
							value: 8,
							message: 'Password must be at least 8 characters long'
						}
					})}
				/>
				{errors.newPassword && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.newPassword.message}
					</p>
				)}
				<Input
					type='password'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter new password again'
					{...register('repeatNewPassword', {
						required: 'Confirm new password is required',
						validate: (value, formValues) => {
							if (value !== formValues.newPassword) {
								return 'Passwords do not match'
							}
						}
					})}
				/>
				{errors.repeatNewPassword && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.repeatNewPassword.message}
					</p>
				)}
				{serverError && (
					<p className='text-sm font-semibold text-red-500'>{serverError}</p>
				)}
			</div>
			<Button
				type='submit'
				disabled={isSubmitting}
				variant='primary'
				className='mt-2 md:w-52'
			>
				{isSubmitting ? 'Loading...' : 'Update'}
			</Button>
		</form>
	)
}
