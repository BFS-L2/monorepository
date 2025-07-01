import { PageWrapper } from '@/components/ui/pageWrapper/PageWrapper'
import { Title } from '@/components/ui/title/Title'

import { useCurrenciesData } from '@/hooks/api/useCurrencies'
import { useWallet } from '@/hooks/api/useWallet'
import { useAuth } from '@/hooks/auth/useAuth'

import { BuyCrypto, SellCrypto } from '@/features/crypto'
import { TransactionsSection } from '@/features/transactions'
import { WalletSection } from '@/features/wallet'

export const Dashboard = () => {
	const { isAuthenticated, isLoading: isAuthLoading } = useAuth()
	const { wallet, isLoading: isWalletLoading } = useWallet()
	const { currenciesData } = useCurrenciesData()

	const isCriticalLoading = isAuthLoading || isWalletLoading
	const isWalletMissing = !isAuthenticated && !wallet

	return (
		<PageWrapper>
			<section className='container mx-auto p-4'>
				<Title type='h1' className='mb-3'>
					Dashboard
				</Title>

				<WalletSection
					isCriticalLoading={isCriticalLoading}
					isWalletMissing={isWalletMissing}
					currenciesData={currenciesData}
					wallet={wallet}
				/>
				<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
					<BuyCrypto wallet={wallet} currenciesData={currenciesData} />
					<SellCrypto wallet={wallet} currenciesData={currenciesData} />
				</div>
				<TransactionsSection
					currenciesData={currenciesData}
					isCriticalLoading={isCriticalLoading}
				/>
			</section>
		</PageWrapper>
	)
}
