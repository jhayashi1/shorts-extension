import {defineManifest} from '@crxjs/vite-plugin';
import {SHORTS_URL_PREFIX} from './constants';

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
    ],
    background: [
        {
            service_worker: 'src/message-listener.ts',
            type          : 'module',
        },
    ],
    host_permissions: ['<all_urls>'],
    content_scripts : [
        {
            // matches: [`${SHORTS_URL_PREFIX}*`],
            matches: ['<all_urls>'],
            js     : ['src/helpers/embed-button-to-shorts.tsx'],
        },
    ],
});
