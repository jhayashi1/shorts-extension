import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';

import React from 'react';

const injectButton = (_mutations: MutationRecord[], obs: MutationObserver): void => {
    const targetDiv = document.getElementById('actions');

    if (targetDiv) {
        obs.disconnect();

        const root = document.createElement('div');
        root.id = 'crx-root';
        targetDiv.prepend(root);

        createRoot(root).render(
            <React.StrictMode>
                <EmbededButton />
            </React.StrictMode>
        );
    }
};

const onUrlChange = (): void => {
    if (!window.location.href.includes(SHORTS_URL_PREFIX)) {
        return;
    }

    const observer: MutationObserver = new MutationObserver(injectButton);

    observer.observe(document.body, {childList: true, subtree: true});
};

onUrlChange();
