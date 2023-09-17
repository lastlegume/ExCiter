document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\w\s,]*?\]/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<a [^>]*?>\s?\[[\w\s,]*?\]\s?<\/a[^>]*?>/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^>]*?>\s?[\w\s,]*?\s?<\/a[^>]*?>[\s]*?\]\s?/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\[[\s]*?<a [^\]]*?>[\s]*?\]\s?/g, "");