function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    'strict': document.querySelector("#strict").checked,
    'toggle': document.querySelector("#toggle").checked,
    'numBrackets': document.querySelector("#numBrackets").checked,
    'numParentheses': document.querySelector("#numParentheses").checked,
    'allParentheses': document.querySelector("#allParentheses").checked,
    'apa': document.querySelector("#apa").checked,
    'mla': document.querySelector("#mla").checked
  });
//  console.log(strict.toggle);

}
function restoreOptions() {
  async function setCurrentChoice(result) {
    result = await browser.storage.local.get();
    console.log(result);
    document.querySelector("#strict").checked = result.strict || false;
    document.querySelector("#toggle").checked = result.toggle || true;
    document.querySelector("#numBrackets").checked = result.numBrackets || true;
    document.querySelector("#numParentheses").checked = result.numParentheses || false;
    document.querySelector("#allParentheses").checked = result.allParentheses || false;
    document.querySelector("#apa").checked = result.apa || false;
    document.querySelector("#mla").checked = result.mla || false;

  //  console.log(result.toggle);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get("toggle");
  getting.then(setCurrentChoice, onError);
}
function resetToDefaults() {
  browser.storage.local.set({
    'strict': false,
    'toggle': true,
    'numBrackets': true,
    'numParentheses': false,
    'allParentheses': false,
    'apa': false,
    'mla': false
  });
  document.querySelector("#strict").checked = false;
  document.querySelector("#toggle").checked = true;
  document.querySelector("#numBrackets").checked = true;
  document.querySelector("#numParentheses").checked = false;
  document.querySelector("#allParentheses").checked = false;
  document.querySelector("#apa").checked = false;
  document.querySelector("#mla").checked = false;

 // console.log("reset");
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.getElementById("resetDefaults").addEventListener('click', resetToDefaults);