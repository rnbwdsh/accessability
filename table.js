// script after table so it's run after loading
document.body.style.backgroundColor = "red";

// define functions first, so we can use them later
let fun = {
  "increaseFontSize": () => {console.log(2); document.body.style.fontSize = "150%"},
  "decreaseFontSize": () => {console.log(3); document.body.style.fontSize = "50%"}
}

for (const name of ["increaseFontSize","decreaseFontSize"]) {
  elem = document.getElementById(name);
  elem.addEventListener("click", async (e) => {
    console.log(1);
    fun[name]();
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    browser.scripting.executeScript({
      target: { tabId: tab.id },
      function: fun[name],
    }); // end addEventListener
  }); // end addEventListener
}  // end foreach
