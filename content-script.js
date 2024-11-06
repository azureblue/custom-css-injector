(async () => {
    const styleElementId = '__custom-css-injector';  
    const hostname = window.location.hostname;
    const entry = await chrome.storage.sync.get(hostname);
    
    let css = (entry[hostname] || "").trim();
    if (css.length == 0) 
      return;

    let style = document.getElementById(styleElementId);

    if (style == undefined) {
      style = document.createElement('style');
      style.id = styleElementId;
      document.head.appendChild(style);
    }

    style.replaceChildren(document.createTextNode(css));
})();
