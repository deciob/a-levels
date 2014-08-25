'use strict';

(function() {

  function MapDataService($http) {
    var url = 'data/regions_england_wgs84_s.topo.json',
      resource = $http.get(url);

    this.getData = function() {
      return resource;
    };
  }

  function ALevelDataService($http) {
    var url = 'data/a_levels_regional_urban.csv',
      resource = $http.get(url);

    this.getData = function() {
      return resource;
    };
  }

  function ParseCsvDataService() {
    this.parse = function(data, accessor) {
      if (accessor !== undefined) {
        return d3.csv.parse(data, accessor);
      } else {
        return d3.csv.parse(data);
      }
    }
  }

  function SlugifyNameService() {
    this.slugify = function(name) {
      return name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
    }
  }

  angular
    .module('aLevelsApp')
    .service('MapDataService', MapDataService)
    .service('ALevelDataService', ALevelDataService)
    .service('ParseCsvDataService', ParseCsvDataService)
    .service('SlugifyNameService', SlugifyNameService);

})();
