const SHORTS_URL_PREFIX = 'https://www.youtube.com/shorts/';

export const shortsRedirectCallback = async (): Promise<void> => {
    const tab = await chrome.tabs.query({active: true, currentWindow: true});
    const tabId = tab[0]?.id;
    const curUrl = tab[0]?.url;

    if (!curUrl || !tabId) {
        return;
    }

    if (curUrl.startsWith(SHORTS_URL_PREFIX)) {
        const newUrl = curUrl.replace('shorts/', 'watch?v=');

        chrome.scripting.executeScript({
            target: {tabId},
            func  : (url) => {
                history.pushState(null, '', url);
                window.location.href = url;
            },
            args: [newUrl],
        });
    }
};
