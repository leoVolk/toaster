const toastLogHolder = document.getElementById("toast-log-holder");

var logMessages = [];

/** listener for logs, errors and warnings*/
(function () {
  var originallog = console.log;
  var originalerror = console.error;
  var originalwarn = console.warn;
  console.log = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="toast-row "><div class="toast-col" id="toast-log-holder"> <p class="console-log-toast">' +
        txt +
        "</p> </div> </div>"
    );
    originallog.apply(console, arguments);
  };

  console.error = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="toast-row"><div class="toast-col" id="toast-log-holder"> <p class="console-log-toast error">' +
        txt +
        "</p> </div> </div>"
    );
    originalerror.apply(console, arguments);
  };

  console.warn = function (txt) {
    // Do really interesting stuff
    toastLogHolder.insertAdjacentHTML(
      "afterbegin",
      '<div  class="toast-row "><div class="toast-col" id="toast-log-holder"> <p class="console-log-toast warn">' +
        txt +
        "</p> </div> </div>"
    );

    originalwarn.apply(console, arguments);
  };
})(this);
