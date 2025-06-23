import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), visualizer({ open: true })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					ui: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
					chart: ['chart.js', 'react-chartjs-2'],
					router: ['react-router-dom'],
					form: ['react-hook-form'],
					query: ['@tanstack/react-query', '@tanstack/react-query-devtools'],
					state: ['zustand'],
					swiper: ['swiper']
				}
			}
		}
	}
})
