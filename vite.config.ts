import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import manifest from './src/manifest.config.js';

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
                app: './index.html',
            },
        },
    },
    server: {
        open: './index.html',
    },
});