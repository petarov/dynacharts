/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var path = require('path');

/**
 * Exports
 */

module.exports = function(app, config) {

  var pkg = require(path.join(config.root, 'package.json'));

  /**
   * GET / HTTP/1.1
   * Accept: application/json
   *
   * Get a list of available resources
   */
  app.get('/', function(req, res) {
    res.json({
      "charts_url": config.url + "/charts"
    });
  });

  /**
   * GET /version HTTP/1.1
   * Accept: application/json
   *
   * Get server node version info
   */
  app.get('/version', function(req, res) {
    res.json({
      "name": config.app.name,
      "version": pkg.version
    });
  });

};
