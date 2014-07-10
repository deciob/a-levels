'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aLevelsApp
 */

angular.module('aLevelsApp')
  .controller('MainCtrl', function ($q, $scope, mapDataService, aLevelDataService) {

    $scope.allData = $q.all([
      mapDataService.getData(),
      aLevelDataService.getData()
    ])

  });


