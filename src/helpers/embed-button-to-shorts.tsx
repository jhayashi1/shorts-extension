import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';

import React from 'react';

if (window.location.href.includes(SHORTS_URL_PREFIX) || window.location.href.includes('localhost')) {
    const observer = new MutationObserver((_mutations) => {
        const targetDiv = document.getElementById('actions');

        if (targetDiv) {
            observer.disconnect();

            const root = document.createElement('div');
            root.id = 'crx-root';
            targetDiv.prepend(root);

            createRoot(root).render(
                <React.StrictMode>
                    <EmbededButton />
                </React.StrictMode>
            );
        }
    });

    observer.observe(document.body, {childList: true, subtree: true});
}
