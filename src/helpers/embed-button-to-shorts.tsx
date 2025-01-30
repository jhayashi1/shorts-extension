import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';
import React from 'react';

const ROOT_ID = 'crx-root';
const CALL_LIMIT = 3;

const actionContainerRegex = /^action-container/;
let intervalId: number | undefined = undefined;
let count = 0;

const injectButton = (): void => {
    count += 1;

    if (count > CALL_LIMIT){
        window.clearInterval(intervalId);
        return;
    }

    if (!window.location.href.includes(SHORTS_URL_PREFIX)) {
        return;
    }

    const actionContainers = [...document.querySelectorAll('*')].filter(({className}) => actionContainerRegex.test(className));
    const targetDivs = actionContainers.map((actionContainer) => actionContainer.querySelector('[id=actions]'));

    targetDivs.forEach((targetDiv) => {
        if (!targetDiv || targetDiv.querySelector(`[id=${ROOT_ID}]`)) {
            return;
        }

        console.log('injecting button');

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
    intervalId = window.setInterval(injectButton, 2 * 1000);
};

onUrlChange();
