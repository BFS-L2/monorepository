import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useRegister } from './hooks/useRegister'

export const Register = () => {
	const {
		onSubmit,
		serverError,
		register,
		handleSubmit,
		errors,
		isSubmitting
	} = useRegister()

	return (
		<PageWrapper>
			<div className='px-4'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mx-auto mt-12 flex max-w-sm flex-col gap-2 rounded-lg bg-white p-6 dark:bg-zinc-800'
				>
					<h2 className='mb-2 text-center text-2xl font-bold text-teal-400'>
						Sign Up
					</h2>

					<Input
						type='text'
						placeholder='Name'
						{...register('name', {
							required: 'Name is required',
							minLength: {
								value: 3,
								message: 'Name must be at least 3 characters long'
							},
							pattern: {
								value:
									/^(?!.*(<|>|script|onerror|onload|javascript:|&#|&lt;|&gt;)).*$/i,
								message:
									'Forbidden to enter HTML tags or potentially dangerous content'
							}
						})}
						disabled={isSubmitting}
					/>

					{errors.name && (
						<p className='text-sm font-semibold text-red-500'>
							{errors.name.message}
						</p>
					)}
					<Input
						type='email'
						placeholder='Email'
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
						placeholder='Password'
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
					<Button type='submit' variant='primary' disabled={isSubmitting}>
						{isSubmitting ? 'Loading...' : 'Sign Up'}
					</Button>
				</form>
			</div>
		</PageWrapper>
	)
}
