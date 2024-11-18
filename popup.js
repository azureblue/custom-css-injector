/** @type {HTMLTextAreaElement} */
let textArea = document.getElementById("style-text");
/** @type {HTMLLabelElement} */
let label = document.getElementById("style-label");
let saveButton = document.getElementById("save");

(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const hostname = new URL(tab.url).hostname;  
  const entry = await chrome.storage.sync.get(hostname);
  textArea.value = entry[hostname] || "";
  label.textContent = `Custom CSS for ${hostname}:`
})();

saveButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const hostname = new URL(tab.url).hostname;    
  chrome.storage.sync.set({[hostname] : textArea.value.trim()});
});
