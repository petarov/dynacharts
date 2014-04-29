/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var PostgresDB = require('./pg');

/**
 * Exports
 */

module.exports = function(config) {

  var instance = null;

  return {

    connect: function(callback) {
      instance = new PostgresDB();
      instance.connect(config.db, callback);
    },

    close: function() {
      if (!instance) return;

      //TODO
    },

    put: function(key, value, callback) {
      if (!instance) return;

      //TODO
    },

    get: function(key, callback) {
      if (!instance) return;

      //TODO
    },

    delete: function(key, callback) {
      if (!instance) return;

      //TODO
    }

  };
};

/**
 * Module
 */

