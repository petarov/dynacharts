/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , config = require('./config/config')
  , log = require('./app/utils/logger')
  , Cache = require('./app/db/cache')
  , Storage = require('./app/db/storage');

var app = express();

/**
 * Connect to cache server
 */
var cache = new Cache(config);
cache.connect(function(err) {
  if (err) {
    log.error('Failed to connect to cache server! ' + err);
  } else {
    log.verbose('Connected to cache server.');
  }
});
app.set('cache', cache);

/**
 * Connect to database server
 */
var storage = new Storage(config);
storage.connect(function(err) {
  // TODO
});
app.set('storage', storage);

/**
 * Find and register Models
 */
// var modelsPath = __dirname + '/app/models';
// fs.readdirSync(modelsPath).forEach(function (file) {
//   if (file.indexOf('.js') >= 0) {
//     require(modelsPath + '/' + file);
//   }
// });
//

require('./config/express')(app, config);

app.configure('development', function() {
  app.use(express.errorHandler());
});

/**
 * Find and register Controllers
 */
var controllersPath = __dirname + '/app/controllers';
fs.readdirSync(controllersPath).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(controllersPath + '/' + file)(app, config);
  }
});

/**
 * Start server
 */
http.createServer(app).listen(app.get('port'), function() {
  log.info("Dynacharts backend server listening on port " + app.get('port'));
});
