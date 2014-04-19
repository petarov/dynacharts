/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */

 var d3 = require('d3');

 module.exports = function() {
  //TODO
 };

 module.exports.createJS = function(nv, el) {

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

  nv.addGraph(function() {

    var width = 500
      , height = 500;

    var chart = nv.models.pieChart()
    .x(function(d) { return d.key })
    //.y(function(d) { return d.value })
    //.labelThreshold(.08)
    //.showLabels(false)
    .color(d3.scale.category10().range())
    .width(width)
    .height(height)
    .donut(true);

    chart.pie
    .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
    .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

    //chart.pie.donutLabelsOutside(true).donut(true);

    d3.select("#test2")
    //.datum(historicalBarChart)
    .datum(testdata)
    .transition().duration(1200)
    .attr('width', width)
    .attr('height', height)
    .call(chart);

    return chart;
  });
};

module.exports.createSVG = function(el) {

  var data = [
    {age: '<5', population: 2704659},
    {age: '5-13', population: 4499890},
    {age: '14-17', population: 2159981},
    {age: '18-24', population: 3853788},
    {age: '25-44', population: 14106543},
    {age: '45-64', population: 8819342},
    {age: '≥65', population: 612463}
  ];

  var width = 960
    , height = 500
    , radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var arc = d3.svg.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

  var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) { return d.population; });

  var svg = d3.select(el).append("svg")
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

};
