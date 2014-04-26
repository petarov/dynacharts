/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

var Log = require('../utils/logger')
 , log = null
 , d3 = require('d3')
 , jsdom = require('jsdom')
 , Canvas = require('canvas')
 , Image = Canvas.Image
 , XMLSerializer = require('xmldom').XMLSerializer;

/**
 * Exports
 */

module.exports = function(config) {

  log = Log(config);

  return {

    /**
     * Create new pie chart
     * @param  {Object} spec Validated chart specification object
     */
    newPieChart: function(spec, cb) {
      createDOM(function(err, window, renderTo) {

        // error handler
        if (err) {
          cb(err);
          return;
        }

        createPieChart(spec, renderTo);
        var svgData = renderTo.innerHTML;
        cb(null, svgData);
      });
    }

  };
};

/**
 * Module
 */

function createDOM(cb) {

  var htmlStub = '<html><head></head><body><div id="container"></div></body></html>';

  // process the html document, like if we were at client side
  jsdom.env({features: {QuerySelector: false}, html: htmlStub, done: function(err, window) {

    // error handler
    if (err) {
      cb(err);
      return;
    }

    // var el = window.document.querySelector('#container');
    var el = window.document.body.lastChild;

    cb(null, window, el);
  }});
}

function convertSVG2PNG(svgData, w, h, cb) {
  // https://developer.mozilla.org/en/XMLSerializer
  // var svg_xml = new XMLSerializer().serializeToString(svgData);
  // console.log(svg_xml)

  //Need to deal with weird serializations problem in webkit
  // if($.browser.webkit) {
  //     //WebKit
  //     svg_xml = svg_xml.replace(/ xlink/g, ' xmlns:xlink')
  //     svg_xml = svg_xml.replace(/ href/g, ' xlink:href')
  // }

  var canvas = new Canvas(w, h)
    , ctx = canvas.getContext('2d')
    , img = new Image
    , data = new Buffer(svgData).toString('base64');

  img.onload = function() {
      ctx.drawImage(img, 0, 0);
      cb(null, canvas.toBuffer());
  };
  img.onerror = function(err){
    cb(err, null);
  };
  img.src = "data:image/svg+xml;base64," + data;
}

function createPieChart(spec, renderTo) {
  var data = spec.data.payload;

  var width = spec.size.width
  , height = spec.size.height
  , radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
  .range(spec.styles.colors);

  var arc = d3.svg.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

  var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) { return d.population; });

  var svg = d3.select(renderTo).append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  data.forEach(function(d) {
    d.population = +d.population;
  });

  var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");

  g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.age); });

  g.append("text")
  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  .attr("dy", ".35em")
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.age; });
}

function createJS(nv, el) {

  var testdata = [
  {
    key: "One",
    y: 5
  },
  {
    key: "Two",
    y: 2
  },
  {
    key: "Three",
    y: 9
  },
  {
    key: "Four",
    y: 7
  },
  {
    key: "Five",
    y: 4
  },
  {
    key: "Six",
    y: 3
  },
  {
    key: "Seven",
    y: .5
  }
  ];

  nv.addGraph(function() {
    var width = 500
    , height = 500;

    var chart = nv.models.pieChart()
    .x(function(d) { return d.key })
    .y(function(d) { return d.y })
    .color(d3.scale.category10().range())
    .width(width)
    .height(height);

    d3.select(el)
    .datum(testdata)
    .transition().duration(1200)
    .attr('width', width)
    .attr('height', height)
    .call(chart);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
  });

  // nv.addGraph(function() {

  //   var width = 500
  //     , height = 500;

  //   var chart = nv.models.pieChart()
  //   .x(function(d) { return d.key })
  //   //.y(function(d) { return d.value })
  //   //.labelThreshold(.08)
  //   //.showLabels(false)
  //   .color(d3.scale.category10().range())
  //   .width(width)
  //   .height(height)
  //   .donut(true);

  //   chart.pie
  //   .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
  //   .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

  //   //chart.pie.donutLabelsOutside(true).donut(true);

  //   d3.select(el)
  //   //.datum(historicalBarChart)
  //   .datum(testdata)
  //   .transition().duration(1200)
  //   .attr('width', width)
  //   .attr('height', height)
  //   .call(chart);

  //   return chart;
  // });
}
