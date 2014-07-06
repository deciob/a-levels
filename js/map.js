'use strict';

var width = 660,
    height = 750;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

function slugifyName(name){
  return name.replace(' Euro Region', '').replace(/ /g, '_').toLowerCase();
}

d3.json("data/regions_england_wgs84.topo.json", function(error, en) {
  if (error) return console.error(error);
  var regions = topojson.feature(en, en.objects.european_region_england_wgs84);

  var projection = d3.geo.albers()
    .center([0, 53])
    .rotate([2.4, 0])
    .parallels([50, 55])
    .scale(7000)
    .translate([width / 2, height / 2]);

  var path = d3.geo.path()
    .projection(projection);

  svg.selectAll(".region")
    .data(regions.features)
  .enter().append("path")
    .attr("class", function(d) { 
      return "region " + slugifyName(d.properties.NAME); })
    .attr("d", path);


});