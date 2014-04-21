/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

var jsdom = require('jsdom')
  // html file skull with a container div for the d3 dataviz
  , htmlStub = '<html><head></head><body><div id="dataviz-container"></div></body></html>';

module.exports = function(app) {

  var Chart = require(app.get('models') + '/chart');

  /**
   * GET /charts HTTP/1.1
   * Accept: application/json
   *
   * Get a list of available resources
   */
  app.get('/charts', function(req, res) {
    res.json({
      "test_url": "http://localhost:300/charts/test"
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
    console.log('POST');
    res.json({
      "test_url": "http://localhost:300/charts/test"
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

  /**********************************************
   * TESTING
   */

  /**
   * GET /charts/test HTTP 1.1
   */
  app.get('/charts/test', function(req, res) {
    // pass the html stub to jsDom
    jsdom.env({ features: { QuerySelector: true }, html: htmlStub, done: function(err, window) {
      // process the html document, like if we were at client side

      // var nv = require('./nvd3.master/nv.d3.js')(window);
      var el = window.document.querySelector('#dataviz-container');
      var body = window.document.querySelector('body');

      Chart.createSVG(el);
      var svgsrc = window.document.innerHTML;
      res.send(svgsrc);
    }});

  });

  /**
   * GET /charts/test2 HTTP 1.1
   */
  app.get('/charts/test2', function(req, res) {
    res.render('nv_chart', {
      title: 'Generator-Express MVC',
      body: ""
      });
  });

};
