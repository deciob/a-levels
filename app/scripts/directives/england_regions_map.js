'use strict';

app.directive('englandRegionsMap', function(parseCsvData) {
  return {
    restrict: 'E',
    template: '<div class="map">My map</div>',
    link: function(scope, element) {

      var el = element[0],
          width = 660,
          height = 750;
      
      var svg = d3.select(el).append('svg')
          .attr('width', width)
          .attr('height', height);
      
      function slugifyName(name){
        return name.replace(' Euro Region', '').replace(/ /g, '_').toLowerCase();
      }

      scope.allData.then(function(res){

        var a_level_data = parseCsvData.parse(res[1].data, function(d) {
          return {
            east: +d['East'],
            east_midlands: +d['East Midlands'],
            london: +d['London'],
            north_east: +d['North East'],
            north_west: +d['North West'],
            south_east: +d['South East'],
            south_west: +d['South West'],
            west_midlands: +d['West Midlands'],
            yorkshire_and_the_humber: +d['Yorkshire And The Humber'],
            title: d['title']
          };
        });


        var regions = topojson.feature(
          res[0].data, res[0].data.objects.european_region_england_wgs84);
      
        var projection = d3.geo.albers()
          .center([0, 53])
          .rotate([2.4, 0])
          .parallels([50, 55])
          .scale(7000)
          .translate([width / 2, height / 2]);
      
        var path = d3.geo.path()
          .projection(projection);
      
        svg.selectAll('.region')
          .data(regions.features)
        .enter().append('path')
          .attr('class', function(d) { 
            return 'region ' + slugifyName(d.properties.NAME); })
          .attr('d', path);

      }, function(error){return console.error(error);});
    }
  };
  });