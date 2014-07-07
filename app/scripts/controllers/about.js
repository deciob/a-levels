'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aLevelsApp
 */

angular.module('aLevelsApp')
  .controller('AboutCtrl', function ($scope, mapDataService) {
    
    $scope.mapData = mapDataService.getMapData();
    
  });
