/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */

var path = require('path')
  , _ = require('underscore')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development';

// common configurations
var cfgBase = {
  root: rootPath,
  port: 3000
};

var config = {
  development: {},
  test: {},
  production: {}
};

/**
 * Development deployment
 */
_.extend(config['development'], _.clone(cfgBase), {
    app: {
      name: 'dc.server-dev'
    },
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-development'
});
/**
 * Test deployment
 */
_.extend(config['test'], _.clone(cfgBase), {
    app: {
      name: 'dc.server-test'
    },
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-test'
});
/**
 * Production deployment
 */
_.extend(config['production'], _.clone(cfgBase), {
    app: {
      name: 'dc.server'
    },
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-production'
});

module.exports = config[env];
