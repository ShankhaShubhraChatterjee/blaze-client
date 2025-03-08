import { defineConfig } from 'vite'
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    build: {
        outDir: '../dist/client',
    },
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.test.ts',
    },
})
