const toastLogHolder = document.getElementById("toast-log-holder");
var originallog = console.log;
var originalerror = console.error;
var originalwarn = console.warn;
/** listener for logs, errors and warnings*/
(function () {
  console.log = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div class="row justify-content-end"> <div class="col-md-auto align-self-end" id="toast-log-holder"> <p class="console-log-toast">' +
        txt +
        "</p> </div> </div>"
    );
    originallog.apply(console, arguments);
  };

  console.error = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="row justify-content-end"><div class="col-md-auto align-self-end" id="toast-log-holder"><p class="console-log-toast error">' +
        txt +
        "</p> </div> </div>"
    );
    originalerror.apply(console, arguments);
  };

  console.warn = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="row justify-content-end"><div class="col-md-auto align-self-end" id="toast-log-holder"><p class="console-log-toast warn">' +
        txt +
        "</p> </div> </div>"
    );

    originalwarn.apply(console, arguments);
  };
})(this);

console.error("Failed to load resource: net::ERR_BLOCKED_BY_CLIENT");
console.error("Failed to load resource: net::ERR_BLOCKED_BY_CLIENT");
console.error("Failed to load resource: net::ERR_BLOCKED_BY_CLIENT");

console.log("Default Console Log!");
console.log("Default Console Log!");

console.warn("Warning Log!");
console.warn("Warning Log!");
