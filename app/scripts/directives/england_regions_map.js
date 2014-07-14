'use strict';

app.directive('englandRegionsMap', function(slugifyNameService) {
  return {
    restrict: 'E',
    //template: '<div class="map"></div>',
    scope: {
      thematicData: '@',
      geomData: '=',
      type: '@'
    },
    link: function(scope, element, attr) {

      //console.log(JSON.parse(scope.thematicData));

      var el = element[0],
          width = 165,
          height = 187,
          thematicData = JSON.parse(scope.thematicData),
          numericData = d3.values(thematicData).filter(function(el){
            return typeof el === "number" ? el : void 0;
          });

      var scale = d3.scale.quantize()
        .domain( [d3.min(numericData), d3.max(numericData)] )
        .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));
      
      var svg = d3.select(el).append('svg')
          .attr('width', width)
          .attr('height', height);
      
      function slugifyName(name){
        return slugifyNameService.slugify(name.replace(' Euro Region', ''));
      }

      var regions = topojson.feature(
        scope.geomData, scope.geomData.objects.european_region_england_wgs84);
    
      var projection = d3.geo.albers()
        .center([0, 53])
        .rotate([2.4, 0])
        .parallels([50, 55])
        .scale(1750)
        .translate([width / 2, height / 2]);
    
      var path = d3.geo.path()
        .projection(projection);
    
      svg.selectAll('.region-' + scope.index)
        .data(regions.features)
      .enter().insert('path')
        //.attr('class', 'region-' + scope.index)
        //.attr('class', function(d) { 
        //  return 'region ' + slugifyName(d.properties.NAME); })
        .attr("class", function(d) { 
          return "q " + scale(thematicData[slugifyName(d.properties.NAME)]); })
        .attr('d', path);

        //.style("fill", function(d){
        //  return d3.hsl(200, scale(thematicData[slugifyName(d.properties.NAME)]), 
        //    .3).toString();
        //});

    }
  };
  });