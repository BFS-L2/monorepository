import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'

import { ROUTES } from '@/constants/enums.constants'

import { useAuth } from '@/hooks/auth/useAuth'

export const Home = lazy(() =>
	import('@/pages/Home/Home').then(module => ({ default: module.Home }))
)
const Dashboard = lazy(() =>
	import('@/pages/Dashboard/Dashboard').then(module => ({
		default: module.Dashboard
	}))
)
const Profile = lazy(() =>
	import('@/pages/Profile/Profile').then(module => ({
		default: module.Profile
	}))
)
const Login = lazy(() =>
	import('@/pages/Login/Login').then(module => ({ default: module.Login }))
)
const Register = lazy(() =>
	import('@/pages/Register/Register').then(module => ({
		default: module.Register
	}))
)

export const AppRouter = () => {
	const { isAuthenticated } = useAuth()

	return (
		<Suspense>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<Home />} />

					<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
					<Route path={ROUTES.PROFILE} element={<Profile />} />

					<Route
						path={ROUTES.REGISTER}
						element={
							isAuthenticated ? (
								<Navigate to={ROUTES.HOME} replace />
							) : (
								<Register />
							)
						}
					/>
					<Route
						path={ROUTES.LOGIN}
						element={
							isAuthenticated ? (
								<Navigate to={ROUTES.HOME} replace />
							) : (
								<Login />
							)
						}
					/>
				</Route>

				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
