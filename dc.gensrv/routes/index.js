/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
*/

/**
 * GET / HTTP 1.1
 */
exports.index = function(req, res){
    res.json({
        "charts_url": "http://localhost:300/charts"
    });
};
