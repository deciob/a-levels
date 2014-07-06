'use strict';

angular.module('aLevelsApp', [])
  .directive('englandRegionsMap', function() {
    return {
      restrict: 'E',
      template: '<div class="map">My map</div>'
    };
  });