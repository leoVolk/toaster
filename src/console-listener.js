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
      '<div class="row justify-content-end"> <div class="col align-self-end" id="toast-log-holder"> <p class="console-log-toast">' +
        txt +
        "</p> </div> </div>"
    );
    originallog.apply(console, arguments);
  };

  console.error = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="row justify-content-end"><div class="col align-self-end" id="toast-log-holder"><p class="console-log-toast error">' +
        txt +
        "</p> </div> </div>"
    );
    originalerror.apply(console, arguments);
  };

  console.warn = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="row justify-content-end"><div class="col align-self-end" id="toast-log-holder"><p class="console-log-toast warn">' +
        txt +
        "</p> </div> </div>"
    );

    originalwarn.apply(console, arguments);
  };
})(this);
