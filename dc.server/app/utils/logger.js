/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var log = require('npmlog')
  , config = require('../../config/config');

if (config.verboseLogging) {
  log.level = 'silly';
}

module.exports = log;
