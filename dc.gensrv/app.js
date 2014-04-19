/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

"use strict";

var express = require('express')
    , routes = require('./routes')
    , chart = require('./routes/chart')
    , http = require('http')
    , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/charts/test', chart.test);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Dynacharts gen server listening on port " + app.get('port'));
});
