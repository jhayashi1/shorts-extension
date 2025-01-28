import {createRoot} from 'react-dom/client';
import {EmbededButton} from '../components/EmbededButton';
import {SHORTS_URL_PREFIX} from '../constants';

import React from 'react';

// const prependRedirectButton = (mutations): void => {
//     const targetDiv = document.getElementById('actions');
//     console.log(targetDiv);

//     if (targetDiv && window.location.href.includes(SHORTS_URL_PREFIX)) {
//         const root = document.createElement('div');
//         root.id = 'crx-root';
//         targetDiv.prepend(root);

//         createRoot(root).render(
//             <React.StrictMode>
//                 <EmbededButton />
//             </React.StrictMode>
//         );
//     }
// };

// document.addEventListener('DOMContentLoaded', prependRedirectButton);
if (window.location.href.includes(SHORTS_URL_PREFIX)) {
    const observer = new MutationObserver((mutations) => {
        const targetDiv = document.getElementById('actions');
        console.log(targetDiv);

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
