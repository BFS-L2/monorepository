export const ErrorMessage = ({
	message
}: {
	message: string | undefined | null
}) => {
	return (
		<>
			{message && (
				<p className='text-sm font-semibold text-red-500'>{message}</p>
			)}
		</>
	)
}
