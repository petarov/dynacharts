/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var uuid = require('node-uuid')
  , ChartsGen = require('../gen/chartsGen');

module.exports = function(config) {

  var chartsGenerator = ChartsGen(config);

  return {

    create: function(spec, options, callback) {
      callback = callback ? callback : options;

      //TODO: check permissions
      //TODO: validate spec

      chartsGenerator.newPieChart(spec, function(err, svg) {
        // error handler
        if (err) {
          cb(err);
          return;
        }

        var chart = {
          id: uuid.v4(),
          data: svgData
        };

        callback(err, chart);
      });
    },

    get: function(id, callback) {
      //TODO: check permissions
    },

    update: function(id, spec, callback) {
      //TODO: check permissions
      //TODO: validate spec
    },

    del: function(id, callback) {
      //TODO: check permissions
    }

  }
};


