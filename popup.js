// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let changeFont = document.getElementById("changeFont");
let IncreaseFontSize = document.getElementById("increaseFontSize");
let IncreaseLineSpace = document.getElementById("increaseLineSpace");


changeFont.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageFont,
  });
});

IncreaseFontSize.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageLinespacing,
  });
});

IncreaseFontSpace.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageFontsize,
  });
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
function setPageFont(){
  chrome.storage.sync.get("font", ({ font }) => {
    document.body.style.fontFamily = font;
  });
}
function setPageLinespacing(){
  chrome.storage.sync.get("linespacing", ({ linespacing }) => {
    document.body.style.lineHeight = linespacing;
  });
}
function SetPageFontsize(){
  chrome.storage.sync.get("fontsize", ({ fontsize }) => {
    document.body.style.fontSize = fontsize;
  });
}