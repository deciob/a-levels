'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aLevelsApp
 */

angular.module('aLevelsApp')
  .controller('MainCtrl', function ($rootScope, $scope, mapDataService) {

    $scope.mapData = $rootScope.mapData;//mapDataService.getMapData();

  });


