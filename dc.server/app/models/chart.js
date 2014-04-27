/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var uuid = require('node-uuid')
  , tv4 = require('tv4')
  , Log = require('../utils/logger')
  , ChartsGen = require('../gen/chartsGen')
  , Cache = require('../db/cache')
  , Storage = require('../db/storage');

/**
 * Exports
 */

module.exports = function(config) {

  var log = Log(config)
    , chartsGenerator = ChartsGen(config)
    , cache = new Cache(config)
    , storage = new Storage(config);

  tv4.addSchema(DataSchema);
  tv4.addSchema(SizeSchema);
  tv4.addSchema(StylesSchema);

  // TODO: Move this to bootstrap
  cache.connect(function(err) {
    if (err) {
      log.error('Failed to connect to cache server! ' + err);
    } else {
      log.verbose('Connected to cache server.');
    }
  });

  storage.connect();

  /////////////////

  return {

    create: function(spec, options, callback) {
      callback = callback ? callback : options;

      //TODO: check permissions

      // validate spec
      var result = tv4.validateResult(spec, ChartSchema);
      if (!result.valid) {
        callback(result.error.message);
        return;
      }

      chartsGenerator.newPieChart(spec, function(err, svg) {
        // error handler
        if (err) {
          cb(err);
          return;
        }

        var chart = {
          id: uuid.v4(),
          data: svg
        };

        log.verbose('Generated new chart with id=' + chart.id);

        //TODO: save to db
        cache.put(chart.id, chart);

        callback(err, chart);
      });
    },

    get: function(id, callback) {
      //TODO: check permissions
    },

    update: function(id, spec, callback) {
      //TODO: check permissions
      //TODO: validate spec
      //      determine what is being updated/patched
    },

    del: function(id, callback) {
      //TODO: check permissions
    }

  }
};

/**
 * Module
 */

var DataSchema = {
  "id": "/ChartDataSchema",
  "type": "object",
  "properties": {
    "type": {"type": "string"},
    "payload": {
      "type": "array",
      "items": {"type": "object"}
    }
  },
  "required": ["type", "payload"]
};

var SizeSchema = {
  "id": "/ChartSizeSchema",
  "type": "object",
  "properties": {
    "width": {"type": "integer"},
    "height": {"type": "integer"}
  },
  "required": ["width", "height"]
};

var StylesSchema = {
  "id": "/ChartStylesSchema",
  "type": "object",
  "properties": {
    "colors": {"type": "array", "items": {"type": "string"}}
  },
  "required": ["colors"]
};

var ChartSchema = {
  "id": "/ChartSchema",
  "type": "object",
  "properties": {
    "id": {"type": "string"},
    "data": {"$ref": "/ChartDataSchema"},
    "size": {"$ref": "/ChartSizeSchema"},
    "styles": {"$ref": "/ChartStylesSchema"}
  },
  "required": ["data", "size"]
};
