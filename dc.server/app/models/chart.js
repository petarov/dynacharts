/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var ChartsGen = require('../gen/chartsGen');

module.exports = function(config) {

  var chartsGenerator = ChartsGen(config);

  return {
    /**
     * Create new chart
     */
    create: function(spec, options, callback) {
      callback = callback ? callback : options;

      //TODO: check permissions
      //TODO: validate spec

      chartsGenerator.newPieChart(spec, function(err, svgData) {
        callback()


      });

    },

    get: function(id, callback) {

    }

  }
};


