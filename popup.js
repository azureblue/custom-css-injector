/**@type {HTMLTextAreaElement} */
let textArea = document.getElementById("style-text");
let saveButton = document.getElementById("save");

(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const hostname = new URL(tab.url).hostname;  
  const entry = await chrome.storage.sync.get(hostname);
  textArea.value = entry[hostname] || "";  
})();

saveButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const hostname = new URL(tab.url).hostname;    
  chrome.storage.sync.set({[hostname] : textArea.value.trim()});
});
