async function saveOptions(e) {
  e.preventDefault();
  var newUrls = await browser.storage.local.get("urls");
  var chosenoptions = document.getElementById("options").selectedOptions;
  var chosenURL = document.getElementById("url").value;
  var list = [];
  chosenURL = chosenURL + "";
  for (let i = 0; i < chosenoptions.length; i++) {
    list.push(chosenoptions[i].value * 1);
  }
  if (!containsObj(newUrls.urls, chosenURL))
    newUrls.urls.push({ [chosenURL]: list });
  browser.storage.local.set({ "urls": newUrls.urls });
  //  console.log(await browser.storage.local.get("urls"));
  restoreOptions();

}
function containsObj(list, val) {
  for (let i = 0; i < list.length; i++)
    if (Object.keys(list[i])[0] === val)
      return true;
  return false;
}
function contains(list, val) {
  for (let i = 0; i < list.length; i++)
    if (list[i] === val)
      return true;
  return false;
}
async function restoreOptions() {
  var sites = document.getElementById("sites");
  sites.value = "";
  var list = await browser.storage.local.get("urls");
  console.log(list);
  list = list.urls;
  for (let i = 0; i < list.length; i++) {
    var str = "";
    var values = Object.values(list[i])[0];
    for (let j = 0; j < values.length; j++) {
      if (values[j] == 1)
        str += "brackets ";
      else if (values[j] == 2)
        str += "APA ";
    }
    sites.value = sites.value + Object.keys(list[i])[0] + ": " + str + "\n";
  }
}
async function updateValues() {
  var sites = document.getElementById("sites");
  var oldUrls = await browser.storage.local.get("urls");
  var list = oldUrls.urls;
  var whitelist = sites.value.split("\n");
  for (let i = 0; i < list.length || i < whitelist.length; i++) {
    if (i < list.length)
      list[i] = Object.keys(list[i])[0];
    if (i < whitelist.length)
      whitelist[i] = whitelist[i].split(":")[0];
  }
  var removes = [];
  for (let i = 0; i < list.length; i++) {
    if (!contains(whitelist, list[i])) {
      removes.push(list[i]);
    }
  }
  oldUrls = await browser.storage.local.get("urls")
  oldUrls = oldUrls.urls;

  var urls = [];
  for (let i = 0; i < oldUrls.length; i++) {
    if (!contains(removes, Object.keys(oldUrls[i])[0]))
      urls.push(oldUrls[i]);
  }
  browser.storage.local.set({ "urls": urls });
  restoreOptions();

}
// function resetToDefaults() {
//   browser.storage.local.set({
//     'strict': false,
//     'toggle': true,
//     'numBrackets': true,
//     'numParentheses': false,
//     'allParentheses': false,
//     'apa': false,
//     'mla': false
//   });
//   document.querySelector("#strict").checked = false;
//   document.querySelector("#toggle").checked = true;
//   document.querySelector("#numBrackets").checked = true;
//   document.querySelector("#numParentheses").checked = false;
//   document.querySelector("#allParentheses").checked = false;
//   document.querySelector("#apa").checked = false;
//   document.querySelector("#mla").checked = false;

//  // console.log("reset");
// }
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("addition").addEventListener("submit", saveOptions);
document.getElementById("update").addEventListener('click', updateValues);