var regex = /\s?\([\w\s\.&]*?, \d{4}\)/g;
document.body.innerHTML = document.body.innerHTML.replaceAll(regex, "");