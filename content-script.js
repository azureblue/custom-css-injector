(async () => {
    const hostname = window.location.hostname;
    const entry = await chrome.storage.sync.get(hostname);
    
    let css = (entry[hostname] != undefined) ? entry[hostname] : "";
    css = css.trim();
    if (css.length == 0) 
      return;

    let style = document.getElementById('__custom-css-style');
    if (style == undefined) {
      head = document.head || document.getElementsByTagName('head')[0],          
      style = document.createElement('style');
      style.id = '__custom-css-style';
      head.appendChild(style);
    }
     
    style.type = 'text/css';
    if (style.styleSheet){            
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
})();