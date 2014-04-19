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
   * GET /charts/api HTTP 1.1
   */
  app.get('/charts', function(req, res) {
    res.json({
      "test_url": "http://localhost:300/charts/test"
    });
  });

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
