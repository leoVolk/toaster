//inject toast.html
fetch(chrome.runtime.getURL("/src/toast.html"))
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
    addLocalScript("/src/console-listener.js");
  })
  .catch((err) => {
    // handle error
    console.log(err);
  });

/**
 * create a script in head from local js files
 * @param {*} src
 */
function addLocalScript(src) {
  const script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("src", chrome.extension.getURL(src));
  const head =
    document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
  head.insertBefore(script, head.lastChild);
}
