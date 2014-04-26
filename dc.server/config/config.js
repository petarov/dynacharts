/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var path = require('path')
  , _ = require('underscore')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development'
  , port = process.env.NODE_PORT || 3000;

/**
 * Common
 */
var cfgBase = {

  root: rootPath,
  url: 'http://localhost:' + port,
  port: port,
  verboseLogging: true,

  db: {
    // Postgres (TODO)
  },

  cache: {

    // Redis
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT || '6379',
      secret: process.env.REDIS_PASSWORD || null,
      prefix: 'dc:'
    }
  }

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
    verboseLogging: false,
    url: 'http://example.org',
    app: {
      name: 'dc.server'
    },
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-production'
});

module.exports = config[env];
