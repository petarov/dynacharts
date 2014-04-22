/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var express = require('express')
  , path = require('path');

module.exports = function(app, config) {
  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('models', path.join(config.root, '/app/models'));
    app.set('views', path.join(config.root, '/app/views'));

    app.engine('ejs', require('ejs-locals'));
    app.set('view engine', 'ejs');

    app.use(express.favicon());
    app.use(express.compress());
    app.use(express.logger('dev'));
    app.use(express.bodyParser({ strict: true }));
    app.use(express.methodOverride());
    app.use(app.router);
    // app.use(function (req, res) {
    //   res.status(404).render('404', { title: '404' });
    // });
    app.use(express.static(path.join(config.root, 'public')));
    app.use(express.static(path.join(config.root, 'nvd3.master')));

    // app.use(function(req, res, next){
    //   if (!req.is('application/json')) {
    //     res.status(406).send('406 Not Acceptable');
    //     return;
    //   }
    //   next();
    // });

  });
};
