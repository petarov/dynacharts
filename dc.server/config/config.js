/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

var path = require('path')
    , rootPath = path.normalize(__dirname + '/..')
    , env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'dc.server-dev'
    },
    port: 3000,
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'dc.server-test'
    },
    port: 3000,
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'dc.server'
    },
    port: 3000,
    db: 'mongodb://localhost/<%= _.slugify(appname) %>-production'
  }
};

module.exports = config[env];
