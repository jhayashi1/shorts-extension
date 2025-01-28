import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';

import manifest from './manifest.config';

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