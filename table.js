

// hook to make it work in firefox and chrome
if(!chrome) { 
    let chrome = browser;
}

// script after table so it's run after loading
document.body.style.backgroundColor = "red";


// define functions first, so we can use them later
let fun = {
  "increaseFontSize": () => {console.log(2); document.body.style.fontSize = "300%"},
  "decreaseFontSize": () => {console.log(3); document.body.style.fontSize = "100%"},
  "increaseFontSpace": () => {console.log(4); document.body.style.lineHeight = "300%"},
  "decreaseFontSpace": () => {console.log(5); document.body.style.lineHeight = "100%"},
  "Changetextcolor_blue": () => {console.log(6); document.body.style.color = "blue"; document.head.color = "blue"},
  "Changetextcolor_red": () => {console.log(7); document.body.style.color = "red"; document.head.color = "red"},
  "changeFont_Arial": () => {console.log(7); document.body.style.fontFamily = "Arial"},
  "changeFont_Verdana": () => {console.log(8); document.body.style.fontFamily = "Verdana"},
  "changebackgroundcolor_black": () => {console.log(9); document.body.style.backgroundColor = "black"},"changebackgroundcolor_red": () => {console.log(10); document.body.style.backgroundColor = "white"}
}

for (const name of ["increaseFontSize","decreaseFontSize","increaseFontSpace","decreaseFontSpace","Changetextcolor_blue","changeFont_Arial","changeFont_Verdana","Changetextcolor_red","changebackgroundcolor_black","changebackgroundcolor_red"]) {
  elem = document.getElementById(name);
  elem.addEventListener("click", async (e) => {
    console.log(1);
    // fun[name]();
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fun[name],
    }); // end addEventListener
  }); // end addEventListener
}  // end foreach
