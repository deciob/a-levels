'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aLevelsApp
 */

angular.module('aLevelsApp')
  .controller('AboutCtrl', function ($rootScope, $scope, mapDataService) {
    
    $scope.mapData = $rootScope.mapData;
    
  });
