'use strict';

(function () {

  function d3Map(SlugifyNameService) {
    return {
      restrict: 'E',
      scope: {
        thematicData: '@',
        geomData: '=',
        index: '@'
      },
      link: function(scope, element, attr) {

        //console.log(JSON.parse(scope.thematicData));

        var el = element[0],
            width = element.parent()[0].clientWidth,
            height = width*1.2,
            thematicData = JSON.parse(scope.thematicData),
            numericData = d3.values(thematicData).filter(function(el){
              return typeof el === "number" ? el : void 0;
            }),
            scale,
            svg,
            regions,
            projection,
            path;

        function slugifyName(name){
          return SlugifyNameService.slugify(name.replace(' Euro Region', ''));
        }

        scale = d3.scale.quantize()
          .domain( [d3.min(numericData), d3.max(numericData)] )
          .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

        svg = d3.select(el).append('svg')
            .attr('width', width)
            .attr('height', height);

        regions = topojson.feature(
          scope.geomData, scope.geomData.objects.european_region_england_wgs84);

        projection = d3.geo.albers()
          .center([0, 53])
          .rotate([2.4, 0])
          .parallels([50, 55])
          .scale(width*10)
          .translate([width / 2, height / 2]);

        path = d3.geo.path()
          .projection(projection);

        svg.selectAll('.region-' + scope.index)
          .data(regions.features)
        .enter().insert('path')
          .attr("class", function(d) {
            return "q " + scale(thematicData[slugifyName(d.properties.NAME)]); })
          .attr('d', path);

        scope.$watch(function() {
          console.log('xx', el.clientWidth);
        }, function() {

        });

      }
    };
  }

  angular
    .module('aLevelsApp')
    .directive('d3Map', d3Map);

})();