import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Hr } from '@/components/ui/hr/Hr'
import { Title } from '@/components/ui/title/Title'

import { useChangePassword } from '../hooks/useChangePassword'

export const ChangePasswordForm = () => {
	const { register, handleSubmit, errors, isSubmitting, serverError, onSubmit } =
		useChangePassword()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-between gap-1 rounded-lg bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-2'>
				<Title type='h2' className='mb-1 text-lg font-semibold text-teal-400 dark:text-teal-400'>
					Change Password
				</Title>

				<Hr />

				<FormInput
					type='password'
					variant='profile'
					label='Current password'
					placeholder='Enter current password:'
					register={{
						...register('oldPassword', {
							required: 'Old password is required',
							minLength: {
								value: 8,
								message: 'Password must be at least 8 characters long'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.oldPassword?.message} />

				<FormInput
					type='password'
					variant='profile'
					label='New password'
					placeholder='Enter new password:'
					register={{
						...register('newPassword', {
							required: 'New password is required',
							minLength: {
								value: 8,
								message: 'Password must be at least 8 characters long'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.newPassword?.message} />

				<FormInput
					type='password'
					variant='profile'
					label='New password'
					placeholder='Enter new password again:'
					register={{
						...register('repeatNewPassword', {
							required: 'Confirm new password is required',
							validate: (value, formValues) => {
								if (value !== formValues.newPassword) {
									return 'Passwords do not match'
								}
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.repeatNewPassword?.message} />

				<ErrorMessage message={serverError} />
			</div>
			<Button type='submit' variant='primary' className='mt-2 md:w-30' disabled={isSubmitting}>
				Update
			</Button>
		</form>
	)
}
