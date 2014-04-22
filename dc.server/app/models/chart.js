/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

module.exports = function(config) {

  var ChartGen = require(config.src + '/gen/chartsGen')(config);

  return {
    /**
     * Create new chart
     */
    create: function(spec, options, callback) {
      callback = callback ? callback : options;

      //TODO: check permissions
      //TODO: validate spec

      ChartGen.newPieChart(spec, function(err, svgData) {
        callback()


      });

    },

    get: function(id, callback) {

    }

  }
};


