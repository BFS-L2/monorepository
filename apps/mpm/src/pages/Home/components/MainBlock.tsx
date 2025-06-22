import { HeroSection } from './HeroSection'

export const MainBlock = () => {
	return (
		<>
			<div className='absolute h-screen w-full bg-zinc-900 bg-cover opacity-90' />
			<div className='h-screen w-full bg-[url(/currenciesImg-3.jpg)] bg-cover bg-no-repeat'>
				<div className='container mx-auto px-4 pt-10'>
					<HeroSection />
				</div>
			</div>
		</>
	)
}
