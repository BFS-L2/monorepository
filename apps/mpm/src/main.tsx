import { createRoot } from 'react-dom/client'

import './assets/styles/global.css'
import { MainProvider } from './providers/MainProvider'
import { AppRouter } from './routes/AppRouter'

createRoot(document.getElementById('root')!).render(
	<MainProvider>
		<AppRouter />
	</MainProvider>
)
