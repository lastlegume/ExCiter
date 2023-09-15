var regex = /\s?\[[\d\s,]*?\]/g;
document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");