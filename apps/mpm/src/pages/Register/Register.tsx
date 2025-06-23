import { PageWrapper } from '@/components/PageWrapper'
import { Button } from '@/components/ui/button/Button'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Title } from '@/components/ui/title/Title'

import { ErrorMessage } from '../../components/ui/error/ErrorMessage'

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
					<Title
						type='h1'
						className='mb-2 text-center text-teal-400 dark:text-teal-400'
					>
						Sign Up
					</Title>

					<FormInput
						type='text'
						placeholder='Name'
						register={{
							...register('name', {
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
							})
						}}
						disabled={isSubmitting}
					/>

					<ErrorMessage message={errors?.name?.message} />

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
						{isSubmitting ? 'Loading...' : 'Sign Up'}
					</Button>
				</form>
			</div>
		</PageWrapper>
	)
}
