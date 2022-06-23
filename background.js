let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

// Called when the user clicks on the action.
chrome.action.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  alert("I hope you saved your work :)");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    code: 'document.body.innerHTML = ""',
  });
});
