var bod = document.getElementsByTagName('head')[0];
var css = chrome.runtime.getURL("styles.css");

// afterbegin beforeend

bod.insertAdjacentHTML('beforeend', `
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
.v-application .title {
    font-family: 'JetBrains Mono', monospace !important;
    font-weight: 200;
}

.v-application {
    font-family: Manrope, sans-serif;
    font-weight: 400;
}

.v-application .primary {
    border-width: 2px;
    border-radius: 15px;
    background-color: rgba(66, 255, 145, 0.52) !important;
    border-color: #93ecb2 !important;
}

.v-application .error {
    border-width: 2px;
    border-radius: 15px;
    background-color: rgba(255, 66, 66, 0.52) !important;
    border-color: #ec9393 !important;
}

.v-btn {
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    border-style: solid;
    border-radius: 15px;
    color: #fff;
    border-color: transparent !important;
    font-weight: 600;
}

.v-chip {
    background: rgba(255, 255, 255, 0.1) !important;
}

.v-textarea.v-text-field--enclosed .v-text-field__slot {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 200;
}

.da-locked-overlay {
    background-color: rgba(30, 30, 30, 0.50);
}

.da-active-icon {
    outline: transparent !important;
}

.v-pagination__item {
    border-radius: 3px !important;
}

.v-item-group {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 200;
}

.v-slide-group__content {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
}

.jwplayer.jw-flag-aspect-mode {
    height: 0 !important;
}

.v-application .primary--text {
    color: #4ab577 !important;
    caret-color: #4ab577 !important;
}

.v-input--selection-controls__input .v-icon {
    color:  rgba(255, 255, 255, 0.30);
    caret-color:  rgba(255, 255, 255, 0.30);
}

.v-sheet.v-card:not(.v-sheet--outlined) {
    border-radius: 8px !important;
    background-color: #1B1B1B;
}

.v-application--is-ltr .v-expansion-panel-header {
    font-family: Manrope, sans-serif !important;
    font-weight: 400;
    font-size: 16px;
}

.v-expansion-panel-content__wrap {
    font-size: 14px;
    font-family: Manrope, sans-serif !important;
    font-weight: 400;
}

.v-main {
    background-color: #161616;
}

.theme--dark.v-navigation-drawer {
    background-color: #1B1B1B !important;
}

.handle-container {
    background-color: transparent;
}

.ot-sdk-show-settings {
    color: #4ab577 !important;
}

.v-footer .footer-content .nav-panel-col .footer-link[data-v-8ce1904a] {
    color: #4ab577 !important;
}

.v-application .ml-2 {
    color: #4ab577 !important;
}

a:link
{
    color: #4ab577;
}
</style>
    `);