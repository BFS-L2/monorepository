interface ErrorMessageProps {
	message?: string | null | undefined
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<>
			{message && (
				<p className='text-sm font-semibold text-red-500'>{message}</p>
			)}
		</>
	)
}
