/**@type {HTMLTextAreaElement} */
let textArea = document.getElementById("style-text");

let saveButton = document.getElementById("save");
async function load() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const hostname = new URL(tab.url).hostname;
  const entry = await chrome.storage.sync.get(hostname);
  if (entry[hostname] != undefined)
    textArea.value = entry[hostname];
}
load();

saveButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const hostname = new URL(tab.url).hostname;    
  chrome.storage.sync.set({[hostname] : textArea.value});
});
