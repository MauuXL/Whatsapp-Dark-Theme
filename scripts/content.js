const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            const found = document.querySelector(
                '[data-icon="settings-refreshed"]'
            );
            if (found) {
                addToggleButton();
                addEyeButton();
                observer.disconnect();
                break;
            }
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
