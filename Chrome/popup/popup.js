
var options = document.getElementById("options");

options.addEventListener('click', open)

var enabled = document.getElementById("enabled");
enabled.addEventListener('change', toggle);
set();
async function set() {
    var enabledStorage = await chrome.storage.local.get();
    if(Object.keys(enabledStorage).length==0)
    chrome.storage.local.set({ 'enabled': true });
    enabled.checked = enabledStorage.enabled;
}
function toggle() {
    chrome.storage.local.set({ 'enabled': enabled.checked });
}

function open() {
    let page = chrome.runtime.openOptionsPage();
    page.then();
}