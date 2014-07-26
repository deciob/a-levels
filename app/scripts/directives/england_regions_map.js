'use strict';

(function () {

  function englandRegionsMap(SlugifyNameService) {
    return {
      restrict: 'E',
      scope: {
        thematicData: '@',
        geomData: '=',
        index: '@',
        type: '@'
      },
      link: function(scope, element, attr) {

        //console.log(JSON.parse(scope.thematicData));

        var el = element[0],
            flex_width = element.parent().parent()[0].clientWidth,
            flex_elements = 4,
            factors = [.25, .5, .75, 1],
            width = flex_width / flex_elements,
            height = width*1.2,
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
          return SlugifyNameService.slugify(name.replace(' Euro Region', ''));
        }

        var regions = topojson.feature(
          scope.geomData, scope.geomData.objects.european_region_england_wgs84);

        var projection = d3.geo.albers()
          .center([0, 53])
          .rotate([2.4, 0])
          .parallels([50, 55])
          .scale(width*10)
          .translate([width / 2, height / 2]);

        var path = d3.geo.path()
          .projection(projection);

        svg.selectAll('.region-' + scope.index)
          .data(regions.features)
        .enter().insert('path')
          .attr("class", function(d) {
            return "q " + scale(thematicData[slugifyName(d.properties.NAME)]); })
          .attr('d', path);

        scope.$watch(function() {
          //console.log('xx', el.clientWidth);
        }, function() {

        });

      }
    };
  }

  angular
    .module('aLevelsApp')
    .directive('englandRegionsMap', englandRegionsMap);

})();