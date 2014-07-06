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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.mapData = mapDataService.getMapData();

    $scope.mapData.then(function(res){
      console.log(res);
    })
    
  });
