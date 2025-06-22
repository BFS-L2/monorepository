import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

import { useChangeInfo } from '../hooks/useChangeInfo'

export const ChangeInfoForm = () => {
	const {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		onSubmit,
		serverError
	} = useChangeInfo()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			encType='multipart/form-data'
			className='flex flex-col justify-between gap-1 rounded-xl bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-1'>
				<h2 className='mb-1 text-lg font-semibold text-zinc-900 dark:bg-gradient-to-r dark:from-teal-300 dark:to-teal-500 dark:bg-clip-text dark:text-transparent'>
					Change Info
				</h2>
				<Input
					type='text'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter new name'
					{...register('name', {
						required: false,
						pattern: {
							value:
								/^(?!.*(<|>|script|onerror|onload|javascript:|&#|&lt;|&gt;)).*$/i,
							message:
								'Forbidden to enter HTML tags or potentially dangerous content'
						},
						minLength: {
							value: 3,
							message: 'Name must be at least 3 characters long'
						}
					})}
				/>
				{errors.name && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.name.message}
					</p>
				)}
				<Input
					type='text'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter new lastName'
					{...register('lastName', {
						required: false,
						pattern: {
							value:
								/^(?!.*(<|>|script|onerror|onload|javascript:|&#|&lt;|&gt;)).*$/i,
							message:
								'Forbidden to enter HTML tags or potentially dangerous content'
						},
						minLength: {
							value: 3,
							message: 'LastName must be at least 3 characters long'
						}
					})}
				/>
				{errors.lastName && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.lastName.message}
					</p>
				)}

				<Input
					type='text'
					variant='profile'
					disabled={isSubmitting}
					placeholder='Enter new phone'
					{...register('phone', {
						required: false,
						pattern: {
							value: /^\+\d{11}$/,
							message: 'Invalid phone number'
						}
					})}
				/>
				{errors.phone && (
					<p className='text-sm font-semibold text-red-500'>
						{errors.phone.message}
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
