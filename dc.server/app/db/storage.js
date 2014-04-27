/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var PostgresDB = require('pg');

/**
 * Exports
 */

module.exports = function(config) {

  var instance = null;

  return {

    connect: function(type) {
      type = type || 'postgres';

      if (type === 'postgres') {
        instance = new PostgresDB();
      }

      throw 'Unsupported db type ' + options.type;
    },

    close: function() {
      if (!instance) return;

      //TODO
    },

    put: function(key, value) {
      if (!instance) return;

      //TODO
    },

    get: function(key) {
      if (!instance) return;

      //TODO
    },

    delete: function(key) {
      if (!instance) return;

      //TODO
    }

  };
};

/**
 * Module
 */

