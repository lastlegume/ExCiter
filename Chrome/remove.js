run();
//removeSomeBrackets();


//document.body.style.border = "5px solid red";
function removeSomeBrackets() {
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\w\s,]*?\]/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<a [^>]*?>\s?\[[\w\s,]*?\]\s?<\/a[^>]*?>/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^>]*?>\s?[\w\s,]*?\s?<\/a[^>]*?>[\s]*?\]\s?/g, "");
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^\]]*?>[\s]*?\]\s?/g, "");

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
    var regex = /\s?\([\d\s,]*?\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");

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
    console.log(valids);
    if (Object.keys(valids).length == 0) {
        chrome.storage.local.set({ "urls": [{ "en.wikipedia.org": [1] }, { "www.fs.usda.gov": [1] }] });
        valids = await chrome.storage.local.get("urls").urls;
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
                } else if (settings[j] == 1) {
                    removeAPA();
                }
            }
        }
    }


}
