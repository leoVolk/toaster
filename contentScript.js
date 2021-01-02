document.documentElement.insertAdjacentHTML(
  "beforeend",
  `<div class="toast-holder">
    <div id="toast-window" class="">
        <div class="toast-container ignore-pointer" id="toast-log-holder"> </div>
    </div>
  </div>
  `
);

/**
 * create a script in head from local js files
 * @param {*} src
 */
function addScript(src, local) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = local ? chrome.extension.getURL(src) : src;
  document.documentElement.appendChild(script);
}
addScript("/src/console-listener.js", true);
