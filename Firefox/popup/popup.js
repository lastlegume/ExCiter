/*var apa = document.getElementById("APA");
var allp = document.getElementById("allParentheses");
var allb = document.getElementById("allBrackets");
var numb = document.getElementById("numBrackets");
var nump = document.getElementById("numParentheses");
apa.addEventListener('click', removeAPA);
allp.addEventListener('click', removeAllParentheses);
allb.addEventListener('click', removeAllBrackets);
numb.addEventListener('click', removeSomeBrackets);
nump.addEventListener('click', removeNumericalParentheses);*/

document.querySelector("form").addEventListener("submit", remove);
var options = document.getElementById("options");

options.addEventListener('click', open)


function remove(e) {
    e.preventDefault();
    if (document.querySelector("#allBrackets").checked)
        removeAllBrackets();
    if (document.querySelector("#numBrackets").checked)
        removeSomeBrackets();
    if (document.querySelector("#numParentheses").checked)
        removeNumericalParentheses();
    if (document.querySelector("#allParentheses").checked)
        removeAllParentheses();
    if (document.querySelector("#apa").checked)
        removeAPA();
    if (document.querySelector("#mla").checked)
        removeMLA();
}

function removeSomeBrackets() {
    browser.tabs.executeScript({
        //     'code': 'document.body.innerHTML = document.body.innerHTML.replace(/\[[\d\s,]*?\]/g, "");'
        'file': "/popup/removenumbrackets.js"
    });
}
function removeAllBrackets() {
    browser.tabs.executeScript({
        //   'code': 'document.body.innerHTML = document.body.innerHTML.replaceAll(/\[.*?\]/g, "");'
        'file': "/popup/removeAllBrackets.js"
    });
}
function removeAllParentheses() {
    browser.tabs.executeScript({
        //       'code': 'document.body.innerHTML = document.body.innerHTML.replaceAll(/\(.*?\)/g, "");'
        'file': "/popup/removeAllParentheses.js"
    });
}
function removeNumericalParentheses() {
    browser.tabs.executeScript({
        //    'code': 'document.body.innerHTML = document.body.innerHTML.replaceAll(/\([\d\s,]*?\)/g, "");'
        'file': "/popup/removenumparentheses.js"
    });
}
function removeAPA() {
    browser.tabs.executeScript({
        //    'code': 'document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\([\w\s\.&]*?, \d{4}\)/g, "");'
        'file': "/popup/removeAPA.js"
    });
}
function removeMLA() {
    browser.tabs.executeScript({
        //    'code': 'document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\([\w\s\.&]*?, \d{4}\)/g, "");'
        'file': "/popup/removeMLA.js"
    });
}
function open() {
    let page = browser.runtime.openOptionsPage();
    page.then();
}