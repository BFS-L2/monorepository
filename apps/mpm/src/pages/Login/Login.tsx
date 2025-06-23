import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { Title } from '@/components/ui/title/Title'

import { FormInput } from '../../components/ui/formInput/FormInput'

import { useLogin } from './hooks/useLogin'

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
					className='mx-auto mt-12 flex max-w-sm flex-col gap-2 rounded-lg bg-white p-6 dark:bg-zinc-800'
				>
					<Title
						type='h1'
						className='mb-2 text-center text-teal-400 dark:text-teal-400'
					>
						Sign In
					</Title>

					<FormInput
						type='email'
						placeholder='Email'
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
						placeholder='Password'
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

					<Button type='submit' variant='primary' disabled={isSubmitting}>
						{isSubmitting ? 'Loading...' : 'Sign In'}
					</Button>
				</form>
			</div>
		</PageWrapper>
	)
}

export default Login
