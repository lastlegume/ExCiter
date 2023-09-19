function removeMLA(){
    var regex = /\s?\([\w\s\d\.";:\-,]*?[\d]*?\)/g;
    document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");
}