// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     (async() => {
//       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });      
//       const hostname = new URL(sender.url).hostname;
//       const entry = await chrome.storage.sync.get(hostname);
//       if (entry[hostname] != undefined)
//         sendResponse({style: entry[hostname]});
//       else
//         sendResponse({style: undefined});
//       })();
//       return true;
//     });