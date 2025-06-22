import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

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
					<h2 className='mb-2 text-center text-2xl font-bold text-teal-400'>
						Sign In
					</h2>
					<Input
						type='email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Invalid email address'
							}
						})}
						placeholder='Email'
						disabled={isSubmitting}
					/>
					{errors.email && (
						<p className='text-sm font-semibold text-red-500'>
							{errors.email.message}
						</p>
					)}
					<Input
						type='password'
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 8,
								message: 'Password must be at least 8 characters long'
							}
						})}
						placeholder='Password'
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
					<Button type='submit' variant='primary' disabled={isSubmitting}>
						{isSubmitting ? 'Loading...' : 'Sign In'}
					</Button>
				</form>
			</div>
		</PageWrapper>
	)
}

export default Login
