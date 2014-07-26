'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aLevelsApp
 */

(function () {

  function MainCtrl($q, $scope, MapDataService, ALevelDataService, ParseCsvDataService, SlugifyNameService) {
    // my model
    var data = $scope.data = {};

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
      $scope.data.geom = res[0].data;
      $scope.data.thematic = _.groupBy(rawCsvData, function(o) {
        return o.slug;
      });
      $scope.thematic_length = rawCsvData.length;

    }, function(error){return console.error(error);});
  }

  angular.module('aLevelsApp')
    .controller('MainCtrl', MainCtrl);

})();