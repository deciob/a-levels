'use strict';

app.directive('englandRegionsMap', function() {
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

        scope.mapData.then(function(res){
          var regions = topojson.feature(res.data, res.data.objects.european_region_england_wgs84);
        
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