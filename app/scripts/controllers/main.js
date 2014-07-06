'use strict';

/**
 * @ngdoc function
 * @name aLevelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aLevelsApp
 */
angular.module('aLevelsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
