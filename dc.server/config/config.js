/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var path = require('path')
  , _ = require('underscore')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development';

/**
 * Common
 */
var cfgBase = {
  root: rootPath,
  port: 3000,

  db: {
      // Redis
      redis_host: process.env.REDIS_HOST || '127.0.0.1',
      redis_port: process.env.REDIS_PORT || '6379',
      redis_secret: process.env.REDIS_PASSWORD || null

      // Postgres (TODO)
  },
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
