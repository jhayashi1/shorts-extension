export const injectScriptToCurrentTab = async (func: () => unknown, args: []) => {
    const [tab] = await chrome.tabs.query({ active: true });
    const id = tab?.id;
    const [{result}] = await chrome.scripting.executeScript({
        target: {tabId: id!},
        args,   
        func,
    });

    return result;
};