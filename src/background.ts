import {shortsRedirectCallback} from './helpers/redirect-shorts-link';

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
    console.log('received message');
    if (message.action !== 'redirectShorts') {
        return;
    }

    console.log('redirecting shorts link');
    shortsRedirectCallback();
});
