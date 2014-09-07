'use strict';


// Declare app level module which depends on filters, and services
angular.module('aLevelsApp', [
  'ngRoute'
])
.constant('MAP_PARTIAL', {
  path: 'app/partials/partial1.html'
})
.constant('GEO_DATA', {
  path: 'app/data/regions_england_wgs84_s.topo.json'
})
.constant('THEME_DATA', {
  path: 'app/data/a_levels_regional_urban.csv'
})
.config(['$routeProvider', 'MAP_PARTIAL', function($routeProvider, MAP_PARTIAL) {
  $routeProvider.when('/', {templateUrl: MAP_PARTIAL.path, controller: 'MainCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}])
;
