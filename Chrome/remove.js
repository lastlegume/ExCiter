run();

function removeSomeBrackets() {
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\d\s,]*?\]/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<a [^>]*?>\s?\[[\w\s,]*?\]\s?<\/a[^>]*?>/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^>]*?>\s?[\w\s,]*?\s?<\/a[^>]*?>[\s]*?\]\s?/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^\]]*?>[\s]*?\]\s?/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<sup.*?>citation needed<.*?\]<\/sup>\s?/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<span class="mw-editsection">.*?>edit<.*?\]<\/span><\/span>\s?/g, "");

}
function removeAllBrackets() {
    var regex = /\s?\[.*?\]/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}
function removeAllParentheses() {
    var regex = /\s?\(.*?\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}
function removeNumericalParentheses() {
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\([\d\s,]*?\)/g, "");
}
function removeAPA() {
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?[^,]*?\s*?,\s*?\s?\(\s?[^,]*?\s?,\s?(<[^>]*?>)*\s?,?\s?\d{4}\s?(<\/[^>]*?>)*/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<a[^>]*?>\s?[\w\s\.&;]*?, \d{4}[a-z]?\s*?<\/a>;?/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\(\s*?\)\s?/g, "");
}
function removeMLA() {
    var regex = /\s?\([\w\s\d\.";:\-,]*?[\d]*?\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}


async function run() {
    var valids = await chrome.storage.local.get('urls');
    var enabled = await chrome.storage.local.get("enabled");
    if (Object.keys(enabled).length == 0) {
        chrome.storage.local.set({ "enabled": true });
    }else if (!enabled.enabled) {
        return;
    }
    if (Object.keys(valids).length == 0) {
        chrome.storage.local.set({ "urls": [{ "en.wikipedia.org": [1] }, { "www.fs.usda.gov": [1] }, { "www.ncbi.nlm.nih.gov": [2] }, { "www.srs.fs.usda.gov": [3] }] });
        valids = await chrome.storage.local.get("urls");
    }
    valids = valids.urls;
    var url = window.location.href;
    url = new URL(url).hostname;
    //console.log(valids);
    //console.log(url);

    for (let i = 0; i < valids.length; i++) {
        if (Object.keys(valids[i])[0] === url) {
            settings = Object.values(valids[i])[0];
            for (let j = 0; j < settings.length; j++) {
                if (settings[j] == 1) {
                    removeSomeBrackets();
                    //console.log(document.body.innerHTML);
                    //console.log("ran");
                } else if (settings[j] == 2) {
                    removeAPA();
                } else if (settings[j] == 3) {
                    removeNumericalParentheses();
                }
            }
        }
    }


}
