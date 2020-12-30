document.documentElement.insertAdjacentHTML(
  "beforeend",
  `<div id="toast-window" class="">
      <div class="toast-container ignore-pointer" id="toast-log-holder"> </div>
  </div>
  `
);

/**
 * create a script in head from local js files
 * @param {*} src
 */
function addLocalScript(src) {
  const script = document.createElement("script");
  script.src = chrome.extension.getURL(src);
  document.documentElement.appendChild(script);
}

addLocalScript("/src/console-listener.js");
