import { PageWrapper } from '@/components/PageWrapper'
import { Loader } from '@/components/ui/loader/Loader'
import { Title } from '@/components/ui/title/Title'

import { useTransactions } from '@/hooks/api/useTransactions'
import { useWallet } from '@/hooks/api/useWallet'
import { useAuth } from '@/hooks/auth/useAuth'

import { useCurrenciesData } from '../../hooks/api/useCurrencies'

import { BuyCrypto } from './components/BuyCrypto'
import { SellCrypto } from './components/SellCrypto'
import { TransactionsSection } from './components/transactions/TransactionsSection'
import { WalletSection } from './components/wallet/WalletSection'

export const Dashboard = () => {
	const { isAuthenticated } = useAuth()

	const { wallet, isLoading } = useWallet()
	const { transactions } = useTransactions()
	const { currenciesData } = useCurrenciesData()

	const isWalletMissing = !isAuthenticated && !wallet

	return (
		<PageWrapper>
			<div className='container mx-auto p-4'>
				<Title className='mb-3'>Dashboard</Title>

				{isLoading && (
					<div className='flex items-center justify-center py-5'>
						<Loader />
					</div>
				)}

				{!isLoading && isWalletMissing && (
					<div className='flex items-center justify-center pt-5 text-lg text-teal-400'>
						Wallet not found
					</div>
				)}

				{!isLoading && !isWalletMissing && (
					<>
						<WalletSection currenciesData={currenciesData} wallet={wallet} />
						<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
							<BuyCrypto wallet={wallet} currenciesData={currenciesData} />
							<SellCrypto wallet={wallet} currenciesData={currenciesData} />
						</div>
						<TransactionsSection
							transactions={
								Array.isArray(transactions)
									? transactions
									: transactions
										? [transactions]
										: []
							}
							currenciesData={currenciesData}
						/>
					</>
				)}
			</div>
		</PageWrapper>
	)
}
