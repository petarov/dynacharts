/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var log = require('../utils/logger')
  , Chart = require('../models/chart');

/**
 * Exports
 */

module.exports = function(app, config) {

  var chartModel = Chart(app);

  /**
   * GET /charts HTTP/1.1
   * Accept: application/json
   *
   * Get a list of available resources
   */
  app.get('/charts', function(req, res) {
    res.json({
      "charts_url": config.url + '/charts',
      "chart_url": config.url + '/charts/{id}'
    });
  });

  /**
   * POST /charts HTTP/1.1
   * Accept: application/json
   * Content-Type: application/json
   *
   * Create a new chart
   * @param json
   */
  app.post('/charts', function(req, res) {
    if (!validateRequest(req, res))
      return;

    chartModel.create(req.body, {png: false}, function(err, chart) {
      if (err) {
        sendSrvError(res, err);
        return;
      }
      res.json(chart);
    });
  });

  /**
   * GET /charts/{id} HTTP/1.1
   * Accept: application/json
   *
   * Get properties for given chart Id
   * @param chartId
   */
  app.get('/charts/:id', function(req, res) {
    chartModel.get(req.params.id, function(err, chart) {
      if (err) {
        sendSrvError(res, err);
        return;
      }
      res.json(chart);
    });
  });

  /**
   * PATCH /charts/{id} HTTP/1.1
   * Accept: application/json
   * Content-Type: application/json
   *
   * Update properties for given chart Id
   * @param chartId
   * @param json
   */
  app.patch('/charts/:id', function(req, res) {
    if (!validateRequest(req, res))
      return;

    chartModel.update(req.params.id, req.body, function(err, chart) {
      if (err) {
        sendSrvError(res, err);
        return;
      }
      res.json(chart);
    });
  });

  /**
   * DELETE /charts/{id} HTTP/1.1
   * Accept: application/json
   *
   * Remove chart from database
   * @param chartId
   */
  app.del('/charts/:id', function(req, res) {
    chartModel.del(req.params.id, function(err, chart) {
      if (err) {
        sendSrvError(res, err);
        return;
      }
      res.json(chart);
    });
  });

  /**
   * POST /charts/{id} HTTP/1.1
   * Accept: application/json
   * Content-Type: text/plain
   *
   * Update chart data
   * @param json
   */
  // app.post('/charts/:id', function(req, res) {
  //   if (!validateRequest(req, res))
  //     return;

  //   chartModel.data(req.params.id, function(err, chart) {
  //     if (err) {
  //       sendSrvError(res, err);
  //       return;
  //     }
  //     res.json(chart);
  //   });
  // });

  /**************************************************************************
   * TESTING
   */

  /**
   * GET /charts/test HTTP 1.1
   */
  app.get('/tests/test', function(req, res) {
    chartModel.create(req.body, {png: false}, function(err, chart) {
      res.send(chart.data);
    });
  });

  /**
   * GET /charts/test HTTP 1.1
   */
  app.get('/tests/test2', function(req, res) {
    chartModel.create(null, {png: true}, function(err, chart) {
      res.set('Content-Type', 'image/png');
      res.send(chart);

    });
  });

  // app.get('/tests/test3', function(req, res) {
  //   // html file skull with a container div for the d3 dataviz
  //   var htmlStub = '<html><head></head><body><svg id="dataviz-container"></svg></body></html>';

  //   // pass the html stub to jsDom
  //   jsdom.env({ features: { QuerySelector: true }, html: htmlStub, done: function(err, window) {
  //     // process the html document, like if we were at client side

  //     // var nv = require('./nvd3.master/nv.d3.js')(window);
  //     require(config.root + '/nvd3.master/nv.d3.node.js')(window);
  //     var nv = window.nv;
  //     var el = window.document.querySelector('#dataviz-container');
  //     var body = window.document.querySelector('body');

  //     Chart.createJS(nv, el);
  //     var svgsrc = window.document.innerHTML;
  //     res.send(svgsrc);
  //   }});

  // });

  /**
   * GET /charts/test2 HTTP 1.1
   */
  app.get('/tests/test3', function(req, res) {
    res.render('nv_chart', {
      title: 'Generator-Express MVC',
      body: "<h1>Test</h1>"
      });
  });

};

/**
 * Module
 */

function validateRequest(req, res) {
  if (!req.is('application/json')) {
    res.status(406).send(newError(406, '406 Not Acceptable'));
    return false;
  }
  return true;
}

function newError(code, msg) {
  var date = new Date();
  return {
    "status": code,
    "msg": msg,
    "datetime": date.toISOString()
  };
}

function sendSrvError(res, msg) {
  res.status(500).send(newError(500, msg));
}
