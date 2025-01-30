import {defineManifest} from '@crxjs/vite-plugin';
import {SHORTS_URL_PREFIX} from './src/constants';

export default defineManifest({
    manifest_version: 3,
    name            : 'shorts-extension',
    version         : '1.0.0',
    description     : '',
    action          : {
        default_popup: 'index.html',
    },
    permissions: [
        'activeTab',
        'scripting',
        'storage',
        'tabs',
        'webNavigation',
    ],
    background: {
        service_worker: 'src/background/background.ts',
        type          : 'module',
    },
    host_permissions: ['<all_urls>'],
});
