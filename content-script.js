var bod = document.getElementsByTagName('head')[0];
var css = chrome.runtime.getURL("styles.css");

// afterbegin beforeend

bod.insertAdjacentHTML('beforeend', `
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href=chrome.runtime.getURL("styles.css") rel="stylesheet">
    `);
