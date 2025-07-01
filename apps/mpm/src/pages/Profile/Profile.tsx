import { Loader } from '@/components/ui/loader/Loader'
import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'
import { Title } from '@/components/ui/title/Title'

import { useAuth } from '@/hooks/auth/useAuth'

import {
	ChangeEmailForm,
	ChangeInfoForm,
	ChangePasswordForm,
	Logout,
	ProfileInformation
} from '@/features/profile'

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth()

	const isProfileMissing = !user || !isAuthenticated

	return (
		<>
			{isLoading && (
				<div className='flex items-center justify-center py-5'>
					<Loader />
				</div>
			)}

			{!isLoading && isProfileMissing && (
				<div className='flex items-center justify-center pt-5 text-lg text-teal-500'>
					Profile not found
				</div>
			)}

			{!isLoading && !isProfileMissing && (
				<PageWrapper>
					<section className='container mx-auto p-4'>
						<Title type='h1' className='mb-3'>
							Profile
						</Title>
						<ProfileInformation isLoading={isLoading} user={user} />
						<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							<ChangeInfoForm />
							<ChangeEmailForm />
							<ChangePasswordForm />
							<Logout />
						</div>
					</section>
				</PageWrapper>
			)}
		</>
	)
}
