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

    return {

      open: function(type) {
        type = type || 'postgres';

        if (type === 'postgres') {
          return new PostgresDB(config);
        }

        throw 'Unsupported db type ' + options.type;
      }

    };
};

/**
 * Module
 */

