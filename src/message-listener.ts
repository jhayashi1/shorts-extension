import {shortsRedirectCallback} from './helpers/redirect-shorts-link';

console.log('wooooooo');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('received message');
    if (message.action !== 'redirectShorts') {
        return;
    }

    console.log('redirecting shorts link');
    shortsRedirectCallback();
});
