//your JS code here. If required.

const browserInfo = document.getElementById('browser-info');
browserInfo.id = 'browser-info';

const browserName = navigator.appName
const browserVersion = navigator.Version

browserInfo.textContent = "You are using " + browserName + " version " + browserVersion;
