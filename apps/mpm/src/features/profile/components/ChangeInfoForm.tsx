import { Button } from '@/components/ui/button/Button'
import { ErrorMessage } from '@/components/ui/error/ErrorMessage'
import { FormInput } from '@/components/ui/formInput/FormInput'
import { Hr } from '@/components/ui/hr/Hr'
import { Title } from '@/components/ui/title/Title'

import { useChangeInfo } from '../hooks/useChangeInfo'

export const ChangeInfoForm = () => {
	const { register, handleSubmit, errors, isSubmitting, onSubmit, serverError } = useChangeInfo()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-between gap-1 rounded-xl bg-white p-4 dark:bg-zinc-800'
		>
			<div className='flex flex-col gap-2'>
				<Title type='h2' className='mb-1 text-lg font-semibold text-teal-400 dark:text-teal-400'>
					Change Info
				</Title>

				<Hr />

				<FormInput
					type='text'
					variant='profile'
					label='Name'
					placeholder='Enter new name:'
					register={{
						...register('name', {
							required: false,
							pattern: {
								value: /^(?!.*(<|>|script|onerror|onload|javascript:|&#|&lt;|&gt;)).*$/i,
								message: 'Forbidden to enter HTML tags or potentially dangerous content'
							},
							minLength: {
								value: 3,
								message: 'Name must be at least 3 characters long'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.name?.message} />

				<FormInput
					type='text'
					variant='profile'
					label='Last name'
					placeholder='Enter new last name:'
					register={{
						...register('lastName', {
							required: false,
							pattern: {
								value: /^(?!.*(<|>|script|onerror|onload|javascript:|&#|&lt;|&gt;)).*$/i,
								message: 'Forbidden to enter HTML tags or potentially dangerous content'
							},
							minLength: {
								value: 3,
								message: 'LastName must be at least 3 characters long'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.lastName?.message} />

				<FormInput
					type='text'
					variant='profile'
					label='Phone'
					placeholder='Enter new phone:'
					register={{
						...register('phone', {
							required: false,
							pattern: {
								value: /^\+\d{11}$/,
								message: 'Invalid phone number'
							}
						})
					}}
					disabled={isSubmitting}
				/>

				<ErrorMessage message={errors?.phone?.message} />

				<ErrorMessage message={serverError} />
			</div>
			<Button type='submit' variant='primary' className='mt-2 md:w-30' disabled={isSubmitting}>
				Update
			</Button>
		</form>
	)
}
