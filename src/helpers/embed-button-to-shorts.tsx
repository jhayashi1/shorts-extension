import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';
import React from 'react';
import {sleep} from './sleep';

const ROOT_ID = 'crx-root';
let observer: MutationObserver | undefined;

const injectButton = (mutations: MutationRecord[]): void => {
    console.log('mutation detected');
    if (!window.location.href.includes(SHORTS_URL_PREFIX)) {
        return;
    }


    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType !== 1) {
                return;
            }

            const element = node as HTMLElement;

            const actionsDivs = element.matches?.('#actions')
                ? [element]
                : element.querySelectorAll?.('#actions');

            actionsDivs.forEach((actionsDiv) => {
                if (!(actionsDiv instanceof HTMLElement) || actionsDiv.dataset.observed) {
                    return;
                }

                actionsDiv.dataset.observed = 'true';

                const root = document.createElement('div');
                root.id = ROOT_ID;
                actionsDiv.prepend(root);

                createRoot(root).render(
                    <React.StrictMode>
                        <EmbededButton />
                    </React.StrictMode>
                );

            });
        });
    });
};

const onUrlChange = (): void => {
    let content;

    while (!content) {
        sleep(1 * 1000);
        content = document.querySelector('#content');
    }

    observer = new MutationObserver(injectButton);
    observer.observe(content, {childList: true, subtree: true});
};

onUrlChange();
