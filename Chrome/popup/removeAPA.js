//document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\(\s?[\w\s\.&]*?\s?,\s?\d{4}\s?\)/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?[^,]*?\s*?,\s*?\s?\(\s?[^,]*?\s?,\s?(<[^>]*?>)*\s?,?\s?\d{4}\s?(<\/[^>]*?>)*/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?<a[^>]*?>\s?[\w\s\.&;]*?, \d{4}[a-z]?\s*?<\/a>;?/g, "");
document.body.innerHTML = document.body.innerHTML.replaceAll(/\s?\(\s*?\)\s?/g, "");

//console.log(document.body.innerHTML);
///\s?\(\s?[^,]*?\s?,\s?(<[^>]*?>)*\s?,?\s?\d{4}\s?(<\/[^>]*?>)*\)/g
//.match(/\s?\(\s?[^,]*?\s?,\s?(<[^>]*?>)*\s?\d{4}\s?(<\/[^>]*?>)*\)/g)