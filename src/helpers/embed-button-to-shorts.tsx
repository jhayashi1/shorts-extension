import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';
import React from 'react';

const ROOT_ID = 'crx-root';
const actionContainerRegex = /^action-container/;

const injectButton = (): void => {
    const existingInjection = document.getElementById(ROOT_ID);

    if (!window.location.href.includes(SHORTS_URL_PREFIX) || existingInjection) {
        console.log('cancelled injection');
        return;
    }

    const actionContainers = [...document.querySelectorAll('*')].filter(({className}) => actionContainerRegex.test(className));
    const targetDivs = actionContainers.map((actionContainer) => actionContainer.querySelector('[id=actions]'));

    targetDivs.forEach((targetDiv) => {
        if (!targetDiv) {
            return;
        }

        const root = document.createElement('div');
        root.id = ROOT_ID;
        targetDiv.prepend(root);

        createRoot(root).render(
            <React.StrictMode>
                <EmbededButton />
            </React.StrictMode>
        );
    });
};

const onUrlChange = (): void => {
    window.setInterval(injectButton, 3 * 1000);
};

onUrlChange();
