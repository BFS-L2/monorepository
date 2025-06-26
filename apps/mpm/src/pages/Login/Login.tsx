import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Hr } from '@/components/ui/hr/Hr'
import { Title } from '@/components/ui/title/Title'

import { FormInput } from '../../components/ui/formInput/FormInput'

import { useLogin } from './useLogin'

export const Login = () => {
	const {
		onSubmit,
		register,
		errors,
		isSubmitting,
		handleSubmit,
		serverError
	} = useLogin()

	return (
		<PageWrapper>
			<div className='px-4'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mx-auto my-12 flex max-w-md flex-col gap-2 rounded-xl bg-white p-6 dark:bg-zinc-800'
				>
					<Title type='h1' className='mb-2 text-teal-400 dark:text-teal-400'>
						Sign In
					</Title>

					<Hr />

					<FormInput
						type='email'
						label='Email'
						placeholder='Enter email:'
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
						label='Password'
						placeholder='Enter password:'
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

					<Button
						type='submit'
						className='mt-1 w-30'
						variant='primary'
						disabled={isSubmitting}
					>
						Sign In
					</Button>
				</form>
			</div>
		</PageWrapper>
	)
}

export default Login
