/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var log = require('npmlog');

module.exports = function(config) {
  if (config.verboseLogging) {
    log.level = 'silly';
  }
  return log;
}
