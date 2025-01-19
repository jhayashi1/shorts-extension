import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import manifest from './src/manifest.json';

export default defineConfig({
    plugins: [
        react(),
        crx({
            manifest,
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                app: './src/index.html',
            },
        },
    },
    server: {
        open: './src/index.html',
    },
});