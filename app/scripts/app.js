'use strict';

/**
 * @ngdoc overview
 * @name aLevelsApp
 * @description
 * # aLevelsApp
 *
 * Main module of the application.
 */

var app = angular
  .module('aLevelsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(function($rootScope, mapDataService) {
  $rootScope.mapData = mapDataService.getMapData();
});
