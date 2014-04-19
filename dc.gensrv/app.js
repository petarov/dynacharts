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
    app.engine('ejs', require('ejs-locals'));
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'nvd3.master')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/charts', chart.api);
app.get('/charts/test', chart.test);
app.get('/charts/test2', chart.test2);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Dynacharts gen server listening on port " + app.get('port'));
});
