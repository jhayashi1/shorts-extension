//@ts-ignore
import scriptPath from '../helpers/embed-button-to-shorts?script';
import {YOUTUBE_PREFIX} from '../constants';

export const registerTabUrlListener = (): void => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, _tab) => {
        const {url, status} = changeInfo;

        console.log(`URL changed to: ${url} with status ${status}`);
        if (!url || !url.startsWith(YOUTUBE_PREFIX)) {
            return;
        }

        console.log('calling script');

        chrome.scripting.executeScript({
            target: {tabId},
            files : [scriptPath],
        });
    });
};
