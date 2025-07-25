import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-12'>{children}</div>
		</div>
	)
}
