getSettings();
//removeSomeBrackets();


//document.body.style.border = "5px solid red";
function removeSomeBrackets() {
    var regex = /\s?\[[\d\s,]*?\]/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
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
function removeAPA(){
    var regex = /\s?\([\w\s\.&]*?, \d{4}\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}
function removeMLA(){
    var regex = /\s?\([\w\s\d\.";:\-,]*?[\d]*?\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}

async function getSettings() {
    let strict = await browser.storage.local.get("strict");
    let toggle = await browser.storage.local.get("toggle");
    let numBrackets = await browser.storage.local.get("numBrackets");
    let numParentheses = await browser.storage.local.get("numParentheses");
    let allParentheses = await browser.storage.local.get("allParentheses");
    let apa = await browser.storage.local.get("apa");
    let mla = await browser.storage.local.get("mla");
  //  console.log(toggle.toggle);
    if(toggle.toggle){
        if(numBrackets.numBrackets)
            removeSomeBrackets();
        if (strict.strict)
            removeAllBrackets();
        if(allParentheses.allParentheses)
            removeAllParentheses();
        if(numParentheses.numParentheses)
            removeNumericalParentheses();
        if(apa.apa)
            removeAPA();
        if(mla.mla)
            removeMLA();
    }
   
        
}
