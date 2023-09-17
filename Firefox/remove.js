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

// async function getSettings() {
//     let strict = await browser.storage.local.get("strict");
//     let toggle = await browser.storage.local.get("toggle");
//     let numBrackets = await browser.storage.local.get("numBrackets");
//     let numParentheses = await browser.storage.local.get("numParentheses");
//     let allParentheses = await browser.storage.local.get("allParentheses");
//     let apa = await browser.storage.local.get("apa");
//     let mla = await browser.storage.local.get("mla");
//     //  console.log(toggle.toggle);
//     if (toggle.toggle) {
//         if (numBrackets.numBrackets)
//             removeSomeBrackets();
//         if (strict.strict)
//             removeAllBrackets();
//         if (allParentheses.allParentheses)
//             removeAllParentheses();
//         if (numParentheses.numParentheses)
//             removeNumericalParentheses();
//         if (apa.apa)
//             removeAPA();
//         if (mla.mla)
//             removeMLA();
//     }
// }

async function run() {
    var valids = await browser.storage.local.get("urls");
    if (Object.keys(valids).length == 0) {
        browser.storage.local.set({ "urls": [{ "en.wikipedia.org": [1] }, { "www.fs.usda.gov": [1] }] });
        valids = await browser.storage.local.get("urls").urls;
    }
    valids = valids.urls;
    var url = window.location.href;
    url = new URL(url).hostname;
    console.log(valids);
    console.log(url);

    for (let i = 0; i < valids.length; i++) {
        if (Object.keys(valids[i])[0] === url) {
            settings = Object.values(valids[i])[0];
            for (let j = 0; j < settings.length; j++) {
                if (settings[j] == 1) {
                    removeSomeBrackets();
                    console.log(document.body.innerHTML);
                    console.log("ran");
                } else if (settings[j] == 1) {
                    removeAPA();
                }
            }
        }
    }


}
