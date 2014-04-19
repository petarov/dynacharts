/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

"use strict";

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , config = require('./config/config');

var app = express();

require('./config/express')(app, config);

app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 * Find and register controllers
 */
var controllersPath = __dirname + '/app/controllers';
fs.readdirSync(controllersPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(controllersPath + '/' + file)(app);
  }
});

/**
 * Start server
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log("Dynacharts backend server listening on port " + app.get('port'));
});
