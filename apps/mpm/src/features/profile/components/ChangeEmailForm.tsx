import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Hr } from '@/components/ui/hr/Hr'
import { Title } from '@/components/ui/title/Title'

import { useChangeEmail } from '../hooks/useChangeEmail'

export const ChangeEmailForm = () => {
	const { register, handleSubmit, errors, isSubmitting, serverError, onSubmit } = useChangeEmail()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-between gap-2 rounded-lg bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-2'>
				<Title type='h2' className='mb-1 text-lg font-semibold text-teal-400 dark:text-teal-400'>
					Change Email
				</Title>

				<Hr />

				<FormInput
					type='email'
					variant='profile'
					label='Email'
					placeholder='Enter new email:'
					register={{
						...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Invalid email address'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.email?.message} />

				<FormInput
					type='password'
					variant='profile'
					label='Password'
					placeholder='Enter current password:'
					register={{
						...register('password', {
							required: 'Password is required',
							minLength: {
								value: 8,
								message: 'Password must be at least 8 characters long'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.password?.message} />

				<ErrorMessage message={serverError} />
			</div>
			<Button type='submit' variant='primary' className='mt-2 md:w-30' disabled={isSubmitting}>
				Update
			</Button>
		</form>
	)
}
