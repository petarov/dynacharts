/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

module.exports = function(app) {

  /**
   * GET / HTTP 1.1
   */
  app.get('/', function(req, res) {
    res.json({
      "charts_url": "http://localhost:300/charts"
    });
  });

};
