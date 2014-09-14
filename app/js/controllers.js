'use strict';

/* Controllers */

(function () {

  function MainCtrl($q, $scope, $window, MapDataService, ALevelDataService, ParseCsvDataService, SlugifyNameService, ALevelDataFactory, UkGeomFactory) {
    // my model
    var data = $scope.data = {};

    angular.element($window).on('resize', function(){ $scope.$apply() });

    $q.all([
      MapDataService.getData(),
      ALevelDataService.getData()
    ]).then(function(res){
      var rawCsvData = ParseCsvDataService.parse(res[1].data, function(d) {
        return {
          eastern: +d['East'],
          east_midlands: +d['East Midlands'],
          london: +d['London'],
          north_east: +d['North East'],
          north_west: +d['North West'],
          south_east: +d['South East'],
          south_west: +d['South West'],
          west_midlands: +d['West Midlands'],
          yorkshire_and_the_humber: +d['Yorkshire and the Humber'],
          type: d['type'],
          title: d['title'],
          slug: SlugifyNameService.slugify(d['title'])
        };
      });
      UkGeomFactory.addAll(res[0].data);
      $scope.data.geom = UkGeomFactory.data;
      ALevelDataFactory.addAll(rawCsvData);
      $scope.data.thematic = ALevelDataFactory.data;
      $scope.thematic_length = rawCsvData.length;

    }, function(error){return console.error(error);});
  }

  angular.module('aLevelsApp')
    .controller('MainCtrl', MainCtrl);

})();
