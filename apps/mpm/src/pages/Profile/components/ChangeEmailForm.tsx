import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useChangeEmail } from '../hooks/useChangeEmail'

export const ChangeEmailForm = () => {
	const {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		serverError,
		onSubmit
	} = useChangeEmail()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-between gap-2 rounded-xl bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-1'>
				<h2 className='mb-1 text-lg font-semibold text-zinc-900 dark:bg-gradient-to-r dark:from-teal-300 dark:to-teal-500 dark:bg-clip-text dark:text-transparent'>
					Change Email
				</h2>
				<Input
					type='email'
					variant='profile'
					placeholder='Enter new email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: 'Invalid email address'
						}
					})}
					disabled={isSubmitting}
				/>
				{errors.email && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.email.message}
					</p>
				)}
				<Input
					type='password'
					variant='profile'
					placeholder='Enter current password'
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 8,
							message: 'Password must be at least 8 characters long'
						}
					})}
					disabled={isSubmitting}
				/>
				{errors.password && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.password.message}
					</p>
				)}
				{serverError && (
					<p className='text-sm font-semibold text-red-500'>{serverError}</p>
				)}
			</div>
			<Button
				type='submit'
				variant='primary'
				className='mt-2 md:w-52'
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Loading...' : 'Update'}
			</Button>
		</form>
	)
}
