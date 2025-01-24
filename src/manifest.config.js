import {defineManifest} from '@crxjs/vite-plugin';

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
});
