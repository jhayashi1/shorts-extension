const SHORTS_URL_PREFIX = 'https://www.youtube.com/shorts/';

export const shortsRedirectCallback = async (tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab): Promise<void> => {
    const isActive = await chrome.storage.local.get('isActive');
    const url = tab.url;
    console.log(url);
    if (!url || !isActive) {
        return;
    }

    if (url.startsWith(SHORTS_URL_PREFIX)) {
        const newUrl = url.replace('shorts/', 'watch?v=');
        console.log('updating url to non-shorts-url');
        await chrome.tabs.update(tabId, {url: newUrl});
    }
};

chrome.tabs.onUpdated.addListener(shortsRedirectCallback);
console.log('added content scripts');
