goog.require('goog.ui.IdGenerator');
goog.provide('scaffold.Logger');



/**
 * A basic logging utility that protects against browsers which do not have a
 * native console.log function.
 * @constructor
 */
scaffold.Logger = function() {
  this.uuid_ = goog.ui.IdGenerator.getInstance().getNextUniqueId();
};


/**
 * Logs a message to the browsers console, if the required browser APIs exist.
 * @param  {string} message
 *         The message to log to the console.
 *
 * @param  {string} level
 *         The logging level. Just proxies to the browsers corresponding
 *         logging function. e.g. 'info', 'warn'.
 */
scaffold.Logger.prototype.log = function(message, level) {
  if (window.console && window.console.log) {
    if (window.console[level]) {
      console[level](message);
    } else if (typeof(console.log) === 'function') {
      console.log(message);
    }
  }
};
