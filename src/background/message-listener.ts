import {shortsRedirectCallback} from '../helpers/redirect-shorts-link';

const ACTIONS: Record<string, () => unknown> = {
    redirectShorts: shortsRedirectCallback,
};

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
    const callback = ACTIONS[message.action];

    if (!ACTIONS[message.action]) {
        return;
    }

    callback();
});
