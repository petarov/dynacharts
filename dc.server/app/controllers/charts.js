/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var Log = require('../utils/logger');
var Chart = require('../models/chart');

module.exports = function(app, config) {

  var log = Log(config);
  var chartModel = Chart(config);

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
    log.verbose('POST');

    if (!validateRequest(req, res))
      return;

    chartModel.create(req.body, {png: false}, function(err, chart) {

      res.json({
        "svg": chart
      });

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
    console.log('GET ' + req.params.id);
    res.json({
      "test_url": "http://localhost:300/charts/test"
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
    console.log('PATCH ' + req.params.id);
    res.json({
      "test_url": "http://localhost:300/charts/test"
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
    console.log('DELETE ' + req.params.id);
    res.json({
      "test_url": "http://localhost:300/charts/test"
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
  app.post('/charts/:id', function(req, res) {
    console.log('POST ' + req.params.id);
    res.json({
      "test_url": "http://localhost:300/charts/test"
    });
  });

  /**************************************************************************
   * TESTING
   */

  /**
   * GET /charts/test HTTP 1.1
   */
  app.get('/tests/test', function(req, res) {
    chartModel.create(null, function(err, chart) {

      res.send(chart);

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
