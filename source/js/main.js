goog.provide('scaffold');

goog.require('goog.array');
goog.require('scaffold.Logger');


/**
 * The page/applications main entry point. This is exported at the bottom of
 * this file to ensure that it can be called from a script outside the reach
 * of the Closure Compiler.
 */
scaffold.init = function() {
  var logger = new scaffold.Logger();

  goog.array.forEach(scaffold.ITEMS, function(item) {
    logger.log(item, 'info');
  });
};


/**
 * The items to log.
 * @type {Array.<string>}
 */
scaffold.ITEMS = ['one', 'two', 'three'];

goog.exportSymbol('scaffold.init', scaffold.init);
